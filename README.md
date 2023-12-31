<img src="docs/readme_images/wwtbam_logo.png" alt="logo" width="100"/>

Welcome to, 

# Who Wants To Be A Millionaire

The live link can be found here - [Who wants to be a millionaire](https://jamie33o.github.io/wwtbam-quiz-game/)

![ScreenShot](docs/readme_images/responsive_screenshot.png)

(Developer: Jamie O'Neill)

## Introduction

Welcome to the "Who Wants To Be A Millionaire" game! This interactive quiz game replicates the famous TV show. The objective is to correctly answer a series of increasingly difficult multiple-choice questions and progress towards winning one million (virtual) euro! The game is designed for educational purposes and will not be monetized


![GitHub last commit](https://img.shields.io/github/last-commit/jamie33O/wwtbam-quiz-game?color=red)
![GitHub contributors](https://img.shields.io/github/contributors/jamie33O/wwtbam-quiz-game?color=orange)
![GitHub language count](https://img.shields.io/github/languages/count/jamie33O/wwtbam-quiz-game?color=yellow)
![GitHub top language](https://img.shields.io/github/languages/top/jamie33O/wwtbam-quiz-game?color=green)
![W3C Validation](https://img.shields.io/w3c-validation/html?color=blueviolet&targetUrl=https://jamie33o.github.io/wwtbam-quiz-game/)
___

## Table of Contents

- [Project Goals](#project-goals)
- [User Experience](#user-experience)
- [Design](#design)
- [Features](#features)
  - [Welcome Overlay Menu Screen/Page](#welcome-overlay-menu-screenpage)
  - [Quiz Page](#quiz-page)
- [Technologies](#technologies)
- [Testing](#testing)
  - [Responsiveness](#responsiveness)
  - [Validator Testing](#validator-testing)
  - [Accessibility](#accessibility)
  - [LightHouse Testing](#lighthouse-testing)
  - [Testing user stories](#testing-user-stories)
  - [Form Testing](#form-testing)
- [JavaScript Validation](#javascript-validation)
- [Bugs](#bugs)
- [Deployment](#deployment)
- [Clone the Repository Code Locally](#clone-the-repository-code-locally)
- [Credits](#credits)
      

___

## Project Goals

The goals of this website include:

- __Player Goals__

  - Play a fun and interactive online quiz game.
  - Quickly understand how to play.
  - Challenge themselves by answering a series of quiz questions.
  - Play the game as often as desired with a easy "play again" option.
  - Learn interesting facts and trivia.

- __Site Owner Goals__

  - Create a fun interactive game that furthers my understanding of problem solving, through the use of code. From HTML, CCS to the JavaScript language.
  - Create an attractive and easy to use website and user interface.
  - Create a fully responsive game website.

  [Back to Table of Contents](#table-of-contents)

___

## User Experience

- __Target Audience__

  - The Who wants to be a millionaire game is perfect for fans of the famous show, and if you're a brainiac who craves exciting quiz challenges, this game is tailored for you. It's also an ideal choice for those who enjoy playing online quiz games. All you need is a web browser with JavaScript enabled on your device to embark on this thrilling journey of knowledge and entertainment.

- __User Requirements and Expectations__

  - An intuitive navigation system regardless of screen size
  - Easy to locate and understand game rules and instructions on how to play the game
  - An intuitive game interface with clear controls and notifications to aid game play
  - The ability to turn game Sound effects on or off
  - An easy way to register so you will be added to the leader board and add to your score each game
  - An easy mechanism to Play Again.
  - An accessible game website that can be viewed and played on any device

  [Back to Table of Contents](#table-of-contents)

- __User Stories__

  - The players of the game are the primary users of this website with site owner being a secondary user:

 - __Players__

1.	As a player, I want the website to load quickly and provide a seamless and enjoyable quiz experience without any technical issues.
2.	As a player, I want to have a visually appealing and intuitive interface that makes it easy for me to understand and interact with the quiz.
3.	As a player, I want to be able to see other players score during the game
4.	As a player, I want to be able to see my score and progress during the game
5.	As a player, I want the quiz questions to be challenging and engaging.
6.	As a player, I want some aids if im struggling with a question
7.	As a player, I want to be able to see the correct answers for the questions I answered incorrectly to learn and improve my knowledge.
8.	As a quiz player, I want the option to play the quiz again when i aswer wrong.
9.	As a player, I want to be able to easily navigate back to the home page or explore other sections of the website while playing the game.
10.	As a player, I want the game to have smooth and fluid animations and transitions, enhancing the overall visual appeal and user experience.
11.	As the site owner, I want users to see a 404 page if they enter an incorrect URL so they can be navigated back to the main game page

- __Site Owner__

17. As the site owner, I want to receive feedback from players so I can understand if they are enjoying the game, identify any bugs, and continually improve the game.
18. As the site owner, I want users to see a 404 page if they enter an incorrect URL so they can be navigated back to the main game page.

[Back to Table of Contents](#table-of-contents)

___

## Design

- __Design Choices__

The aim of this site is to provide the look and feel similar to the tv show. With its dark blue colours with spotlights. All images, colours, and sounds were chosen with this aim in mind.

- __Wireframes__

- Start overlay page

  - laptop screen

![wireframe design for game page large screen](docs/wireframes/game-screen-large-wf.png)

  - phone screen

![wireframe design for game page phone](docs/wireframes/game-screen-small-wf.png)

- Game page

  - laptop screen 

![wireframe design for startscree laptop](docs/wireframes/start-screen-large-wf.png)

  - phone screen 

![wireframe design for start screen phone](docs/wireframes/start-screen-small-wf.png)

[Back to Table of Contents](#table-of-contents)


- __Flowchart__ 

![Flowchart](docs/readme_images/flowchart.png)


___


## Features

The website comprises of three pages: a welcome overlay screen/page, a quiz page, and a 404 error page. These pages follow a user-friendly and easily navigable framed pattern, enabling visitors to swiftly access key information at the center of the screen. 

On the menu screen, located at the top center of the page, visitors will immediately notice the quiz game logo. Positioned below the logo are the mute/sound button, the login/register button, the instructions button, and finally, the leader board button. When the user is registered/logged in they will then also see the feedback button and the logout button at the top right corner. This intuitive layout ensures that users can quickly grasp the name of the game, commence playing, understand the gameplay instructions, and conveniently toggle sound or music on or off.

### Existing Features

#### Welcome Overlay menu Screen/Page
  

- On the main game page, you will be greeted with a captivating background featuring spotlight effects and a gradient of light to dark blue. The following essential elements are also present on this page:

![Welcome Overlay Screen/Page](docs/readme_images/menu-screen1.png)   ![Welcome Overlay Screen/Page](docs/readme_images/menu-screen2.png)


- Register/Log in button

  - Register/Log in Button: When users press this button a form will appear and Users can easily registration and login, allowing them to participate in the game and keep track of their progress.

  ![Log in](docs/readme_images/login-screenshot.png)   ![Register](docs/readme_images/register-screenshot.png)


- Logo 

  - The Logo: The game's logo is prominently displayed, giving users a clear visual identity of the game they are engaging with.
<img src="docs/readme_images/wwtbam_logo.png" alt="logo" width="100"/>

- Sound mute/unmute toggle icon 

  - Sound Mute/Unmute Toggle Icon: Users have the option to control the sound by toggling between mute and unmute, ensuring a customizable audio experience.

 <img src="docs/readme_images/no-sound.png" alt="logo" width="100"/>
 <img src="docs/readme_images/sound-on.png" alt="logo" width="100"/>

- Instruction's button

  - Instructions Button: For newcomers or those needing a refresher, an "Instructions" button is readily available. Clicking on it will provide clear guidelines on how to play the game.

![How to Play](docs/readme_images/instruction_screenshot.png)
  
- Leader Board button

  - Leaderboard Button: To encourage competitiveness and track user scores, a "Leaderboard" button is provided. Players press this to shoew the leader board and then they can check their standings among others who have participated in the game.
 
![Leader board](docs/readme_images/leaderboard_screenshot.png)

- Feedback form button

  - Feedback button: We have a feedback form so users can notify us of any issues or complaints and let us know about there experience with the game.

![Feedback form](docs/readme_images/form-screenshot.png.)


[Back to Table of Contents](#table-of-contents)

#### Quiz Page

![Quiz page](docs/readme_images/quiz-page.png)

- On the main game page, you will find an engaging background featuring spotlight effects and a gradient from light to dark blue. The page includes the following key elements:
  

- Life Lines box

  - The Life lines box has 3 life lines and when each button is pressed it will show the results inside the box under the buttons except for the 50:50 button as two answer will just dissapear:

  - 50:50 button: This button when pressed will make 2 wrong answers dissapear.

<img src="docs/readme_images/50_50_img.png" alt="fifty fifty button" width="100"/>

  - Ask the audience button: This button when pressed will show a bar chart to show the results of the audience votes with a letter on each bar to show which answer it represents the bars are animated so they rise slowly to there final position it does not always give the right answer.

<img src="docs/readme_images/ask_the_audience_img.png" alt="ask the audience img" width="100"/>


  - Phone A friend button: This button when pressed will show a paragraph of text representing the fake caller's anwers 

<img src="docs/readme_images/phone_a_friend_img.png" alt="phone a friend button img" width="100"/>

  - After each button is pressed and user goes to the next question a red x will be on the button to show it has been used.
  
<img src="docs/readme_images/redX_50_50_img.png" alt="fifty fifty button image" width="100"/>
<img src="docs/readme_images/redX_ask_the_audience_img.png" alt="ask the audience button image" width="100"/>
<img src="docs/readme_images/redX_phone_a_friend_img.png" alt="phone a friend button image" width="100"/>


- Menu button

  - The menu button is between the mute/sound button and the logo in the center of the page when pressed it shows the menu screen but it does not stop the timer so the user can't use it to pause the game and google the answer.
    
<img src="docs/readme_images/menu.png" alt="menu button image" width="100"/>

- Timer

  - On the main game page, you'll find the timer positioned below the menu button in the center of the screen. The timer is set to 30 seconds for each question and is represented as a numerical countdown in the center. Encircling the timer, there is a dynamic circle animation that visually illustrates the remaining time, gradually shrinking as the seconds pass. This animation adds excitement and urgency to the game, prompting users to make quick decisions during their gameplay. 

<img src="docs/readme_images/timer_screenshot.png" alt="timer image" width="200"/>

- Prize's box

  - On the main game page, the prize section is located at the top right corner, presented as a list ranging from €500 to €1 million. As the user progresses through the game and answers questions correctly, the corresponding prize amount will be highlighted with a green background, indicating the current level they are on.

![prize section](docs/readme_images/prize_section.png)

- There are three milestone prizes (highlighted in orange) that hold special significance in the game:

  - €5,000 Milestone: The user reaches this milestone they will score 50 points. Upon reaching this milestone, a pop up will appear informing the user they have reached a milestone and ask's if they would like to save or continue

![pop up for €5000](docs/readme_images/5000_popup.png)

  - €50,000 Milestone: When the user achieves €50,000 Milestone, they will get 500 points, a pop up will appear informing the user they have reached a milestone and ask's if they would like to save or continue

![pop up for €50,000](docs/readme_images/50_000_popup.png)

  - €1 Million Milestone: Reaching the ultimate goal of €1 million prize will unlock 1000 points, a pop up will appear informing the user they have reached a milestone and ask's if they would like to save or continue

![pop up for €1 milllion](docs/readme_images/million_popup.png)

-  When the user reaches any of these milestone prizes, a pop-up notification will appear, congratulating them on their achievement. The pop-up will display the prize amount they are currently on and the score they have obtained. For the €500 and €50,000 milestones, two buttons will be available:

  - "Continue" button: If the user clicks this button, they can proceed with the game and continue playing from the current milestone.

  - "Save" button: By clicking this button, the user can choose to exit the game, and their progress will be saved at the current milestone. When they return to the game, they will resume from where they left off.


- Upon reaching the €1 million milestone, a special pop-up will appear, announcing the user's victory in winning the grand prize. The pop-up will provide two options:

  - "Play Again" button: If the user wants to play again and aim for higher scores, they can click this button and restart the game.

  - "Quit" button: Clicking this button will allow the user to gracefully exit the game after their triumph.


These features and notifications enhance the excitement and engagement of the game while providing the user with clear feedback on their progress and achievements.


- Question and 4 answer boxs

  - On the main game page, the question and four answer choices are displayed at the bottom of the screen. When the user selects an answer by clicking on it, they will instantly receive feedback on whether their choice was correct or incorrect.

![Question and 4 answer boxs](docs/readme_images/answer_question_boxs.png)

  - If the user's answer is correct:

    - They will be notified immediately that their answer is correct.
    - The game will automatically proceed to the next question, presenting them with another opportunity to answer and continue their progress.

  - If the user's answer is wrong:

    - A pop-up notification will appear, informing them that the game is over for this session.
    - The pop-up will reveal the correct answer to the question they just attempted.
    - This swift feedback system allows users to quickly know their performance, learn from their mistakes, and continue playing or start a new game with improved knowledge. It keeps the gameplay engaging and encourages users to challenge themselves to achieve better results in subsequent attempts.
  
![wrong answer pop up](docs/readme_images/wrong_answer_popup.png)

- Error and success Notification

  - Error: If the user enter's incorrect information or leave's a field empty on the log in/register or feedback form they will get an error drop down notification in red to let them know what they have done wrong.

![Error notification](docs/readme_images/error-notification.png)

  - success: If the user submit's login/register or feedback form correctly or answers a question correctly they will see a drop down notification to let them know it is a success or it is correct.

![Error notification](docs/readme_images/success-notification.png)

- Footer

  - On the main game page, the footer is designed to appear when the user scrolls to the bottom of the page, and it will automatically disappear when they scroll back up. The footer contains text, serving as a link to relevant information and resources.

![wrong answer pop up](docs/readme_images/footer.png)

- Responsiveness

  On screens that are too short to fit everything on screen the prize section and the life line section are out of view and a button to show/hide them is at the side of the screen.

![game page smaller device layout](docs/readme_images/small-device-layout.png)

![game page smaller device layout](docs/readme_images/small-device-layout2.png)

![game page smaller device layout](docs/readme_images/small-device-layout1.png)


## Technologies

- HTML
  - The structure of the Website was developed using HTML as the main language.
- CSS
  - The Website was styled using custom CSS in an external file.
- Javascript
  - Building, structuring and presenting project
- Back4app parse database
  - Storing user log in details and score also displaying sore on the leader board
- Visual Studio Code
  - The website was developed using Visual Studio Code IDE
- GitHub
  - Source code is hosted on GitHub and delpoyed using Git Pages.
- Git
  - Used to commit and push code during the development opf the Website
- Flaticon
  - Sound and menu icons created by doraclub - Flaticon section.
- Tinyjpg
  - https://tinyjpg.com/ was used to reduce the size of the images used throughout the website
- Favicon.io
  - favicon files were created at [favicon.io](fahttps://favicon.io/favicon-converter/)
- balsamiq
  - wireframes were created using balsamiq from [balsamiq.com](https://balsamiq.com/wireframes/desktop/#)

[Back to Table of Contents](#table-of-contents)

## Testing 

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Opera browsers.

Steps to test:

1. Open browser and navigate to [Who wants to be a millionaire](https://wave.webaim.org/report#/https://jamie33o.github.io/wwtbam-quiz-game)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width
6. Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched. No horizontal scroll is present. No elements overlap.

Actual:

Website behaved as expected with the exception of some images stretch.

Website was also opened on the following devices and no responsive issues were seen:

Oukitel C21 Pro
TCL 30 Pro
iPhone XR
Samsung Galaxy Tablet

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjamie33o.github.io%2Fwwtbam-quiz-game%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjamie33o.github.io%2Fwwtbam-quiz-game&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![W3C validator homepage](docs/readme_images/html.png)
![W3C jigsaw validator css](docs/readme_images/css.png)


### Accessibility

[Wave Accessibility](https://wave.webaim.org/report#/https://jamie33o.github.io/wwtbam-quiz-game) tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

![wave Accessibility](docs/readme_images/wave1.png) ![wave Accessibility](docs/readme_images/wave2.png)

Testing was focused to ensure the following criteria were met:

- All forms have associated labels so that this is read out on a screen reader to users
- Color contrasts meet a minimum ratio as specified in WCAG 2.1 Contrast Guidelines
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed


- Manual tests were also performed to ensure the website was accessible as possible and an accessibility issue was identified.

  - Issue #1: Some buttons had no text so wave accessability tool was giving an error

    - Fix: added aria-label.

[Back to Table of Contents](#table-of-contents)

### LightHouse Testing

![index.html](docs/readme_images/lighthouse.png)


### Testing user stories

#### Players

User Story 1:
As a player, I want the website to load quickly and provide a seamless and enjoyable quiz experience without any technical issues.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Website Load | Player opens the website | The website loads quickly and provides a seamless and enjoyable quiz experience | Works as expected |


User Story 2:
As a player, I want to have a visually appealing and intuitive interface that makes it easy for me to understand and interact with the quiz.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Visual Appeal	| Player views the interface | The interface is visually appealing and intuitive, making it easy to understand and interact with the quiz | Works as expected |


User Story 3:

As a player, I want to be able to see other players score during the game

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| leader board | player clicks menu and then leader board | list of user scores appear	| Works as expected |


User Story 4:

As a player, I want to be able to see my score and progress during the game

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| prize section and score at the top of game page | Player reaches milestone | score at top of page and prize section increase | Works as expected |


User Story 5:

As a player, I want the quiz questions to be challenging and engaging, providing a variety of question types.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Challenging Questions | Player answers quiz questions | The quiz questions are challenging and engagin. | Works as expected |


User Story 6:

As a player, I want some aids if im struggling with a question

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Life lines | Player presses life line button | The player gets help | Works as expected |


User Story 7:

As a player, I want to be able to see the correct answers for the questions I answered incorrectly to learn and improve my knowledge.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Incorrect Answers Feedback | Player answers wrong | Pop up display game over and shows the correct answer | Works as expected |


User Story 8:

As a quiz player, I want the option to play the quiz again when i aswer wrong.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Replay Quiz | Player answers wrong | The player can choose to play again | Works as expected |


User Story 9:

As a player, I want to be able to easily navigate back to the home page or explore other sections of the website while playing the game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| menu button | Player presses menu | The player can easily navigate back to the home page or explore other sections of the website without any hassle | Works as expected |


User Story 10:

As a player, I want the game to have smooth and fluid animations and transitions, enhancing the overall visual appeal and user experience.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Smooth Animations | Player interacts with various elements in the game | The game features smooth and fluid animations and transitions, enhancing the visual appeal and providing a seamless user experience | Works as expected |

#### Site Owner


User Story 11:

As the site owner, I want users to see a 404 page if they enter an incorrect URL so they can be navigated back to the main game page

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| 404 Page | The player enters an invalid game URL in their browser | A 404 Not Found page with details on how to navigate back to the game is shown | Works as expected |
| 404 Return Home Button | The player enters an invalid game URL in their browser  | The player clicks on the Return Home button on the 404 page and is taken back to the home page to start a new game | Works as expected |



#### Form Testing

The Registration form on the menu overlay page was tested to ensure it functioned as expected when correct data was input and when incorrect data was input. The following test scenarios were covered:

_Scenario One - Correct Inputs_

Steps to test:

1. Navigate to [who wants to be a millionaire](https://jamie33o.github.io/wwtbam-quiz-game)
2. Scroll down to the form and input the following data:
   - Username: John.doe
   - Email: doe.john@test.com
   - Password: 12345.
3. Click register
4. User should get alert logged in succesfully

Expected:

Form submits with no warnings or errors and user is notified that they are logged in sucessfully.

Actual:

Website behaved as expected with no errors or warnings.

_Scenario Two - Missing Required Field_

Steps to test:

1. Navigate to [who wants to be a millionaire](https://jamie33o.github.io/wwtbam-quiz-game)
2. Scroll down to the form and input the following data:
   - Name:
   - Email: doe.john@test.com
   - Password: 12345.
3. Click register

Expected:

The form does not submit and an Error is displayed to tell the user that the field is required.

Actual:

Website behaved as expected, error message was displayed and the form did not submit.

[Back to Table of Contents](#table-of-contents)

### JavaScript Validation

The JS Hint JavaScript Validation Service was used to validate the JavaScript code on the website. The results below show 4 code warnings related to 'async functions' is only available in ES8 (use 'esversion: 8')". There is 1 undeclared Variables as these are dynamic variables or are declared in the main script.js file or relate to the EmailJS. I'm flagging these for future improvement:


**Metrics**

- There are 60 functions in all js files.
- Function with the largest signature take 4 arguments, while the median is 0.
- Largest function has 21 statements in it, while the median is 4.
- The most complex function has a cyclomatic complexity value of 7 while the median is 1.

**Four warnings:**

- 'async functions' is only available in ES8 (use 'esversion: 8').
- 'async functions' is only available in ES8 (use 'esversion: 8').
- 'async functions' is only available in ES8 (use 'esversion: 8').
- 'async functions' is only available in ES8 (use 'esversion: 8').

**One undefined variable**

- 2	"Parse" in databse.js

Parse is part of back4app database which is bein installed in the head section of the index.html 

[Back to Table of Contents](#table-of-contents)

## Bugs

| **Bug** | **Fix** |
| --- | --- |
| Bug: Music or Sound Buttons not working, or image changes but sound stays the same. | Solution: Reviewed the event listeners and sound playback functions to ensure they are properly connected. Fixed the code that handles sound playback, ensuring that the correct sound file is played when the button is clicked and that the image and sound stay synchronized. |
| Bug: All sound not being muted on the overlay screen. | Solution: Adjusted the code responsible for muting and unmuting sounds to cover all sound elements present on the overlay screen. Ensured that the mute functionality applies to all sounds consistently. |
| Bug: Overlay screen not showing. | Solution: Identified the code issue that prevented the overlay screen from being displayed. Corrected the code to properly trigger the display of the overlay screen when necessary. |
| Bug: Overlay screen click to enter not working. | Solution: Reviewed the event listeners and click handlers associated with the overlay screen. Fixed the code to properly detect and respond to clicks, allowing users to enter the desired section or continue with the game as intended. |
| Bug: Popup not working. | Solution: Examined the code associated with the popup functionality, including event listeners and animation triggers. Identified and resolved any code issues that prevented the popup from displaying or functioning as intended. |
| Bug: Popup not closing. | Solution: Inspected the code responsible for closing the popup upon user interaction or completion of a specific action. Fixed any issues that prevented the popup from closing, ensuring that it can be dismissed when needed. |
| Bug: JSON questions not loading. | Solution: Reviewed the code responsible for fetching and parsing JSON data for quiz questions. Identified and fixed any issues related to data retrieval, parsing, or data structure compatibility, ensuring that the questions load successfully. |
| Bug: Timer animation not changing. | Solution: Examined the code that updates the timer animation during the quiz. Corrected any issues with calculating or updating the timer animation value to reflect the timer progress accurately. |
| Bug: Life line results being empty, showing no results. | Solution: Investigated the code responsible for populating and displaying the results. Identified and fixed any issues that prevented the proper rendering of results data, ensuring that the results shows the relevant information. |
| Bug: Register/log in form not submitting. | Solution: Reviewed the code associated with the form, including form validation and submission handling. Fixed any issues that prevented the form from being submitted successfully, allowing users to provide feedback as intended. |
| Bug: Image links missing "." before the "/". | Solution: Scanned the codebase to identify missing periods (".") before the forward slashes ("/") in image URLs. Added the missing periods to ensure the image links point to the correct locations. |
| Bug: "play() failed because the user didn't interact with the document first" error. | Solution: Updated the code that triggers sound playback to address the error and ensure sound can be played without requiring prior user interaction with the document. |


### Unfixed Bugs 

- notification not working on overlay screen on some apple devices i think it is showing under the overlay as it works on the game screen 


[Back to Table of Contents](#table-of-contents)


## Deployment

### Version Control
The site was created using the Visual Studio code editor and pushed to github to the remote repository ‘wwtbam-quiz-game’.

The following git commands were used throughout development to push code to the remote repo:

- git add <file> - This command was used to add the file(s) to the staging area before they are committed.

- git commit -m “commit message” - This command was used to commit changes to the local repository queue ready for the final step.

- git push - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages
- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully.

The live link can be found here - https://jamie33o.github.io/wwtbam-quiz-game 



### Clone the Repository Code Locally
- Navigate to the GitHub Repository you want to clone to use locally:
  - Click on the code drop down button
  - Click on HTTPS
  - Copy the repository link to the clipboard
  - Open your IDE of choice (git must be installed for the next steps)
  - Type git clone copied-git-url into the IDE terminal
  - The project will now of been cloned on your local machine for use.

[Back to Table of Contents](#table-of-contents)

## Credits 

Here we credit everywhere we have got content for the website and any code that was taken from other sources.

### Images

- The questions and answer's were got from  [trivia api](https://the-trivia-api.com/).
- The life line image for the buttons were taken from [millionaire.fandom.com](https://millionaire.fandom.com/wiki/)
- The menu icon and the sound icons were taken from [https://www.flaticon.com/free-icons/sound-on](https://www.flaticon.com/free-icons/sound-on)
- The answer's and question background were got from [hiclipart](https://www.hiclipart.com/free-transparent-background-png-clipart-hzgpa)
- The logo was got from [devianart](https://www.deviantart.com/gabe0530/art/Who-Wants-To-Be-A-Millionaire-PH-Logo-Remake-681103990)

### Code 

- The Idea and some of the javascript code for the footer was got from [stack overflow](https://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom-not-just-the-window-but-any-element)
- Some of the javascript code for the database was got from [back4app](https://www.back4app.com/docs/javascript/parse-javascript-sdk)
- The javascript for the shuffling of the answers was got from [stack overflow](https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array)

### Audio References
* All sound's were got from - [soundboard](https://www.soundboard.com/sb/onemilliondollars)


[Back to Table of Contents](#table-of-contents)
