// styles
import "./Create.css";

import React from "react";
import { useState } from "react";

export default function Create() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate);
  };
  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name</span>
          <input
            type='text'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project Details</span>
          <textarea
            type='text'
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Set Due Date</span>
          <input
            type='date'
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Set category</span>
          {/* {category goes here} */}
        </label>
        <label>
          <span>Assigne Users</span>
          {/* {assignedUsers goes here} */}
        </label>
        <button className='btn'>Add a Project</button>
      </form>
    </div>
  );
}
