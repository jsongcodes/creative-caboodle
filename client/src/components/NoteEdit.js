import { useState } from "react";
import { useContext } from "react";
import { SampleContext } from "../context/sample";

const NoteEdit = ({ note, handleDeleteNote, handleUpdateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);
  const [user, setUser] = useContext(SampleContext);

  const onUpdateNote = () => {
    setIsEditing(!isEditing);
    handleUpdateNote(note.id, content);
  };

  //edit not working on frontend
  return (
    <>
      <div className="bubble">
        <h3 className="comment">
          {user.id === note.user.id ? (
            <div>
              {`${note.content}`}
              {`-${note.user.username}`}
            </div>
          ) : null}
        </h3>

        {user.id === note.user.id ? (
          <div>
            {!isEditing ? (
              <button
                className="edit-btn"
                onClick={() => setIsEditing(!isEditing)}
              >
                <span role="img" aria-label="edit">
                  ✏️
                </span>
              </button>
            ) : (
              <button className="save-button" onClick={onUpdateNote}>
                save
              </button>
            )}
            {!isEditing && (
              <button
                className="delete-button"
                onClick={() => handleDeleteNote(note.id)}
              >
                <span role="img" aria-label="edit">
                  🗑️
                </span>
              </button>
            )}
          </div>
        ) : null}
      </div>

      {isEditing && note.user.id === user.id ? (
        <form className="edit-comment">
          <label className="form-label">edit note:</label>
          <input
            name="edit-note"
            type="text"
            placeholder={content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="edit-comment-input"
          />
        </form>
      ) : null}
    </>
  );
};

export default NoteEdit;
