import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './App.css';

class ToDoElement extends React.Component {
  constructor(props)
  {
    super(props)    
  }

  render() {
    return (
      <li>
        <input type="checkbox"></input>
        <span>{this.props.text}</span>
      </li>
    );
  }  
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    }
  }

  AddTodo(value)
  {
    this.setState({
      todoList: [...this.state.todoList, {text: value}],
    }) 
  }

  render () {
    return (
        <div className="App">
        <header className="App-header">
          <input type="textbox"></input>
          <button onClick={() => this.AddTodo("123")}>Add</button>
        </header>
        <ul>
          {this.state.todoList.map(t => <ToDoElement todo={t}/>)}
        </ul>
        </div>
      );
  }
}

  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
