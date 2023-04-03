import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ResourceCard = ({ resource, topicId, resources, setResources }) => {
  const { id, title, description, website_url, favorites } = resource;

  const [favorite, setFavorite] = useState(false);
  const [numberOfFavorites, setNumberOfFavorites] = useState(0);
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch(`/resources`)
      .then((res) => res.json())
      .then((resources) => setNumberOfFavorites(resources.favorites))
      .then(console.log('useeffect: ', favorites))
  }, []);

  const updateFavoriteCounter = () => {
    setResources((resource) => {
      return {
        favorites: resource.favorites + 1
      }
    })
  }

  const handleFavoriteClick = () => {
    fetch(`/resources/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favorite),
    })
    .then((res) => {
      if (!res.ok) {
        res.json().then((err) => {
          alert(err.errors);
          return numberOfFavorites;
        });
      } else {
        // setResources((resource) => {
        //   let updatedResources = resource.map((resource) => {
        //     if (resource.id == id){
        //       setNumberOfFavorites(numberOfFavorites + 1)
        //       resource.favorites = numberOfFavorites
        //       console.log(numberOfFavorites)
        //     }
        //     return resource
        //   })
        //   return updatedResources
        // })
        // if (resource.id === id){
        //   setFavorite(true)
        //   setNumberOfFavorites(numberOfFavorites + 1)
        //   console.log(numberOfFavorites)
        //   resource.favorites = numberOfFavorites
        //   // return resource.favorites
        // }
        // setNumberOfFavorites((favorites) => {
        //   let updatedFavorites = resources.map((resource) => {
        //     if (resource.id === id) {
        //       resource.favorites = favorite + 1;
        //       console.log(numberOfFavorites)
        //     }
        //     return resource;
        //   });
        //   return updatedFavorites;
        //   // console.log(updatedFavorites)
        // });
      }
    });

    console.log(favorites)

    // setFavorite(true)
    // setNumberOfFavorites(favorite + 1)
    // console.log(numberOfFavorites)
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
        {favorite ? (
          <button
            onClick={() => setFavorite(false)}
            className="emoji-button favorite active"
          >
            ♥
          </button>
        ) : (
          <button
            onClick={updateFavoriteCounter}
            className="emoji-button favorite"
          >
            ♡
          </button>
        )}
      </div>
  );
};

export default ResourceCard;