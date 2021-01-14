import React from 'react';
import Task from './Task';

const TaskList = props => {

    const active = props.tasks.filter (task => task.active)

    if(active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if(a < b) return -1
            if(a > b) return 1
            return 0
        })
    }

    const done = props.tasks.filter (task => !task.active)
if(done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate)
}
    
    

    const activeTasks = active.map(task => 
    <Task 
    key = {task.id} 
    task={task} 
    delete = {props.delete}
    change = {props.change}
    />)

    const doneTasks = done.map(task => 
        <Task 
        key = {task.id} 
        task={task} 
        delete = {props.delete}
        change = {props.change}
        />)

    return (
        <div>
        <div className = 'active'>
            <h2>Lista zadań do zrobienia</h2>
            {activeTasks.length > 0 ? activeTasks : <p>brak zadań</p>}

        </div>
            <hr />
            <div className = 'done'>
            <h3>Zadania zrobione <em>({done.length})</em></h3>
            {doneTasks.length > 5 && <span style = {{fontSize: 10}}>Wyświetlonych jest tylko 5 ostatnich zdań</span>}
            {doneTasks.slice(0,5)}
      
        </div>
        </div>
    )
}

export default TaskList;