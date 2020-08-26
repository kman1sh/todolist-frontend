import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const getAllTasks = async () => {
      const response = await api.get("/api/tasks");
      setTaskList(response.data);
    };
    getAllTasks();
  }, []);

  const renderTaskList = () => {
    return taskList.map((task) => {
      return (
        <tr key={task.id}>
          <td>{task.id}</td>
          <td>{task.taskname}</td>
          <td>{task.status}</td>
          <td>{task.duedate}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="header">
        <h1>All Tasks</h1>
      </div>
      <hr />
      <table
        className="table"
        style={{ width: "100%", padding: "0% 5% 0% 5%" }}
      >
        <thead>
          <tr>
            <th>No.</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>{renderTaskList()}</tbody>
      </table>
      <Link to="/">Home</Link>
    </div>
  );
};
