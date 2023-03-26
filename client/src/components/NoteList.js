import NoteForm from "./NoteForm";
import NoteCard from "./NoteCard";
import { useState, useEffect } from "react";

const NoteList = ({user, setUser, userId, topics, setTopics, resources, setResources}) => {
  const [notes, setNotes] = useState([]);

  //needs fixing
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
            setNotes(user.notes)
            setResources(user.resources)
            console.log('notes: ', notes)
            console.log('resources: ', resources)
        });
      }
    });
  }, []);

  const addNewNote = (formData) => {
    setNotes((notes) => [formData, ...notes])
  }

  // const noteItems = [...notes].map((note) => {
  //   return <NoteCard key={note.id} note={note}/>
  // })

  return (
    <>
      <div>NoteList component</div>
      {/* <NoteForm userId={userId} /> */}
      {/* <NoteCard /> */}
    </>
  );
};

export default NoteList;