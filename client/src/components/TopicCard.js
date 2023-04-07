import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo, lightBlue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7986cb',
    },
    secondary: {
      main: '#b3e5fc',
    },
  },
});

const TopicCard = ({topic}) => {
  const { id, title, image_url, description } = topic;
  return (
    <div>
        <Link to={`/topics/${id}`} className="post-card-title">
          {title}
        </Link>
        {/* <img src={image_url} className="postimage" alt="post" /> */}
        <p className="post-card-description">{description}</p>

    </div>
  );
};

export default TopicCard;
