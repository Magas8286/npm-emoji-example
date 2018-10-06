/*Exercise 1

    Create a new project directory for tonight's exercises.
    Make this directory a git repository.
        Be sure to ignore any files or directories that shouldn't be sent to the remote repository.
    Initialize this directory as an NPM module
    Install the NPM module node-emoji and make sure that it's saved as a dependency.
    Save and commit these changes to the git repository
    Create a new javascript file in this directory.
        In this file, create a function that loops through an array of emojis and logs them to the console one line at a time (minimum of 10 emoji).
        You will have to find the documentation for the node-emoji module and find how to use it.
    Save and commit any changes to the git repository
    Push these changes to GitHub
*/
const emoji = require("node-emoji");

function displayingEmoji(myArray){
    myArray.forEach(element => {
        console.log(emoji.get(element));
    });
}

let emojiArray=["heart","coffee","pizza","yin_yang","aquarius","sparkles","skull_and_crossbones","rainbow","crescent_moon","tropical_drink"];
displayingEmoji(emojiArray);