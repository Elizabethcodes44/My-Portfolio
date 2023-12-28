import "./projects.css";
import spotify from "../assets/spotifyimage.jpg";
import recipe from "../assets/recipeimage.jpg";
import greengrocers from "../assets/greengrocers.jpg";
import dashboard from "../assets/dashboardimage.jpg";
function Projects() {
  return (
    <div className="projects-images">
  <div>
    <img src={spotify} className="spotify" alt="spotify-image" />
    <a href="https://github.com/Elizabethcodes44/html-spotify-challenge">
      Spotify clone
    </a>
  </div>

  <div>
    <img src={recipe} className="recipe" alt="recipe-image" />
    <a href="https://github.com/Elizabethcodes44/react-naija-recipe-App">
      Recipe webpage
    </a>
  </div>

  <div>
    <img src={greengrocers} className="cart" alt="green-grocers" />
    <a href="https://github.com/Elizabethcodes44/react-greengrocers">
      Green grocers
    </a>
  </div>

  <div>
    <img src={dashboard} className="dashboard" alt="dashboardcohort" />
    <a href="https://github.com/Elizabethcodes44/react-cohort-dashboard-challenge">
      Cohort dashboard
    </a>
  </div>
</div>

  );
}
export default Projects;
