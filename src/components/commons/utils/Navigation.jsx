import {useContext} from "react";
import {ArticlesContext} from "../../../contexts/articles/ArticlesContex.js";

export const Navigation = () => {

  const { articles, navigation, prevPage, nextPage } = useContext(ArticlesContext);

  const nextHandle = () => {
    nextPage();
  }

  const prevHandle = () => {
    prevPage();
  }

  return (
    <div className='d-flex justify-content-center gap-4 my-4'>
      <button
        disabled={navigation.page === 1}
        onClick={prevHandle}
        className='btn btn-primary btn-lg'
      >
        Anterior
      </button>
      <button
        disabled={articles.length === 0}
        onClick={nextHandle}
        className='btn btn-primary btn-lg'
      >
        Siguiente
      </button>
    </div>
  );
};