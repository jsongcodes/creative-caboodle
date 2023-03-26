import { useState } from "react";

const ResourceForm = ({topicId, userId, resources, setResources}) => {
  const [inputForm, setInputForm] = useState({
    video_url: "",
    website_url: "",
    topic_id: parseInt(topicId),
    user_id: parseInt(userId)
  });  
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const addNewResource = (newResource) => {
    setResources((resources) => [newResource, ...resources]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/resources`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputForm),
    })
    .then(res => {
      if (!res.ok){
          res.json().then((err) =>{
          setErrors(err.errors)
          alert(err.errors)
      })
      } else{
          res.json().then((data) => {
            addNewResource(data)
            setInputForm({ video_url: "", website_url: ""})})
      }
  })
  }

    return (
      <>
        <form className="create-comment" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            className="comment-input"
            name="video_url"
            type="text"
            placeholder="Enter a video url..."
            value={inputForm.video_url}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            className="comment-input"
            name="website_url"
            type="text"
            placeholder="Enter a website url..."
            value={inputForm.website_url}
            onChange={handleChange}
          ></input>
        </div>
        
        <input className="submit-button" type="submit" value="Resource" />
      </form>
      </>
    );
  };
  
  export default ResourceForm;
  