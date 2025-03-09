import { useState } from 'react';
import './App.scss';
import Task from './Task';

function App() {

    const [taskList, setTaskList] = useState([
        {name: "React lernen", finished: false},
        {name: "Hausaufgaben machen", finished: false}
    ])

    function handleTaskClick(index) {
        let newTaskList = [...taskList];
        newTaskList[index].finished = !newTaskList[index].finished;
        setTaskList(newTaskList);
    }

    function handleSubmit(event) {
        event.preventDefault()
        const taskInputValue = event.target.elements.taskInput.value;
        const newTask = {
            name: taskInputValue,
            finished: false
        }
        setTaskList([...taskList, newTask])
        event.target.elements.taskInput.value = ""
    }

    function handleReset() {
        setTaskList([])
    }

    return (
        <div className="App">
            <h1>Meine To-Do Liste</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Task eingeben' name="taskInput"/>
                <button type='submit'>Hinzufügen</button>
            </form>
            <ul>
                { taskList.map((task, index) => 
                    <Task 
                    key={index} 
                    name={task.name} 
                    finished={task.finished} 
                    onClick={() => handleTaskClick(index)}
                    />
                )}
            </ul>
            <button onClick={() => handleReset()}>Reset</button>
        </div>
    );
}

export default App;
