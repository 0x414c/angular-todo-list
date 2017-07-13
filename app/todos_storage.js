'use strict';

// TODO: [1;0] Convert this to Service.
function loadTodos() {
  var todos = localStorage.getItem('todos');
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
