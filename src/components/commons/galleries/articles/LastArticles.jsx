import {ArticleCard} from "../../cards/article/ArticleCard.jsx";
import {useContext} from "react";
import {ArticlesContext} from "../../../../contexts/articles/ArticlesContex.js";
import {Loading} from "../../utils/Loading.jsx";

export const LastArticles = () => {

  const {articles, loading} = useContext(ArticlesContext);

  return (
    <div className='row'>
      {
        loading ? <Loading/>
          : articles.length === 0
            ? <Loading text={'No hay artículos'}/>
            : articles.map(article => (
              <ArticleCard key={article.id} article={article}/>
            ))
      }
    </div>
  );
};