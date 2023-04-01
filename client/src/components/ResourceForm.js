import { useState } from "react";

const ResourceForm = ({topicId, userId, resources, setResources}) => {
  const [inputForm, setInputForm] = useState({
    title: "",
    website_url: "",
    description: ""
  });  
  // const [free, setFree] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  // const handleCheckboxChange = (e) => {
  //   setFree(!free)
  // }

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
            setInputForm({ title: "", website_url: "", description: ""})})
      }
  })
  }

    return (
      <>
        <form className="create-comment" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            className="comment-input"
            name="title"
            type="text"
            placeholder="Enter a title..."
            value={inputForm.title}
            onChange={handleChange}
          ></input>
        </div>
        {/* <div>
          Free?
          <input
            className="comment-input"
            name="free"
            type="checkbox"
            value={inputForm.free}
            onChange={handleCheckboxChange}
          ></input>
        </div> */}
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
        <div>
          <input
            className="comment-input"
            name="description"
            type="text"
            placeholder="Enter a description..."
            value={inputForm.description}
            onChange={handleChange}
          ></input>
        </div>
        
        <input className="submit-button" type="submit" value="Resource" />
      </form>
      </>
    );
  };
  
  export default ResourceForm;
  