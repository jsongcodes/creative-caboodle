import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A13E70",
    },
    secondary: {
      main: "#A13E70",
    },
  },
  typography: {
    fontFamily: [],
  },
  background: {
    default: "#A13E70",
  },
});

const NoteForm = ({ resourceId, addNewNote }) => {
  const [user, setUser] = useContext(UserContext);
  const [inputForm, setInputForm] = useState({
    resource_id: resourceId,
    user_id: user.id,
    content: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputForm),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((err) => {
          setErrors(err.errors);
          alert(err.errors);
        });
      } else {
        res.json().then((data) => {
          addNewNote(data);
          setInputForm({ content: "" });
        });
      }
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            mt: 5,
            // mb: 0,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            className="font"
            variant="h5"
            sx={{ mt: 10, mb: 3, color: "#A13E70" }}
          >
            add a note
          </Typography>
        </Container>
      </ThemeProvider>

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
          onSubmit={(e) => handleSubmit(e)}
        >
          <TextField
            type="text"
            placeholder="add a note..."
            value={inputForm.content}
            name="content"
            onChange={handleChange}
          />
          <Button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#A13E70",
              padding: "10px 20px",
              color: "#FFFFFF",
              borderRadius: 5,
            }}
            variant="contained"
          >
            submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default NoteForm;
