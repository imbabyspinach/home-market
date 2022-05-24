import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg';
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg';

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Find Your Oasis</p>
      </header>

      <main>
        <Slider />

        <p className="exploreCategoryHeading">Which do you prefer?</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Rent my Oasis</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Own my Oasis</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
