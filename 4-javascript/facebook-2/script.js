var database = [
    {
        username: "ganaa",
        password: "secret"
    },
    {
        username: "sally",
        password: "666"
    },
    {
        username: "tony",
        password: "shark"
    }    
];

var newsFeed = [{
        username: "Alex",
        timeline: "Web Developing is soo hard"
    },
    {
        username: "Sarah",
        timeline: "JavasScript makes me soo dizzy"
    }
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or/and password!");
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
