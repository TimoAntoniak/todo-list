function Task({name, finished, onClick}) {

    return (
        <li
        className={`task ${finished ? "finished" : "unfinished"}`}
        onClick={() => onClick()}
        >
            {name}
        </li>
    )
}
export default Task;