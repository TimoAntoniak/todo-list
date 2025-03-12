import { useEffect, useState } from 'react';
import './App.scss';
import Task from './Task';

import ChecklistIcon from '@mui/icons-material/Checklist';

function App() {

    const [taskList, setTaskList] = useState(() => {
        const savedTodos = localStorage.getItem("taskList")
        return savedTodos ? JSON.parse(savedTodos) : []
    })

    function handleTaskClick(index) {
        let newTaskList = [...taskList];
        newTaskList[index].finished = !newTaskList[index].finished;
        setTaskList(newTaskList);
    }

    function handleTaskDelete(index) {
        let newTaskList = [...taskList];
        newTaskList.splice(index, 1);
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

    useEffect(() => {
        console.log("Updating taskList to:", taskList)
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }, [taskList])

    return (
        <div className="App">
            <h1><ChecklistIcon/> Meine To-Do Liste</h1>
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
                    onDelete={() => handleTaskDelete(index)}
                    />
                )}
            </ul>
            <button onClick={() => handleReset()}>Reset</button>
        </div>
    );
}

export default App;
