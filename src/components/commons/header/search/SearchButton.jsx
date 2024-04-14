import {Link} from "react-router-dom";

export const SearchButton = () => {


  return (
    <Link to={'/article/search'} className="search-btn">
      <i className="bi bi-search"></i>
    </Link>
  );
};