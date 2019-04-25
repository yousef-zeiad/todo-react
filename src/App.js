import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';


class App extends Component {
  state = {
    todos : []
}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(resp=>this.setState({ todos: resp.data }) )
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(resp =>this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));

  }

  // Adding 
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(resp => this.setState({todos:
       [...this.state.todos, resp.data] }))
    }
    
  

  render() {
    
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
              <Route exact path='/' render= {props => (
                <React.Fragment>
                <AddTodo addTodo = {this.addTodo} />
                <Todos todos={this.state.todos} 
                markComplete = {this.markComplete}
                delete = {this.delete}
                />
              </React.Fragment>
            )}
          />  
          <Route path='/about' component ={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
