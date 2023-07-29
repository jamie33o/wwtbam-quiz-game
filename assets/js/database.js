//----------Function's for database register/log in and display score--------------

// Initialize back4app Parse databse
Parse.initialize("IhNUqCfsmmW0MvFQ3TioMfv9gw54kNxzUgvmJKVl", "iIvlL1BIiVkZFmbzjClkWhbzbZVuCQA7ASADL7i4"); 
Parse.serverURL = "https://parseapi.back4app.com/";


/**for password text content on form */
const password = document.getElementById("password");
/**for username text content on form */
const username = document.getElementById("username");
/**div with sign up form */
const signUp = document.getElementById("sign-up");

/**for email text content */
let emailInput = document.getElementById("email-input");

document.getElementById("register").addEventListener('click',  register);
document.getElementById("log-in").addEventListener('click',  logIn);

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
           console.log("Nothing found, please try again");
        }
    }).catch(function(error){
        console.log("Error: " + error.code + " " + error.message);       
    });
  }

  // Function to add a new user to the scores.json file
  async function register() {

    if(emailInput.style.display === "none"){
        emailInput.style.display = "flex";
    }else{
     // Creates a new Parse "User" object, which is created by default in your Parse app
        let user = new Parse.User();
        // Set the input values to the new "User" object
        user.set("username", username.value);
        user.set("email", document.getElementById("email").value);
        user.set("password", password.value);
        
        try {
            // Call the save method, which returns the saved object if successful
            user = await user.save();
            if (user !== null) {
                signUp.style.display = "none";
            // Get the session token from the user object
            const sessionToken = user.getSessionToken();

            // Store the session token in local storage
            localStorage.setItem('sessionToken', sessionToken);  
            setUserSessionToken(sessionToken);    
            // Notify the success by getting the attributes from the "User" object, by using the get method (the id attribute needs to be accessed directly, though)
            alert(
                `New user created with success! ObjectId: ${
                user.id
                }, ${user.get("username")}`
            );
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }
  }

  readThenUpdate(0);

  function readThenUpdate(score) {
    const currentUser = Parse.User.current();
    if (currentUser) {
        const currentUsername = currentUser.get("username"); // Get the current user's username

        let query = new Parse.Query("User");
        query.equalTo("username", currentUsername);
        query.first().then(function (object) {
        if (object) {
            update(object, score);
           
        } else {
            console.log("Nothing found, please try again");
        }
        }).catch(function (error) {
        console.log("Error: " + error.code + " " + error.message);
        });
  }
}

function update(foundObject, score) {
    let newScore = foundObject.get("score") + score;
    displayUserNameNscore(foundObject.get("username"),newScore);

    if(score > 0){
    foundObject.set('score', newScore);
    foundObject.save().then(function (object) {
      console.log('score updated! Username: ' + object.get("username") + ' and new score: ' + object.get("score"));
    }).catch(function(error) {
      console.log('Error: ' + error.message);
    });
}
}

async function logIn() {
    if (emailInput.style.display === "" || emailInput.style.display === "flex") {
      emailInput.style.display = "none";
    } else {
      try {
        // Log in the user using Parse.User.logIn()
        const user = await Parse.User.logIn(username.value, password.value);
  
        // Get the session token from the user object
        const sessionToken = user.getSessionToken();
  
        // Store the session token in local storage
        localStorage.setItem('sessionToken', sessionToken);
        setUserSessionToken(sessionToken);    

        // Hide the signup form
        signUp.style.display = "none";
  
        // Log the user login success
        console.log('User logged in successfully with name: ' + user.get("username") + ' and email: ' + user.get("email"));
      } catch (error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    }
}

function displayUserNameNscore(username,score){
    let userScoreDiv = document.querySelector(".username-n-score p");
    userScoreDiv.innerHTML = `${username}: ${score} points`;
}
 
// Function to check if a user is logged in
function checkUserLogin() {
    const sessionToken = localStorage.getItem('sessionToken'); // Fetch the session token from local storage
    // To disable scrolling
    document.body.style.overflow = "hidden";
    if (sessionToken) {
        //plays the start theme
        playAudioWithSrc("assets/sounds/start_theme.mp3");
        //event listener of the start up overlay
        setUserSessionToken(sessionToken);
        signUp.style.display = "none";
      }else {
        signUp.style.display = "flex";
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
        console.error('Error setting up user session:', error);
        // Handle any errors if token is invalid or expired
    }
}