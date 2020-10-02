import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TodoStore from './Stors/TodoStore';
import TodoEntry from './Components/TodoEntry/TodoEntry';
import TOdoItems from './Components/TodoItems/TodoItems';
import Footer from '../src/Components/Footer/Footer';
import { observer } from 'mobx-react';
import './App.css';

var currentPath = ""
@observer
class App extends Component {


  componentDidUpdate(prevProps, prevState) {

    if (currentPath !== this.props.history.location.pathname) {

      switch (this.props.history.location.pathname) {
        case '/active':
          TodoStore.todoFilter = 'active'
          break;
        case '/completed':
          TodoStore.todoFilter = 'completed'
          break;
        default:
          TodoStore.todoFilter = 'all'
      }
    }
  }
  render() {
    return (
      <div className='todoapp'>
        <TodoEntry />
        <TOdoItems />
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);



