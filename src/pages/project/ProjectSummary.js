import React from "react";
import Avatar from "../../Components/Avatar/Avatar";

export default function ProjectSummary({ project }) {
  return (
    <div className='project-summary'>
      <h2 className='page-title'>{project.name}</h2>
      <p className='due-date'>
        Project due date: {project.dueDate.toDate().toDateString()}
      </p>
      <p className='details'>{project.details}</p>
      <div className='assigned-users'>
        {project.assignedUsersList.map((user) => (
          <div key={user.id}>
            <Avatar src={user.photoURL} />
          </div>
        ))}
      </div>
    </div>
  );
}
