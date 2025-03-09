import { useState } from 'react';
import './App.scss';
import Task from './Task';

function App() {

    const [task1, setTask1] = useState({name: "React lernen", finished: false});

    function handleTask1Click() {
        setTask1({
            name: task1.name,
            finished: !task1.finished
        })
    }

    return (
        <div className="App">
            <h1>Meine To-Do Liste</h1>
            <ul>
                <Task name={task1.name} finished={task1.finished} onClick={handleTask1Click}/>
            </ul>
        </div>
    );
}

export default App;
