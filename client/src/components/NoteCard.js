import Note from "./Note";
import NoteEdit from "./NoteEdit";
import { Link } from "react-router-dom";

const NoteCard = ({note}) => {
  const { id, title, content, resource_id, user_id } = note;

  return (
    <>
      <div>
        <Link to={`/notes/${id}`} className="post-card-title">
          {title}
        </Link>
        {/* <img src={image_url} className="postimage" alt="post" /> */}
        <p className="post-card-description">{content}</p>

    </div>
      <Note/>
      {/* <NoteEdit/> */}
    </>
  );
};

export default NoteCard;
