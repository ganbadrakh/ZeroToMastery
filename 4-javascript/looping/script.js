
    var todos = [
        "clean room",
        "brush teeth",
        "exercise",
        "learn javascript",
        "learn blockchain"
    ];

    var todosImportant = [
        "learn java",
        "learn backend"
    ];

    var first = "I have to";

    for (var i = 0; i < todos.length; i++) {
        todos[i] = first + " " + todos[i] + "!";
        console.log(i);
        console.log(todos[i]);
    }

    todos.forEach(function(todo, i) {
        console.log(todo, i);
    })

    function logTodos(todo){
        console.log(todo);
    }
    
    todos.forEach(logTodos);
    todosImportant.forEach(logTodos);

    

