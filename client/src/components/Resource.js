import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import { useState, useContext } from "react";
import {UserContext} from "../context/user";

const Resource = ({ resource = {}, 
  setResources}) => {
  const { id, topic_id, video_url, website_url} = resource;
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useContext(UserContext);

  const addNewNote = (newNote) => {
    setNotes((notes) => [newNote, ...notes]);
  };

  return (
    <>
      <div className="single-post-item">
        <h3 className="post-card-title">{resource.video_url}</h3>
        <p className="post-card-description">{resource.website_url}</p>
      </div>
      <NoteList notes={notes} setNotes={setNotes} setResources={setResources} resourceId={id}/>
      <NoteForm addNewNote={addNewNote} resourceId={id} />
    </>
  );
};

export default Resource;
