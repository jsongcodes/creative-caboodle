import { Link } from "react-router-dom";

const ResourceCard = ({ resource, topicId, user, resources }) => {
  const { id, video_url, website_url } = resource;

  return (
      <div>
        <Link
          to={`/topics/${topicId}/resources/${id}`}
          className="post-card-title"
        >
          {website_url}
        </Link>
        {/* <Link to={website_url} className="post-card-title">
        {website_url}
      </Link> */}
        <Link to={video_url} className="post-card-title">
          {video_url}
        </Link>
      </div>
  );
};

export default ResourceCard;



// import { Link } from "react-router-dom";
// import NoteList from "./NoteList";
// import NoteForm from "./NoteForm";
// import { useState } from "react";

// const ResourceCard = ({ resource = {}, topicId, user, resources }) => {
//   const { id, topic_id, video_url, website_url, user_id  } = resource;
//   const [notes, setNotes] = useState([]);

//   const addNewNote = (newNote) => {
//     setNotes((notes) => [newNote, ...notes]);
//   };

//   return (
//       <div>
//         <Link
//           to={`/topics/${topicId}/resources/${id}`}
//           className="post-card-title"
//         >
//           {website_url}
//         </Link>
//         <Link to={video_url} className="post-card-title">
//           {video_url}
//         </Link>
//         <NoteForm addNewNote={addNewNote} resourceId={id} userId={user_id}/>
//       </div>
//   );
// };

// export default ResourceCard;
