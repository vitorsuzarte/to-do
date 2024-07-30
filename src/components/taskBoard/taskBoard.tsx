import { Task } from '../task/task'
import styles from './taskBoard.module.css'

export function TaskBoard() {
    
    return(
      <div className={styles.wrapper}>
        <div className={styles.taskCompletion}>
            <p>Tarefas criadas {""}
                <span className={styles.numberPill}>5</span>
            </p>
            <p>Concluídas {""}
                <span className={styles.numberPill}>3 de 5</span>
            </p>
        </div>
        
        <div className={styles.taskBoard}>
            <Task />
        </div>
      </div>
    ) 
}