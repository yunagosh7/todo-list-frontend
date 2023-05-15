import React from "react";
import like from "../assets/hand-thumbs-up.svg";
import dislike from "../assets/hand-thumbs-down-fill.svg";
import "../styles/TaskStyle.css";

const Task = (props) => {
  /**
   * Usar la clase .table-success para las tareas completadas y la clase .table-danger para las no
   */
  console.log(props);
  return (
    <tr >
      <th scope="row">{props.task.id}</th>
      <td>{props.task.title}</td>
      <td>El pepe</td>
      <td>100</td>
      <td>0</td>
      <td>Si</td>
      <td className="actions">
        <button>
          <img src={like} alt="like" />
        </button>
        <button>
          <img src={dislike} alt="dislike" />
        </button>
      </td>
    </tr>
  );
};

export default Task;
