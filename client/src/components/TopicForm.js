import { useState } from "react";
import { useHistory } from "react-router-dom";

const TopicForm = ({ topics, setTopics }) => {
  const [inputForm, setInputForm] = useState({
    title: "",
    image_url: "",
    description: "",
  });
  const history = useHistory();

  const addNewTopic = (newTopic) => {
    setTopics((topics) => [newTopic, ...topics]);
  };

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/topics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputForm),
    })
      .then((res) => res.json())
      .then((data) => {
        addNewTopic(data);
        setInputForm({ title: "", image_url: "", description: ""});
        history.push("/topics");
      })
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
