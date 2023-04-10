import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const NoteEdit = ({ note, handleDeleteNote, handleUpdateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);
  const [user, setUser] = useContext(UserContext);

  const onUpdateNote = () => {
    setIsEditing(!isEditing);
    handleUpdateNote(note.id, content);
  };

  return (
    <>
      <div>
        <h3>
          {user.id === note.user.id ? (
            <div>
              {`${note.content}`}
              {`-@${note.user.username}`}
            </div>
          ) : null}
        </h3>

        {user.id === note.user.id ? (
          <div>
            {!isEditing ? (
              <Button
                className="edit-btn"
                onClick={() => setIsEditing(!isEditing)}
              >
                <span role="img" aria-label="edit">
                  ✏️
                </span>
              </Button>
            ) : (
              <Button
                onClick={onUpdateNote}
                style={{
                  backgroundColor: "#A13E70",
                  padding: "10px 20px",
                  color: "#FFFFFF",
                  borderRadius: 5,
                }}
                variant="contained"
              >
                edit
              </Button>
            )}
            {!isEditing && (
              <Button
                className="delete-button"
                onClick={() => handleDeleteNote(note.id)}
              >
                <span role="img" aria-label="edit">
                  🗑️
                </span>
              </Button>
            )}
          </div>
        ) : null}
      </div>

      {isEditing && note.user.id === user.id ? (
        <>
          <Container
            sx={{
              mt: 5,
              // mb: 0,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></Container>
          <Container
            sx={{
              mb: 5,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "40ch" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              noValidate
              autoComplete="off"
              onSubmit={onUpdateNote}
            >
              <TextField
                type="text"
                placeholder="add a note..."
                value={content}
                name="content"
                onChange={(e) => setContent(e.target.value)}
              />
            </Box>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default NoteEdit;
