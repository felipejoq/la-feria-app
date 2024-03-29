import {ArticleCard} from "../../cards/article/ArticleCard.jsx";
import {useContext} from "react";
import {ArticlesContext} from "../../../../contexts/articles/ArticlesContex.js";

export const LastArticles = () => {

  const {articles, loading} = useContext(ArticlesContext);

  return (
    <div className='row'>
      {
        loading ? <h2 className='text-primary-color col-12'>Cargando...</h2> : articles.length === 0
          ? <h2 className='text-primary-color col-12'>No hay más artículos</h2>
          : articles.map(article => (
            <ArticleCard key={article.id} article={article}/>
          ))
      }
    </div>
  );
};