import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import { useState } from "react";

const Resource = ({ resource = {}, user }) => {
  const { id, topic_id, video_url, website_url, user_id } = resource;

  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    setNotes((notes) => [newNote, ...notes]);
  };

  return (
    <>
      <div>Resource component</div>
      <div className="single-post-item">
        {/* this isnt working vvv */}
        <h3 className="post-card-title">{video_url}</h3>
        <p className="post-card-description">{website_url}</p>
      </div>
      {/* <NoteList/> */}
      <NoteForm addNewNote={addNewNote} resourceId={id} userId={user.id}/>
    </>
  );
};

export default Resource;
