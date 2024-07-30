import styles from './newtaskForm.module.css'
import createTask from '../../assets/create-task.svg'

export function NewTaskForm() {
    
    return (
        <form className={styles.newTaskForm}>
            <input type="text" />
            <button>Criar
                <img src={createTask}></img>
            </button>
        </form>
    )
}