import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import TopicList from "./TopicList";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { indigo, lightBlue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7986cb",
    },
    secondary: {
      main: "#b3e5fc",
    },
  },
});

const Home = ({ topics, setTopics }) => {
  const [mostPopular, setMostPopular] = useState("");

  const handleButtonClick = () => {
    fetch("/resources/mostpopular")
      .then((r) => r.json())
      .then((r) => setMostPopular(r))
      .then(console.log(mostPopular));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
        store your sources of inspiration
            </Typography>
          {/* <h2>store your sources of inspiration</h2> */}
          <div>Most popular resource</div>
          <button onClick={handleButtonClick}>most popular</button>
          {mostPopular.title}
          <div>Topics</div>
        </Container>

        <TopicList topics={topics} setTopics={setTopics} />
      </ThemeProvider>
    </>
  );
};

export default Home;
