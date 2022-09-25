//styles
import "./Dashboard.css";
import { useCollection } from "../../hooks/useCollection";
import ProjectList from "../../Components/ProjectList/ProjectList";
import ProjectFilter from "../dashboard/ProjectFilter";

import React from "react";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && <ProjectFilter />}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}
