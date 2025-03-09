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

    return (
        <div className="App">
            <h1>Meine To-Do Liste</h1>
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
        </div>
    );
}

export default App;
