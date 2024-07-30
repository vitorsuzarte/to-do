import { Header } from "./components/header/header"
import { NewTaskForm } from "./components/newTaskForm/newTaskForm"
import { TaskBoard } from "./components/taskBoard/taskBoard"
import './global.module.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <NewTaskForm />
        <TaskBoard />
      </main>
      
    </>
  )
}

export default App
