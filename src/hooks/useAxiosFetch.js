// import { useState, useEffect } from "react";
// import axios from "axios";

// const useAxiosFetch = (dataUrl) => {
//   const [data, setData] = useState([]);
//   const [fetchError, setFetchError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     // we defined our useEffect hook - see /01_10-14
//     let isMounted = true; //component is mounted
//     const source = axios.CancelToken.source();

//     const fetchData = async (aURL) => {
//       // a async arrow function
//       setIsLoading(true);
//       try {
//         const response = await axios.get(aURL, {
//           cancelToken: source.token,
//         });
//         if (isMounted) {
//           setData(response.data);
//           setFetchError(null);
//         }
//       } catch (err) {
//         if (isMounted) {
//           setFetchError(err.message);
//           setData([]);
//         }
//       } finally {
//         isMounted && setIsLoading(false);
//         setIsLoading(false);
//       }
//     };

//     fetchData(dataUrl);

//     const cleanUp = () => {
//       isMounted = false;
//       source.cancel();
//     };

//     return cleanUp;
//   }, [dataUrl]);

//   return { data, fetchError, isLoading };
// };

// export default useAxiosFetch;

//---------------------------------------------------------------------

import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl, name) => {
  const [postsData, setPostsData] = useState([]);
  const [fetchErrorPosts, setFetchErrorPosts] = useState(null);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  const [projectsData, setProjectsData] = useState([]);
  const [fetchErrorProjects, setFetchErrorProjects] = useState(null);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);

  let aURLData = dataUrl + name;

  useEffect(() => {
    // we defined our useEffect hook - see /01_10-14
    let isMounted = true; //component is mounted
    const source = axios.CancelToken.source();

    console.log(aURLData);
    const fetchData = async (aURL) => {
      // a async arrow function
      setIsLoadingPosts(true);
      try {
        const response = await axios.get(aURL, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setPostsData(response.data);
          setFetchErrorPosts(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchErrorPosts(err.message);
          setPostsData([]);
        }
      } finally {
        isMounted && setIsLoadingPosts(false);
        setIsLoadingPosts(false);
      }
    };

    if (name === "posts") {
      fetchData(aURLData);
    }
    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [aURLData]);

  useEffect(() => {
    // we defined our useEffect hook - see /01_10-14
    let isMounted = true; //component is mounted
    const source = axios.CancelToken.source();

    console.log(aURLData);
    const fetchData = async (aURL) => {
      // a async arrow function
      setIsLoadingProjects(true);
      try {
        const response = await axios.get(aURL, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setProjectsData(response.data);
          setFetchErrorProjects(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchErrorProjects(err.message);
          setProjectsData([]);
        }
      } finally {
        isMounted && setIsLoadingProjects(false);
        setIsLoadingProjects(false);
      }
    };

    if (name === "projects") {
      fetchData(aURLData);
    }

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [aURLData]);

  if (name === "posts") {
    return {
      postsData,
      fetchErrorPosts,
      isLoadingPosts,
    };
  }

  if (name === "projects") {
    return {
      projectsData,
      fetchErrorProjects,
      isLoadingProjects,
    };
  }
};

export default useAxiosFetch;
