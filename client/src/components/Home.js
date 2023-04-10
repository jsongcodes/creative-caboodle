import { useState } from "react";
import TopicList from "./TopicList";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ProductHeroLayout from "./ProductHeroLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const backgroundImage =
  "https://plus.unsplash.com/premium_photo-1677679816376-d6f9b33678ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF6FB",
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

const number = {
  fontSize: 30,
  fontFamily: "Coiny",
  color: "#A13E70",
  fontWeight: "medium",
};

const Home = ({ topics, setTopics }) => {
  // const [mostPopular, setMostPopular] = useState("");

  // const handleButtonClick = () => {
  //   fetch("/resources/mostpopular")
  //     .then((r) => r.json())
  //     .then((r) => setMostPopular(r))
  //     .then(console.log(mostPopular));
  // };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductHeroLayout
          sxBackground={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: "#7fc7d9", // Average color of the background image.
            backgroundPosition: "center",
          }}
        >
          <img
            style={{ display: "none" }}
            src={backgroundImage}
            alt="creative caboodle"
          />
          <Typography
            color="inherit"
            align="center"
            variant="h1"
            marked="center"
            id="home"
          >
            creative caboodle{" "}
          </Typography>
          <Typography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mt: { xs: 4, sm: 10 } }}
          >
            store your sources of inspiration
          </Typography>
        </ProductHeroLayout>

        <Box
          component="section"
          sx={{
            display: "flex",
            bgcolor: "#FFF6FB",
          }}
        >
          <Container
            sx={{
              mt: 10,
              mb: 15,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="https://gitlab.create-ion.at/lt/material-ui/-/raw/v4.0.2/static/themes/onepirate/productCurvyLines.png"
              alt="curvy lines"
              sx={{
                pointerEvents: "none",
                position: "absolute",
                top: -180,
                opacity: 0.7,
              }}
            />
            <Typography
              className="font"
              variant="h4"
              component="h2"
              sx={{ mb: 7, color: "#A13E70" }}
            >
              how it works
            </Typography>
            <div>
              <Grid container spacing={5}>
                <Grid item xs={12} md={3}>
                  <Box sx={item}>
                    <Box sx={number}>1.</Box>
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/512/993/993504.png"
                      alt="topic"
                      sx={{ height: 70, mt: 5 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ my: 3, textAlign: "center" }}
                    >
                      choose a topic
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={item}>
                    <Box sx={number}>2.</Box>
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/512/927/927327.png"
                      alt="find resource"
                      sx={{ height: 70, mt: 5 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ my: 3, textAlign: "center" }}
                    >
                      find resources online
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={item}>
                    <Box sx={number}>3.</Box>
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/512/3713/3713687.png"
                      alt="upload resource"
                      sx={{ height: 70, mt: 5 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ my: 3, textAlign: "center" }}
                    >
                      upload the resources
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box sx={item}>
                    <Box sx={number}>4.</Box>
                    <Box
                      component="img"
                      src="https://cdn-icons-png.flaticon.com/512/8521/8521476.png"
                      alt="take notes"
                      sx={{ height: 70, mt: 5 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ my: 3, textAlign: "center" }}
                    >
                      take personal notes on resources
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </div>
            <Button
              href="/topics"
              style={{
                backgroundColor: "#A13E70",
                padding: "10px 20px",
                color: "#FFFFFF",
                borderRadius: 5
              }}
              variant="contained"
            >
              see topics
            </Button>
            <TopicList topics={topics} setTopics={setTopics} />

            {/* <div>Most popular resource</div>
          <button onClick={handleButtonClick}>most popular</button>
          {mostPopular.title} */}
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
