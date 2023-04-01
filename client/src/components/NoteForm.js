import { useState } from "react";

const NoteForm = ({userId, resourceId, addNewNote}) => {
  const [inputForm, setInputForm] = useState({
    resource_id: resourceId,
    user_id: userId,
    content: ""
  });
  // const [noteContent, setNoteContent] = useState("");

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setInputForm({ ...inputForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/notes`, {
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
            addNewNote(data)
            setInputForm({ content: ""})})
      }
  })
  }

  return (
    <div className="main-container">
    <form className="create-comment" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          className="comment-input"
          name="content"
          type="text"
          placeholder="Enter content..."
          value={inputForm.content}
          onChange={handleChange}
        ></input>
      </div>
      <input className="submit-button" type="submit" value="note" />
    </form>
  </div>
  );
};

export default NoteForm;
