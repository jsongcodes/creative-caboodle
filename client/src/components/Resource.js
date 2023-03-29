import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import { useState } from "react";

const Resource = ({ resource = {}, user, setResources}) => {
  const { id, topic_id, video_url, website_url, user_id } = resource;
  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    setNotes((notes) => [newNote, ...notes]);
  };

  return (
    <>
      <div className="single-post-item">
        <h3 className="post-card-title">{resource.video_url}</h3>
        <p className="post-card-description">{resource.website_url}</p>
      </div>
      <NoteList user={user} notes={notes} setNotes={setNotes} setResources={setResources} resourceId={id}/>
      <NoteForm addNewNote={addNewNote} resourceId={id} userId={user.id}/>
    </>
  );
};

export default Resource;
