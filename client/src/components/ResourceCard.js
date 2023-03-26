import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Resource from "./Resource";

//do i need user??
const ResourceCard = ({ resource, topicId, user, resources }) => {
  const { id, video_url, website_url } = resource;

  return (
    // <Switch>
    //   {/* <Route exact path="topics/:topic_id/resources/:id">
    //     <Resource />
    //   </Route> */}

    //   <Route
    //     exact
    //     path="topics/:topic_id/resources/:id"
    //     render={({ computedmatch }) => (
    //       <Resource
    //         resource={resources.find(
    //           (resource) => resource.id === parseInt(computedmatch.params.id)
    //         )}
  
    //         user={user}
    //       />
    //     )}
    //   ></Route>

    

      <div>
        <Link
          to={`/topics/${topicId}/resources/${id}`}
          className="post-card-title"
        >
          {website_url}
        </Link>
        {/* <Link to={website_url} className="post-card-title">
        {website_url}
      </Link> */}
        <Link to={video_url} className="post-card-title">
          {video_url}
        </Link>
      </div>
    // </Switch>
  );
};

export default ResourceCard;
