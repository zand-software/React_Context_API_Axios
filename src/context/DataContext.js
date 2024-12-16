import React from "react";
import { createContext, useState, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { postsData, fetchErrorPosts, isLoadingPosts } = useAxiosFetch(
    "http://localhost:3500/",
    "posts"
  );

  const { projectsData, fetchErrorProjects, isLoadingProjects } = useAxiosFetch(
    "http://localhost:3500/",
    "projects"
  );

  useEffect(() => {
    setPosts(postsData);
  }, [postsData]);
  console.log(`postsData: ${postsData}`);

  useEffect(() => {
    setProjects(projectsData);
  }, [projectsData]);
  console.log(`projectsData: ${projectsData}`);

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        projects,
        setProjects,
        search,
        setSearch,
        searchResults,
        fetchErrorPosts,
        fetchErrorProjects,
        isLoadingPosts,
        isLoadingProjects,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
