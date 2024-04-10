import React from "react";
import ProjectDisplay from "../component/projectDisplay";

import projectsList from "../data/projects";

const projects = () => {
  const displayProject = () => {
    let display = [];
    let result = [];

    projectsList.map((project) => {
      return display.push(
        <ProjectDisplay project={project} key={project.title} />
      );
    });

    for (let i = 0; i < projectsList.length; i += 1) {
      result.push(<div className="project">{display[i]}</div>);
    }
    return result;
  };

  return (
    <section>
      <div className="container pt-3">
        <div className="row">
          <h1>Projects</h1>
          <hr />
          {projectsList.length > 0 ? displayProject() : "No Projects"}
        </div>
      </div>
    </section>
  );
};

export default projects;
