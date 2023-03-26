import NoteForm from "./NoteForm";
import NoteCard from "./NoteCard";
import { useState, useEffect } from "react";
import NoteEdit from "./NoteEdit";

const NoteList = ({user, setUser, userId, topics, setTopics, resources, setResources, setNotes, notes
}) => {
  // const [errors, setErrors] = [""];

  //needs fixing
  useEffect(() => {
    fetch("/notes").then((res) => {
      if (res.ok) {
        res.json().then((notes) => {
          setNotes(notes)
          console.log('notes: ', notes)
            // setNotes(user.notes)
            // setResources(user.resources)
            // console.log(user.notes)
            // console.log(notes)
        });
      }
    });
  }, []);

  const updateNotes = (data) => {
    setNotes((notes) => [data, ...notes]);
  };

  const handleUpdateNote = (id, content) => {
    fetch(`/notes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({ content: content }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((err) => {
          alert(err.errors);
          return notes;
        });
      } else {
        setNotes((notes) => {
          let updatedNotes = notes.map((note) => {
            if (note.id === id) {
              note.content = content;
            }
            return note;
          });
          return updatedNotes;
        });
      }
    });
  };

  const handleDeleteNote = (id) => {
    fetch(`/notes/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setNotes(
          notes.filter((note) => {
            return note.id !== id;
          })
        );
      }
    });
  };

  const noteList = [...notes].map((note) => {
    return(
      <NoteEdit
      key={note.id}
      note={note}
      handleDeleteNote={handleDeleteNote}
      handleUpdateNote={handleUpdateNote}
      user={user}
    />
    )
    // return <NoteCard key={note.id} note={note}/>
  })


  return (
    <>
      {/* <NoteForm userId={userId} /> */}
      <div>{noteList}</div>
    </>
  );
};

export default NoteList;