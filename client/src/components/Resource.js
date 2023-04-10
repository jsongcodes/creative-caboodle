import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const Resource = ({ resource = {}, setResources }) => {
  const { id, title, description, website_url } = resource;
  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    setNotes((notes) => [newNote, ...notes]);
  };

  return (
    <>
      <div className="description">
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          margin="10px"
          alignItems="center"
        >
          <Card sx={{ width: 600, margin: "15px" }}>
            <h3 className="cardTitle">{title}</h3>
            <Button
              href={`${website_url}`}
              style={{
                backgroundColor: "#FFF6FB",
                padding: "10px 20px",
                borderRadius: 5,
              }}
              variant="contained"
            >
              link
            </Button>
            <p className="description">{description}</p>
          </Card>
        </Grid>
        <NoteList
          notes={notes}
          setNotes={setNotes}
          setResources={setResources}
          resourceId={id}
        />
        <NoteForm addNewNote={addNewNote} resourceId={id} />
      </div>
    </>
  );
};

export default Resource;
