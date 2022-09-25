//styles
import "./Dashboard.css";
import { useCollection } from "../../hooks/useCollection";
import ProjectList from "../../Components/ProjectList/ProjectList";
import ProjectFilter from "../dashboard/ProjectFilter";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import React from "react";
import { Switch } from "react-router-dom";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();

  const handleFilter = (f) => {
    setCurrentFilter(f);
  };

  const filteredProjects = documents
    ? documents.filter((document) => {
        //do this for each item in the array.
        switch (currentFilter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case "development":
          case "design":
          case "sales":
          case "marketing":
            return document.category === currentFilter;
          default:
            return true;
        }
      })
    : null;
  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={handleFilter}
        />
      )}
      {filteredProjects && <ProjectList projects={filteredProjects} />}
    </div>
  );
}
