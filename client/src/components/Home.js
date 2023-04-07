import { useState } from 'react'

const Home = () => {
  const [mostPopular, setMostPopular] = useState("");

  const handleButtonClick = () => {
    fetch('/resources/mostpopular')
    .then((r) => r.json())
    .then((r) => setMostPopular(r))
    .then(console.log(mostPopular))
  }

    
    return (
      <>
        <div><h1>Welcome to creative caboodle!</h1></div>
        <h2>
        A platform designed to give users a space to store their sources of
        inspiration, such as: blogs, videos, images, or podcasts.{" "}
      </h2>
        <div>Topics</div>
        <div>Most popular resource</div>
        <button onClick={handleButtonClick}>most popular</button>
        {mostPopular.title}
      </>
    );
  };
  
  export default Home;
  