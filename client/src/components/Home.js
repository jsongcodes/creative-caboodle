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
        <div>Welcome message</div>
        <div>Topics</div>
        <div>Most popular resource</div>
        <button onClick={handleButtonClick}>most popular</button>
        {mostPopular.title}
      </>
    );
  };
  
  export default Home;
  