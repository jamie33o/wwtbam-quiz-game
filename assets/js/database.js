//----------Function's for database register/log in and display score--------------

// Initialize back4app Parse databse this was got on back4app website
Parse.initialize("IhNUqCfsmmW0MvFQ3TioMfv9gw54kNxzUgvmJKVl", "iIvlL1BIiVkZFmbzjClkWhbzbZVuCQA7ASADL7i4"); 
Parse.serverURL = "https://parseapi.back4app.com/";

/**for password text content on form */
const password = document.getElementById("password");
/**for username text content on form */
const username = document.getElementById("username");
/**div with sign up form */
const signUp = document.getElementById("sign-up");

/**for email text content */
const emailInputDiv = document.getElementById("email-input");
const emailInputText = document.getElementById("email");

//register buttton and event listener
const registerBtn = document.getElementById("register-btn");
registerBtn.addEventListener('click',  register);

//log in button and event listener
const logInBtn = document.getElementById("log-in");
logInBtn.addEventListener('click',  logIn);

//logout button and event listener
const logOut_btn = document.getElementById("log-out");
logOut_btn.addEventListener("click", logout);

//x button to hide sign up form
document.getElementById("close-sign-up").addEventListener('click',  function(){
signUp.style.display = "none";
});

// sign up form p element
const signUp_Pelement = document.querySelector("#sign-up p");

let sessionToken = localStorage.getItem('sessionToken'); // Fetch the session token from local storage

//feedback form div
const feedbackForm = document.getElementById("feedback");

//feedback button
const feedback_btn = document.getElementById("feedback-btn");
feedback_btn.addEventListener("click", function(){
  if(sessionToken){
    feedbackForm.style.display = "flex";
    const user = Parse.User.current();
    // Set the user's email and username as the default values for the form fields
    document.getElementById("feedback-email").value = user.get("email");
    document.getElementById("feedback-username").value = user.get("username");    
  }else {
    showNotification("Please Log In First!!!", "error")
  }
});

document.getElementById("close-feedback").addEventListener("click", function(evt){
  evt.preventDefault();
  feedbackForm.style.display = "none";
});

//when submit feedback is clicked it checks everything is valid then calls submit feedback 
//and passed the input fields content to it
document.getElementById("submit-feedback").addEventListener("click", async function(evt) {
  evt.preventDefault(); // Prevent the default form submission behavior
  const formData = new FormData(feedbackForm);

  const username = formData.get('feedback-username');
  const email = formData.get('feedback-email');
  const feedbackText = formData.get('feedback-text');

// Check if required fields are filled
if (!email || !username || !feedbackText) {
  showNotification("Please fill in all fields.","error");
  return;
}

if (!email.includes("@") || !email.includes(".") || email.length >= 30) {
  showNotification("Please enter a valid email address.","error");
  return;
}

if (feedbackText.length >= 300) {
  showNotification("Feedback is too long.","error");
  return;
}
  try {
    await submitFeedback(username,email,feedbackText);
  } catch (error) {
    showNotification('Error submitting feedback. Please try again later.', "error");
  }
});

 /**
  * this function save the users feedback with username and email to database then 
  * at a later date i will will set up server side code to send feedback to my email trough SMPT
  * @param {username} username - current users username
  * @param {email} email - users email
  * @param {text} feedbackText - feedback text
  */
 async function submitFeedback(username,email,feedbackText) {
  // Create a new Parse object for the "Feedback" class
  const Feedback = Parse.Object.extend('feedback');
  const feedbackObject = new Feedback();

  // Set the form data as object properties
  feedbackObject.set('username', username);
  feedbackObject.set('email', email);
  feedbackObject.set('feedback', feedbackText);

  try {
    // Save the feedback data to the "Feedback" class in the database
    await feedbackObject.save();
    showNotification("Feedback submitted....\nThank you...", "success");
    feedbackForm.reset();
    feedbackForm.style.display = "none";
  } catch (error) {
    console.error('Error submitting feedback:', error);

    showNotification('Error submitting feedback. \nPlease try again later.', "error");
  }
}

