/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import "./projects.css";
import spotify from "../assets/spotifyimage.jpg";
import recipe from "../assets/recipeimage.jpg";
import greengrocers from "../assets/greengrocers.jpg";
import dashboard from "../assets/dashboardimage.jpg";
function Projects() {
  return (
    <div className="projects-images">
      <div>
        <img src={spotify} className="project-image" alt="spotify-image" />
        <a href="https://github.com/Elizabethcodes44/html-spotify-challenge">
          Spotify clone
        </a>
        <p className="p1">The Spotify clone web page demonstrates a successful integration of HTML and CSS to replicate the aesthetic and functionality of the original platform. 
        </p>
      </div>

      <div>
        <img src={recipe} className="project-image" alt="recipe-image" />
        <a href="https://github.com/Elizabethcodes44/react-naija-recipe-App">
          Recipe webpage
        </a>
        <p className="p1">The Nigerian recipe webpage is a holistic culinary hub, seamlessly merging nutritional insights, detailed recipes, enticing visuals, and convenient ingredient locations.</p>
      </div>

      <div>
        <img src={greengrocers} className="project-image" alt="green-grocers" />
        <a href="https://github.com/Elizabethcodes44/react-greengrocers">
          Green grocers
        </a>
        <p className="p1">The simple grocery web page is a user-friendly platform designed for seamless vegetable shopping. Users can effortlessly browse through a variety of fruits, adding their desired items to the cart with just a click.</p>
      </div>

      <div>
        <img src={dashboard} className="project-image" alt="dashboardcohort" />
        <a href="https://github.com/Elizabethcodes44/react-cohort-dashboard-challenge">
          Cohort dashboard
        </a>
        
        <p className="p1"> The social media webpage is a dynamic platform that leverages an API to facilitate seamless interaction. Users can engage with the community by posting updates, and the platform supports comments.</p>
      </div>
    </div>
  );
}
export default Projects;
