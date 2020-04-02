import { collectedTasks } from '../constants'

export const collectedTasksExists =  selectedProject => collectedTasks.find(task => task.key === selectedProject) 