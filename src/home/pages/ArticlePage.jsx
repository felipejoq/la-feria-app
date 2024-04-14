import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Badge, Card} from "react-bootstrap";
import {Separator} from "../../components/commons/utils/Separator.jsx";
import {ArticlesContext} from "../../contexts/articles/ArticlesContex.js";
import {formatCLPCurrency} from "../../utils/formatters/currencies.format.js";
import {Loading} from "../../components/commons/utils/Loading.jsx";
import {formatDate} from "../../utils/formatters/dates.format.js";
import {capitalize} from "../../utils/formatters/strings.format.js";

export const ArticlePage = () => {

  const {getArticleBySlug, loading} = useContext(ArticlesContext);
  const [article, setArticle] = useState(null);
  const [error, setError] = useState('');
  const {slug} = useParams();

  useEffect(() => {
    getArticleBySlug({slug})
      .then(article => {
        setArticle(article);
      })
      .catch(error => {
        console.error('Error al obtener el artículo', error);
        setError(JSON.stringify(error));
      });
  }, [slug]);

  return (
    <div className='container'>
      {
        loading
          ? <Loading/> :
          !article || error ? <div className='alert alert-warning'>{error}</div> : <div className='row'>
            <div className='col-12 col-sm-12 col-lg-8 mt-4 mb-3'>
              <div className="special-card bg-secondary-color-2 p-3">
                <h2>{article.title}</h2>
                <Separator></Separator>
                <div className='position-relative'>
                  <div className='details-card-article-single'>
                    <span className='tag-card-article-single'>{formatCLPCurrency({value: article.price})}</span>
                    {article.new && <span className='tag-card-article-single'>Nuevo</span>}
                  </div>
                  <Card.Img variant="top" src={article?.article_images[0]?.url_img} className=''/>
                </div>
                <div className='my-4 fs-5'>
                  {article.description}
                </div>
                <div className='d-flex justify-content-end gap-2'>
                  <Badge bg="primary">Categoría: {capitalize({str: article?.category?.title})}</Badge>
                  <Badge bg="secondary">{formatDate({date: article?.created_at})}</Badge>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-lg-4 mt-4'>
              <div className='special-card bg-secondary-color-2 row p-2'>
                <div className='col-5 col-sm-4'>
                  <img className='avatar-article w-100 object-fit-contain' src={article?.author?.image}
                       alt={article?.author?.name}/>
                </div>
                <div className='col-6 col-sm-8'>
                  <div className='row'>
                    <h3 className='col-12'>{article?.author?.name}</h3>
                    <p className='col-12'>{article?.author?.email}</p>
                  </div>
                  <div className='row'>
                    <div className='col-6 col-sm-4 col-lg-6 col-xl-6'>
                      <button className='btn btn-primary border-0'>Contactar</button>
                    </div>
                    <div className='col-6 col-sm-3 col-lg-6 col-xl-6'>
                      <button className='btn btn-success bg-success-color text-white border-0'>Publicar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}
