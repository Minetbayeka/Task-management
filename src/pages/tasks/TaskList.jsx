import React from 'react'
import TaskDetail from './components/TaskDetail'
import TaskCreationForm from './components/TaskCreationForm'

const TaskList = () => {
  return (
    <div>
      <TaskDetail/>
      <TaskCreationForm/>
    </div>
  )
}

export default TaskList
