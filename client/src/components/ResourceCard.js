import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ResourceCard = ({ resource, topicId, resources, setResources }) => {
  const { id, title, description, website_url, favorites } = resource;

  const [favorite, setFavorite] = useState(false);
  // const [numberOfFavorites, setNumberOfFavorites] = useState(resource.favorites);
  const [errors, setErrors] = useState([])

  // useEffect(() => {
  //   fetch(`/resources`)
  //     .then((res) => res.json())
  //     .then((resources) => setResources(resources))
  //     .then(console.log('useeffect: ', numberOfFavorites))
  // }, []);

  // const updateFavoriteCounter = (data) => {
  //   setFavorite(true)
  //   setNumberOfFavorites(numberOfFavorites + 1)
  //   console.log(numberOfFavorites)
  // }

  const handleFavoriteClick = () => {
    fetch(`/resources/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({favorites: favorites}),
    })
    .then((res) => {
      if (!res.ok) {
        res.json().then((err) => {
          alert(err.errors);
          return resources;
        });
      } else {
        setResources((resources) => {
          let updatedResources = resources.map((resource) => {
            if (resource.id == id){
              // setFavorite(true)
              // setNumberOfFavorites(resource.favorites + 1)
              // resource.favorites = (numberOfFavorites + 1)
              resource.favorites = favorites + 1

              console.log(resource.favorites)
            }
            return resource
          })
          return updatedResources
        })
      }
    });
  }

  return (
      <div>
        <Link to={`/resources/${id}`}
          className="post-card-title"
        >
          title: {title}
    
        </Link>
        <div>link: {website_url}</div>
        <div>description: {description}</div>
        <div>free?</div>
        <div>number of likes: {favorites}</div>
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ♥
          </button>
        ) : (
          <button
            onClick={handleFavoriteClick}
            className="emoji-button favorite"
          >
            ♡
          </button>
        )}
      </div>
  );
};

export default ResourceCard;