import { useState, useEffect } from "react";
import NoteEdit from "./NoteEdit";
import { useContext } from "react";
import { SampleContext } from "../context/sample";

const NoteList = ({
  topics,
  setTopics,
  resources,
  setResources,
  setNotes,
  notes,
  resourceId,
}) => {
  const [errors, setErrors] = [""];
  const [user, setUser] = useContext(SampleContext);

  useEffect(() => {
    fetch(`/resources/${resourceId}/notes`).then((res) => {
      if (res.ok) {
        res.json().then((notes) => {
          setNotes(notes);
        });
      } else {
        res.json().then((error) => setErrors(error.errors));
      }
    });
  }, []);

  const updateNotes = (data) => {
    setNotes((notes) => [data, ...notes]);
  };

  //edit not working on frontend
  const handleUpdateNote = (id, content) => {
    fetch(`/notes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: content }),
    }).then((res) => {
      console.log(content);
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
    return (
      <NoteEdit
        key={note.id}
        note={note}
        handleDeleteNote={handleDeleteNote}
        handleUpdateNote={handleUpdateNote}
      />
    );
    // return <NoteCard key={note.id} note={note}/>
  });

  return (
    <>
      <div>{noteList}</div>
    </>
  );
};

export default NoteList;
