import { useCollection } from "../../hooks/useCollection";
import Avatar from "../Avatar/Avatar";

// styles
import "./OnlineUsers.css";

import React from "react";

export default function OnlineUsers() {
  const { documents, error } = useCollection("users");
  return (
    <div className='user-list'>
      {error && <div className='error'>{error} </div>}
      <h2> Online Users</h2>
      {documents &&
        documents.map((user) => (
          <div key={user.uid} className='user-list-item'>
            <span> {user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
