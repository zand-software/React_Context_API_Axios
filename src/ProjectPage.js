import { React, useContext } from "react";
import { useParams, Link } from "react-router-dom"; // useParams is a custom hook that comes with react router dom - we use the useParams to get the parameter
import DataContext from "./context/DataContext";

const ProjectPage = () => {
  const { projects } = useContext(DataContext);
  const { id } = useParams();
  console.log(id);
  console.log(projects);
  const project = projects.find((project) => project.id.toString() === id);
  return (
    <main className="ProjectPage">
      {projects && ( //&& means ok (two ampersands) - we have a project (project is true - if it exists) then we're going to display this
        <>
          <h2>{project.item}</h2>
          <p className="projectBody">{project.description}</p>
        </>
      )}
      {!project && ( // if project is not true essentially with the exclamation mark here it does not exist but we've somehow got to this page;
        // we're using Link to provide a link back to the homepage if it doesn't exist
        <>
          <h2>Project Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default ProjectPage;
