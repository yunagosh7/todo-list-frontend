import React from 'react'
import Task from '../components/Task'
import { TaskModel } from '../model/TaskModel';



const Main = () => {
 const lista = [
    new TaskModel(1, "Tarea 1", "yunagosh", 20, 40, false),
    new TaskModel(2, "Tarea 2", "Culo", 202, 140, false),
    new TaskModel(3, "Tarea 3", "pene", 9, 0, false),
    new TaskModel(4, "Tarea 4", "maxi", 201, 12, false),
    new TaskModel(5, "Tarea 5", "roberto", 20, 4, true),
    new TaskModel(6, "Tarea 6", "juan", 120, 0, false),
    new TaskModel(7, "Tarea 7", "carlos", 91, 23, false),
    new TaskModel(8, "Tarea 8", "josesito", 2320, 10, true),
    new TaskModel(9, "Tarea 9", "el pepe", 70, 40, true),
    new TaskModel(10, "Tarea 10", "carlos", 210, 240, false)
  ]

  console.log(lista.length)

  return (
    <main>
            <table className="table">
  <thead>
    <tr className='table-primary'>
      <th scope="col">#</th>
      <th scope="col">Titulo</th>
      <th scope="col">Usuario</th>
      <th scope="col">Likes</th>
      <th scope="col">Dislikes</th>
      <th scope="col">Hecha?</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
   
   {
    lista.forEach((task) => {
      console.log(task);
      return <Task task={task} />
    })
   }
  </tbody>
</table>
    </main>
  )
}

export default Main