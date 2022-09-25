import React from "react";
import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ProjectComments() {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      contents: newComment,
      createdBy: timestamp.fromDate(new Date()),
      id: Math.random(), // add a library to get better id, this will do for dev.
    };

    console.log(commentToAdd);
  };

  return (
    <div className='project-comments'>
      <h4>Project comments</h4>
      <form className='add-comment' onSubmit={handleSubmit}>
        <label>
          <span>Add comment: </span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
        </label>
        <button className='btn'>Add new comment</button>
      </form>
    </div>
  );
}
