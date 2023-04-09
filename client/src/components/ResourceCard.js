import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";

const ResourceCard = ({ resource, topicId, resources, setResources }) => {
  const { id, title, description, website_url, favorites } = resource;
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteClick = () => {
    fetch(`/resources/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorites: favorites }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((err) => {
          alert(err.errors);
          return resources;
        });
      } else {
        setResources((resources) => {
          let updatedResources = resources.map((resource) => {
            if (resource.id === id) {
              // setFavorite(true)
              // setNumberOfFavorites(resource.favorites + 1)
              // resource.favorites = (numberOfFavorites + 1)
              resource.favorites = favorites + 1;
            }
            return resource;
          });
          return updatedResources;
        });
      }
    });
  };

  return (
    <div>
      <Button onClick={handleFavoriteClick} >
        ♡
      </Button>
      <Link to={`/resources/${id}`} className="cardTitle">
        {title}
      </Link>
      <div className="description">link: {website_url}</div>
      <div className="description">description: {description}</div>
      <div className="description">likes: {favorites}</div>
    </div>
  );
};

export default ResourceCard;
