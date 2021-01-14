import React from 'react';
import AddTask from './AddTask';
import './App.css';
import TaskList from './TaskList';


class App extends React.Component {

  counter = 8
  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrać w wiedzima',
        date: '2021-03-21',
        important: false,
        active: true,
        finishDate: '2020-03-25',
      },
      { id: 1,
        text: 'zagrać w wiedzima',
        date: '2021-03-21',
        important: true,
        active: true,
        finishDate: '2020-03-25',
      },
      {
        id: 2,
        text: 'zagrać w wiedzima',
        date: '2021-03-21',
        important: true,
        active: true,
        finishDate: '2020-03-25',}, 
      {
        id: 3,
          text: 'nagrać film',
          date: '2021-05-01',
          important: true,
          active: true,
          finishDate: '2020-05-25',
        }, 
      {
        id: 4,
        text: 'obrobić zdjęcia z Żywca',
        date: '2021-03-21',
        important: false,
        active: true,
        finishDate: '2020-03-25',
      }, 
      {id: 5,
      text: 'obrobić zdjęcia z Bersza',
      date: '2021-03-21',
      important: true,
      active: true,
      finishDate: '2020-03-25',
    }, 
      {id: 6,
      text: 'obrobić zdjęcia z Adeli',
      date: '2021-03-21',
      important: false,
      active: true,
      finishDate: '2020-03-25',
    }, 
      {id: 7,
      text: 'Zrobić Plener Lody',
      date: '2021-09-30',
      important: true,
      active: true,
      finishDate: '2020-03-25',
    }
    ]
  }
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({tasks});

    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
       task.active = false;
       task.finishDate = new Date().getTime()
      }
    }
      )
      this.setState({
        tasks,
      })

  }
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: '2020-03-25',
    };
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }
  
  render() { 
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add = {this.addTask} />
        <TaskList tasks= {this.state.tasks} delete = {this.deleteTask} change = {this.changeTaskStatus} />

      </div>
      );
  }
}

export default App;
