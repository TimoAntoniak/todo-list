import './App.scss';
import Task from './Task';

function App() {
    return (
        <div className="App">
            <h1>Meine To-Do Liste</h1>
            <ul>
                <Task name={"React Lernen"} finished/>
            </ul>
        </div>
    );
}

export default App;
