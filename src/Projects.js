import { React, useContext } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";

const Projects = () => {
  const { projects, fetchErrorProjects, isLoadingProjects } =
    useContext(DataContext);
  return (
    <main className="Projects">
      <p>
        <h3>Projects</h3>
        <p>&nbsp;</p>
        <p>Available products and commercial projects</p>
      </p>

      <p>&nbsp;</p>

      {isLoadingProjects && <p className="statusMsg">Loading projects...</p>}
      {!isLoadingProjects && fetchErrorProjects && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchErrorProjects}
        </p>
      )}
      {!isLoadingProjects &&
        !fetchErrorProjects &&
        (projects.length ? (
          <ul>
            {projects.map((element) => (
              <li className="project" key={element.id}>
                <label>{element.item}</label>
                <Link to={`/project/${element.id}`}>
                  <FaFolderOpen
                    role="button"
                    tabIndex="0"
                    aria-label={`Open ${element.item}`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="statusMsg">No projects to display.</p>
        ))}
    </main>
  );
};

export default Projects;
