import NoteList from "./NoteList";

const Resource = ({ resource = {}, user }) => {
  const { id, topic_id, video_url, website_url, user_id } = resource;


  
  return (
    <>
      <div>Resource component</div>
      {/* <div className="single-post-item"> */}
        <h3 className="post-card-title">{resource.video_url}</h3>
        <p className="post-card-description">{resource.website_url}</p>
      {/* </div> */}
      <NoteList/>
    </>
  );
};

export default Resource;
