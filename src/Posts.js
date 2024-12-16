import { React, useContext } from "react";
import Feed from "./Feed";
import DataContext from "./context/DataContext";

const Posts = () => {
  const { search, setSearch, searchResults, fetchErrorPosts, isLoadingPosts } =
    useContext(DataContext);

  return (
    <main className="Posts">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {isLoadingPosts && <p className="statusMsg">Loading posts...</p>}
      {!isLoadingPosts && fetchErrorPosts && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchErrorPosts}
        </p>
      )}
      {!isLoadingPosts &&
        !fetchErrorPosts &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        ))}
    </main>
  );
};

export default Posts;
