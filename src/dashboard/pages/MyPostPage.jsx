import {useContext, useEffect, useState} from "react";
import {ArticlesContext} from "../../contexts/articles/ArticlesContex.js";
import {GlobalContext} from "../../contexts/global/GlobalContext.js";
import {Loading} from "../../components/commons/utils/Loading.jsx";
import {ArticleCard} from "../../components/commons/cards/article/ArticleCard.jsx";

export const MyPostPage = () => {

  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const {loading, getArticlesByUserId} = useContext(ArticlesContext);
  const {user} = useContext(GlobalContext);

  useEffect(() => {
    if (user.id) {
      getArticlesByUserId({userId: user.id, page: 1, limit: 10})
        .then(articles => {
          setArticles(articles);
          setError('');
        })
        .catch(error => {
          setError(error.response.data.error);
          setArticles([]);
        });
    }
  }, [user]);

  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='text-primary-color'>Tu lista de publicaciones:</h2>
        </div>
      </div>
      <div className='row'>
        {
          loading ? <Loading/> :
            error
              ? <div className='alert alert-warning'>{error}</div>
              : articles.length > 0
              ? articles.map(article => <ArticleCard key={article.id} article={article}/>)
              : <div className='alert alert-warning'>No tienes publicaciones aún</div>
        }
      </div>
    </div>
  );
};