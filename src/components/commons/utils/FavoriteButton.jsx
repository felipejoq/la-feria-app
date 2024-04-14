export const FavoriteButton = ({width = '40px', height = '40px', selected = false}) => {

  const handleClickFavorite = () => {
    console.log('Add to favorite');
  }

  return (
    <div
      style={{width, height}}
      onClick={handleClickFavorite}
      className={`search-btn ${selected ? 'bg-danger' : 'bg-secondary'}`}
    >
      <i className="bi bi-heart-fill"></i>
    </div>
  );
};