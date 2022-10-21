import React from 'react';
import Input from './components/input/';
import Button from './components/button/';
import ListItem from './components/listItem/';
import './App.css';
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      inputValue: '',
      todoList: []
    }
  }
  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }
  onClickBtn = () => {
    const { inputValue, todoList } = this.state;
    const todo = {
        todoStr: inputValue,
        toDoDate: new Date().toLocaleTimeString()
    }
    this.setState({
        todoList: [todo, ...todoList],
        inputValue: ''
    });
  }
  onRemoveTodo = (todoName) => {
    const { todoList } = this.state;
    const todoIndex = todoList.filter((str) => str === todoName);
    const newTodoList = [...todoList.slice(0, todoIndex), ...todoList.slice(todoIndex + 1)];
    this.setState({
      todoList: newTodoList
    });
  }
  render() {
    const { inputValue, todoList } = this.state;
    return (
    <div>
      <div>
        <h1 className="h1">TO<span className="span_h1">DO</span> list</h1>
      </div>
      <div className="control">
        <input
          className="input"
          type="search"
          value={ inputValue }
          onChange={ this.onChangeInput }
        />
        <button
          className="btn"
          onClick={ this.onClickBtn }
        >
        </button>
      </div>
      <div className="table">
        {todoList.map((todoStr) => {
          return(
            <ListItem 
              key={ todoStr.todoStr }
              todoName={ todoStr.todoStr }
              remove={ this.onRemoveTodo }
              toDoDate={ todoStr.toDoDate }
            />
          );
        })}
      </div>
    </div>
    );
  }
}
export default App;