/**
 * Function to fetch scores from back4app and display them on the leader board
 * 
 *  */ 
async function displayScores() {
    let i =0;
    let query = new Parse.Query("User");
    query.descending("score"); // Sort the results by the "score" property in descending order

    query.find().then(function(objects){
        if(objects){
            const scoreList = document.getElementById('score-list');
            scoreList.innerHTML = ''; // Clear the existing list

            objects.forEach(object => {
                i++;
              const listItem = document.createElement('li');
              listItem.textContent = `${i}. ${object.get("username")} => score : ${object.get("score")}`;
              scoreList.appendChild(listItem);
            });        
        } else {
          showNotification(`Error saving score please log in again.`, "error");
        }
    }).catch(function(error){
      showNotification(`Error displaying score please log in again. \nError message: `+ error.message, "error");
    });
  }

  /**
   * checks if user password contains letters and numbers
   * @param {password} password - users password
   * @returns 
   */
  function isPasswordValid(passwordTextValue) {
    // Regular expressions to check for at least one letter and one number
    const letterRegex = /[a-zA-Z]/;
    const numberRegex = /\d/;
  
    // Check if the password contains at least one letter and one number
    const hasLetter = letterRegex.test(passwordTextValue);
    const hasNumber = numberRegex.test(passwordTextValue);
  
    return hasLetter && hasNumber;
  }

 /**
  * this function saves new user username, password and email to back4app database
  */
  async function register() {
    if(emailInputDiv.style.display === "none"){
        emailInputDiv.style.display = "flex";
        signUp_Pelement.innerHTML = "Register";

        if(!registerBtn.classList.contains("button")){
          registerBtn.classList.add("button");
          registerBtn.classList.remove("btn-no-background");

        }
          logInBtn.classList.add("btn-no-background");
          logInBtn.classList.remove("button");

        document.querySelector(".swap-position").style.flexDirection = "column";
    }else if (username.value === "" || emailInputText.value === "" || password.value === "") {
          showNotification("Please fill in all fields.", "error")
        } else if (password.value.length <= 4 || !isPasswordValid(password.value) || password.value.length >= 15) {
          showNotification("Password must be between 5 and 15 characters long and contain at least one letter and one number.","error")
        } else if (!emailInputText.value.includes("@") || !emailInputText.value.includes(".") || emailInputText.value.length >= 30) {
          showNotification("Please enter a valid email address.", "error");
        } else {
          // All conditions are met, proceed with further actions.
          
          // Creates a new Parse "User" object, which is created by default in your Parse app
        let user = new Parse.User();
        // Set the input values to the new "User" object
        user.set("username", username.value);
        user.set("email", emailInputText.value);
        user.set("password", password.value);
        
        try {
            // Call the save method, which returns the saved object if successful
            user = await user.save();
            if (user !== null) {
                signUp.style.display = "none";
                start_btn.innerHTML = "Start";
                // show log out btn
                logOut_btn.style.display = "flex";
                //show feedback form btn
                feedback_btn.style.display = "flex";
                // Get the session token from the user object
                sessionToken = user.getSessionToken();

                // Store the session token in local storage
                localStorage.setItem('sessionToken', sessionToken);  
                setUserSessionToken(sessionToken);    
                // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
                showNotification(`New user created with success! \n Username: ${username.value}`, "success");
            }
        } catch (error) {
            showNotification(`Error: ${error.message}!!! \nPlease try again....`, "error");
        }
    
    }
  }


/**
 * This function gets the current user object from the data base then calls the update function to update the score
 * @param {number} score - this is the points the user got for reaching a milestone 
 */
  function readThenUpdate(score) {
    const currentUser = Parse.User.current();
    if (currentUser) {
        const currentUsername = currentUser.get("username"); // Get the current user's username

        const query = new Parse.Query("User");
        query.equalTo("username", currentUsername);
        query.first().then(function (object) {
        if (object) {
            update(object, score);
           
        } else {
          showNotification(`Error saving score please log in again. Error message: `+ error.message, "error");
        }
        }).catch(function (error) {
          showNotification(`Error saving score please log in again. Error message: `+ error.message, "error");
        });
  }
}

