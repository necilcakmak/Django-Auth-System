import React, { useState, useEffect } from "react";
import {getPosts} from "../api/apiCalls";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((result)=>{setPosts(result.data)})
  }, []);
  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Tarihi</th>
            <th scope="col">İmage</th>
            <th scope="col">Yazar</th>
            <th scope="col">Kategori</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((p) => (
            <tr key={p.id}>
              <th scope="row">{p.id}</th>
              <td>{p.title}</td>
              <td>{p.description}</td>
              <td>{p.publishing_date}</td>
              <td>{p.post_image}</td>
              <td>{p.username}</td>
              <td>{p.categoryname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Post;
