// styles
import "./ProjectList.css";

import React from "react";

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.length === 0 && <p>No Project yet!</p>}
      {projects &&
        projects.map((project) => <p key={project.id}>{project.name}</p>)}
    </div>
  );
}
