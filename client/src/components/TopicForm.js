import { useState } from "react";

const TopicForm = ({ addNewTopic, topics }) => {
  const [inputForm, setInputForm] = useState({
    title: "",
    image_url: "",
    description: ""
  });

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };


  return (
    <div className="main-container">
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
        <div>
          <input
            className="comment-input"
            name="image_url"
            type="text"
            placeholder="Enter a image url..."
            value={inputForm.image_url}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            className="comment-input"
            name="description"
            type="text"
            placeholder="Enter a body..."
            value={inputForm.description}
            onChange={handleChange}
          ></input>
        </div>
        <input className="submit-button" type="submit" value="topic" />
      </form>
    </div>
  );
};

export default TopicForm;
