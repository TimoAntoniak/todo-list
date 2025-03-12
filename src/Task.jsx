import DeleteIcon from '@mui/icons-material/Delete';

function Task({name, finished, onClick, onDelete}) {

    return (
        <li
        className={`task ${finished ? "finished" : "unfinished"}`}
        >
            <div className='task-content'>
                <p onClick={() => onClick()}>{name}</p>
                { finished ?
                    <DeleteIcon className='delete-icon' onClick={() => onDelete()}/>
                    : ""
                }
            </div>
        </li>
    )
}
export default Task;