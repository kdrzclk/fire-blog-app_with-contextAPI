import React, { useContext, createContext, useState, useEffect } from "react";
import { firebaseDB } from "../utils/firebaseUtil";

const BlogContext = createContext();

export function useBlog() {
  return useContext(BlogContext);
}

const BlogContextProvider = ({ children }) => {
  const [currentBlogs, setCurrentBlogs] = useState();
  const [loading, setLoading] = useState(true);

  function addBlog(blogValue) {
    const blogRef = firebaseDB.ref("blogs");
    blogRef.push(blogValue);
  }

  function getOneBlog(id) {
    const result = currentBlogs?.filter((item) => item.id === id);
    return result;
  }

  function deleteOneBlog(id) {
    const contactRef = firebaseDB.ref("blogs").child(id);
    contactRef.remove();
  }

  function updateBlog(id, data) {
    const contactRef = firebaseDB.ref("blogs").child(id);
    contactRef.update(data);
  }

  useEffect(() => {
    const blogRef = firebaseDB.ref("blogs");
    blogRef.on("value", (snapshot) => {
      const blogs = snapshot.val();
      const blogL = [];
      for (let id in blogs) {
        blogL.push({ id, ...blogs[id] });
      }
      setCurrentBlogs(blogL);
    });
  }, []);

  const values = {
    addBlog,
    currentBlogs,
    getOneBlog,
    deleteOneBlog,
    updateBlog,
  };

  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;
