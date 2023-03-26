import NoteList from "./NoteList";

const Resource = ({ resource = {}, user }) => {
  const { id, topic_id, video_url, website_url, user_id } = resource;


  
  return (
    <>
      <div>Resource component</div>
      <div className="single-post-item">
        {/* this isnt working vvv */}
        <h3 className="post-card-title">{video_url}</h3>
        <p className="post-card-description">{website_url}</p>
      </div>
      {/* <NoteList/> */}
    </>
  );
};

export default Resource;
