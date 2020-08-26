import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const AddTask = () => {
  const [firstLoad, setLoad] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [taskname, setTaskname] = useState("Write Code");
  const [status, setStatus] = useState("Active");

  const createTask = async (data) => {
    const response = await api.post("/api/task", data);
    console.log(response.data);
  };

  const onTasknameChange = (e) => setTaskname(e.target.value);
  const onStatusChange = (e) => setStatus(e.target.value);
  const onDateChange = (e) => setSelectedDate(e.target.value);

  const onSubmit = (variables) => {
    variables.preventDefault();
    const data = {
      taskname,
      status,
      duedate: selectedDate,
    };
    createTask(data);
    setTaskname("");
    setStatus("");
  };

  return (
    <div>
      <div className="header">
        <h1>Add New Task</h1>
      </div>
      <form className="form">
        <label>Taskname</label>
        <input
          type="text"
          id="taskname"
          value={taskname}
          onChange={onTasknameChange}
        ></input>

        <label>Status</label>
        <input
          type="text"
          id="status"
          value={status}
          onChange={onStatusChange}
        ></input>

        <label>Due Date</label>
        <input type="date" id="date" onChange={onDateChange}></input>

        <button type="submit" onClick={onSubmit}>
          SAVE
        </button>

        <div>
          <Link to="/view">View Tasks</Link>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
