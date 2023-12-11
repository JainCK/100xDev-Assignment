/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
  this.todoLists =[];    
  }

  add(todo){
    this.todoLists.push(todo);
  }

  remove(indexOfTodo){
    this.todoLists.splice(indexOfTodo,1);
  }

  update(index, updatedTodo){
    if(index>this.todoLists.length-1){
      return;
    }
    this.todoLists[index] = updatedTodo;
  }

  getAll(){
    return this.todoLists;
  }

  get(indexOfTodo){
    if(indexOfTodo<0 || indexOfTodo>=this.todoLists.length){
      return null;
    }
    return this.todoLists[indexOfTodo];
  }

  clear(){
    this.todoLists.splice(0, this.todoLists.length);
  }

}

module.exports = Todo;
