import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditPost = ({ posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditBody(post.body);
      setEditTitle(post.title);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main className="NewPost">
      {post ? (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input 
              id="postTitle" 
              type="text" 
              required 
              value={editTitle} 
              onChange={(e) => setEditTitle(e.target.value)} 
            />
            <label htmlFor="postBody">Post:</label>
            <textarea 
              id="postBody" 
              required 
              value={editBody} 
              onChange={(e) => setEditBody(e.target.value)} 
            />
            <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
          </form>
        </>
      ) : (
        <>
          <h2>Post not found</h2>
          <p>Well, try again.</p>
          <p>
            <Link to="/">Back to home</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;