readThenUpdate(0);

/**
 * This function adds the users stored points on the data base with the points they got for reaching a milestone and
 * then saves the new score to the database
 * @param {object} foundObject - this is the current user object
 * @param {number} score - this is the points the user got for reaching a milestone
 */
function update(foundObject, score) {
    let newScore = foundObject.get("score") + score;
    displayUserNameNscore(foundObject.get("username"),newScore);

    if(score > 0){
    foundObject.set('score', newScore);
    foundObject.save().then(function () {

    }).catch(function(error) {
      showNotification(`Error saving score please log in again. \nError message: `+ error.message, "error");
    });
  } 
}

/**
 * this function gets the username and password from the input fields and checks 
 * the against the objects in the database if they exist it logs the user in
 */
async function logIn() {
    if (emailInputDiv.style.display === "" || emailInputDiv.style.display === "flex") {
      
      emailInputDiv.style.display = "none";

      signUp_Pelement.innerHTML = "Log in";

      if(!logInBtn.classList.contains("button")){
        logInBtn.classList.add("button");
        logInBtn.classList.remove("btn-no-background");

      }
      registerBtn.classList.remove("button");
      registerBtn.classList.add("btn-no-background");
      document.querySelector(".swap-position").style.flexDirection = "column-reverse";
    } else if (username.value === "" || password.value === "") {
      showNotification("Please fill in all fields.", "error");
    } else if (password.value.length <= 4) {
      showNotification("Password must be at least 5 characters long.","error");
    } else 
      // All conditions are met, proceed with further actions.
      try {
        // Log in the user using Parse.User.logIn()
        const user = await Parse.User.logIn(username.value, password.value);
  
        // Get the session token from the user object
        sessionToken = user.getSessionToken();
  
        // Store the session token in local storage
        localStorage.setItem('sessionToken', sessionToken);
        setUserSessionToken(sessionToken);    

        // Hide the signup form
        signUp.style.display = "none";
        //change start btn text to start
        start_btn.innerHTML = "Start";
        // show log out btn
        logOut_btn.style.display = "flex";
        //show feedback form btn
        feedback_btn.style.display = "flex";

        showNotification(`Hey ` + user.get("username") + ` you are Logged in`, "success");
      } catch (error) {
        showNotification(`Hey ${username.value} you are not Logged in,\n Error: ${error.message}`, "error");
      }
}

async function logout() {
  try {
    // Call the Parse.User.logOut() method to log out the current user
    await Parse.User.logOut();
    
    // Clear the session token from local storage
    localStorage.removeItem('sessionToken');
    
    start_btn.innerHTML = "Log in/Register";
    logOut_btn.style.display = "none";
    feedback_btn.style.display = "none";
    clearInterval(intervalTimer);
    // Notify the user that they've been logged out
    showNotification("Logged out successfully.", "success");
  } catch (error) {
    showNotification(`Error during logout: ${error.message}`, "error");
  }
}


/**
 * This function shows the user score at the the top of the page
 * @param {text} username - current user username
 * @param {integer} score - user current score
 */
function displayUserNameNscore(username,score){
    let userScoreDiv = document.querySelector(".username-n-score p");
    userScoreDiv.innerHTML = `${username}: ${score} points`;
}
 
/** 
 *  This Function checks if a user is logged in by checking session token in local storage
 * */
function checkUserLogin() {
    if (sessionToken) {
        //event listener of the start up overlay
        setUserSessionToken(sessionToken);
        logOut_btn.style.display = "flex";
        feedback_btn.style.display = "flex";
      }else {
        logOut_btn.style.display = "none";
        feedback_btn.style.display = "none";
        start_btn.innerHTML = "Log in/Register";
      }
}

checkUserLogin();

/**this function checks if the user is logged in
 * if they are not it shows the sign up/log in form otherwise it doesnt
 */
async function setUserSessionToken(sessionToken){
    try {
        await Parse.User.become(sessionToken); // Set up the user session using the session token
        return true;
    } catch (error) {
        showNotification('Error setting up user session:\n'+ error, "error");
        // Handle any errors if token is invalid or expired
    }
}
