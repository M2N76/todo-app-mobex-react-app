import React,{Component} from 'react' 
import {observer} from 'mobx-react';
@observer
class TOdoItem extends Component {

  onToggle=()=>{
    this.props.todo.toggle();
  }
  handleDestroy = () => {
		this.props.todo.destroy();
  
  }
  render(){
    const {todo}=this.props;
    return (
      <li className={todo.completed ?  'completed' : ''}>
        <div className='view' >
          <input onChange={this.onToggle} type="checkbox" value=" " className='toggle' checked={todo.completed} />
          <label >{todo.title}</label>
          <button onClick={this.handleDestroy} className='destroy'></button>
        </div>
      </li>
      )
  }
      
}
export default TOdoItem;
