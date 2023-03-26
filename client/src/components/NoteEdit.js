import { useState } from "react";

const NoteEdit = ({ note, handleDeleteNote, handleUpdateNote, user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);

  const onUpdateNote = () => {
    setIsEditing(!isEditing);
    handleUpdateNote(note.id, content);
  };

  //edit is not working on postman. delete is working
  return (
    <>
      {/* <div>NoteEdit component</div> */}
      <div className="bubble">
        <h3 className="comment">
          {`${note.content}`}
          {`-${note.user.username}`}
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
          <label className="form-label" htmlFor="edit-comment">
            edit comment:
          </label>
          <input
            name="edit-comment"
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