var database = [{
    username: "ganaa",
    password: "secret"
}];

var newsFeed = [{
        username: "Alex",
        timeline: "Web Developing is soo hard"
    },
    {
        username: "Sarah",
        timeline: "JavasScript makes me soo dizzy"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or/and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);