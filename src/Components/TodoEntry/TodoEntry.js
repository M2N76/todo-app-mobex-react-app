import React, { Component } from 'react'
import TodoStore from '../../Stors/TodoStore'
import{observer} from 'mobx-react';
@observer
class TodoEntry extends Component{
    state={
        value:''
    }
    inputChangeHandler=(event)=>{
        this.setState({value:event.target.value})  
    }
    keyDownHandler=(event)=>{
        if (this.state.value.trim()==='') {
            return
        }
        
        if (event.keyCode !==13){
            return
        }
        event.preventDefault();
        TodoStore.addTodo(this.state.value);
        this.setState({value:''})

    }
    render(){
        return (
           
            <header className='header'>
                <h1>todo</h1>
                <input
                 value={this.state.value}
                 onChange={event=>this.inputChangeHandler(event)}
                 onKeyDown={event=>this.keyDownHandler(event)}
                 type="text" 
                 className='new-todo' 
                 placeholder='what needs to be done' />
            </header>

        )
    }
}
export default TodoEntry;
