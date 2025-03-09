function Task({name, finished}) {

    return (
        <li className={`task ${finished ? "finished" : "unfinished"}`}>
            {name}
        </li>
    )
}
export default Task;