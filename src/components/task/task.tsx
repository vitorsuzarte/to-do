import styles from './task.module.css'
import radioUncheckedDefault from '../../assets/radio-unchecked-default.svg'
import trashDefault from '../../assets/trash-default.svg'

export function Task(){
    return (
        <div className={styles.taskWrapper}>
            {/* <a>
                <img className={styles.icon} src={radioUncheckedDefault} />
            </a>
              */}
              <input type="radio" name="" id="" />
             <p>Uma tarefa um pouco longa cadastrada aqui</p>
            
            <a> 
                <img src={trashDefault} />
            </a>
        </div>
    )
}