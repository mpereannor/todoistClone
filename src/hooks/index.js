import { useState, useEffect  } from "react"
import { firebase } from "firebase";
import { collectedTasks } from '../helpers'
// const collectedTasks = () => {}

export const useTasks = selectedProject => { 
  const [tasks, setTasks] = useState([])

  useEffect(() => { 
    let unsuscribe = firebase
    .firestore()
    .collection('tasks')
    .where('userId', '==', 'randomnumbers')

    unsuscribe = selectedProject && !collectedTasks
    ?
    (unsuscribe = unsuscribe.where('projectId', '==', selectedProject))
    :
    selectedProject === 'TODAY'
    ?
    (unsuscribe = unsuscribe.where('date', '==', moment().format('DD/MM/YYYY')))
    :
    selectedProject === 'INBOX' || selectedProject === 0
    ?
    (unsuscribe = unsuscribe.where('date', '===', ''))
    :
    unsuscribe
  }, [selectedProject])
}