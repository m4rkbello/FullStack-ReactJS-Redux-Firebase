import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetails = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(props);
  // Check if id exists
  if (!id) {
    // Redirect to a fallback route or display an error message
    navigate(`/project/${id}`); // Replace '/fallback-route' with your desired fallback route
    return null;
  }

  return ( 
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            AYAW KOL! - {id}
          </span>
          <p>http://localhost:3000/</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by mark</div>
          <div>2023</div>
        </div>
      </div>
    </div>
  );
}
 
export default ProjectDetails;
