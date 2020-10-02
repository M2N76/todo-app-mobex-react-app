import React, { Component } from 'react'
import { observer } from 'mobx-react';
import TOdoItem from './TodoItem/TodoItem';
import TodoStore from '../../Stors/TodoStore';

@observer
class TOdoItems extends Component {
  

    getVisibleTodos() {
		return TodoStore.todos.filter(todo => {
			switch (TodoStore.todoFilter) {
				case 'active':
					return !todo.completed;
				case 'completed':
					return todo.completed;
				default:
					return true;
			}
		});
	}
    render() {
      
     
        const todo =this.getVisibleTodos().map((todo,id) => {
            return (
                <TOdoItem 
                key={todo.id}
                todo={todo}
                id={todo.id} />
            )
        })
       
        return (

            <section className='main'>
                <ul className='todo-list'>
                 {todo}
                </ul>
            </section>

        )
    }
}
export default TOdoItems;
