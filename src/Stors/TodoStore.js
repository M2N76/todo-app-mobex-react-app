import { observable, action, computed } from 'mobx';

import TodoModel from './TodoModel';

class TodoStore {
    @observable todos = []
    @observable todoFilter = 'all';
    lastId = 0
    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, this.todos.completed, this.lastId++))

    }
    @computed get unfinishedTodoCount() {

        return this.todos.filter(todo => !todo.completed).length;
    }
    @computed get completedCount() {
        return this.todos.filter(todo => todo.completed).length;
    }
    @computed get completed() {
        console.log("inja");
        
        return this.todos.filter(todo => todo.completed)
    }

    @action
    clearCompleted() {
        this.todos = this.todos.filter(
            todo => !todo.completed
        );
    }



}
const store = new TodoStore();
export default store; 
