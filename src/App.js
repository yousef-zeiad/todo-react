import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todos : [
      {
      id:1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id:2,
      title: 'Call Aya',
      completed: false
    },
    {
      id:3,
      title: 'Go to the gym',
      completed: false
    }
  ]
}

// Make it Complete
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  }) })
}

// The Delete button function
  delete = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    
    return (
    <div className="App">
      <div className="container">
        <Header/>
        <AddTodo/>
        <Todos todos={this.state.todos} 
        markComplete = {this.markComplete}
        delete = {this.delete}
        />
      </div>
    </div>
   );
  }
}

export default App;
