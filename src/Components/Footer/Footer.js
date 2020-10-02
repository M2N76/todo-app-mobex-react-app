import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import TodoStore from '../../Stors/TodoStore';
import { observer } from 'mobx-react';
import '../../App.css';
@observer
class Footer extends Component {
    
    clearCompleted = () => {
        TodoStore.clearCompleted();
    };
    render() {
        const clearButton = (
            TodoStore.completedCount === 0
                ? null
                : <button
                    className="clear-completed"
                    onClick={this.clearCompleted}>
                    Clear completed
                    </button>
        );  
        	if (!TodoStore.unfinishedTodoCount && !TodoStore.completedCount)
			return null;

        return (
            <footer className="footer">
                <span className="todo-count">
                    {TodoStore.unfinishedTodoCount} items left
                </span>
                <ul className="filters">
                    <li> <NavLink to="/"exact >
                        All
                        </NavLink>
                    </li>
                    <li> <NavLink to="/active">
                        Active
                        </NavLink>
                    </li>
                    <li> <NavLink to="/completed">
                        Completed
                        </NavLink>
                    </li>
                </ul>
                {clearButton}
            </footer>
        );
    }
}

export default Footer;



