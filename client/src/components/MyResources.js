import React, { useState, useEffect } from "react";

const MyResources = () => {
  const [uploadedResources, setUploadedResources] = useState([]);
  const [likedResources, setLikedResources] = useState([]);

  useEffect(() => {
    // Fetch uploaded resources
    fetch("/my_resources")
      .then((response) => response.json())
      .then((data) => setUploadedResources(data));

    // // Fetch liked resources
    // fetch("/my_liked_resources")
    //   .then((response) => response.json())
    //   .then((data) => setLikedResources(data));
  }, []);

  return (
    <div>
      <h1>My Uploaded Resources</h1>
      <ul>
        {uploadedResources.map((resource) => (
          <li key={resource.id}>{resource.name}</li>
        ))}
      </ul>

      <h1>My Liked Resources</h1>
      <ul>
        {likedResources.map((resource) => (
          <li key={resource.id}>{resource.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyResources;
