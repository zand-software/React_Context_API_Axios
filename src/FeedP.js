import React from "react";
import Project from "./Project";

const Feed = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
};

export default Feed;
