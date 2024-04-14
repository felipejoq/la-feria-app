import {Form, InputGroup} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {ArticlesContext} from "../../contexts/articles/ArticlesContex.js";
import {ArticleCard} from "../../components/commons/cards/article/ArticleCard.jsx";
import {useSearchParams} from "react-router-dom";
import {Loading} from "../../components/commons/utils/Loading.jsx";

export const SearchPage = () => {

  const [termValue, setTermValue] = useState('');
  const [error, setError] = useState('');
  const [articles, setArticles] = useState([]);
  const {getArticlesByTerm} = useContext(ArticlesContext);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;
    if (searchParams.has('term') && termValue) {
      setTermValue(searchParams.get('term'));
      setLoading(true);
      timer = setTimeout(() => {
        (async () => {
          await searchByTerm();
          setLoading(false);
        })()
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [termValue]);

  const handleInputChange = ({target}) => {
    setTermValue(target.value);
    setSearchParams({term: target.value});
  }

  const searchByTerm = async () => {
    if (!termValue) {
      setError('Debe escribir un término de búsqueda');
      return
    }
    setError('');
    setLoading(true);
    setArticles([]);
    getArticlesByTerm({term: termValue})
      .then(articles => {
        setArticles(articles);
        setSearchParams({term: termValue});
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        setError(error.response.data.error);
        setArticles([]);
      });
  }

  return (
    <div className='container'>
      <div className='row my-4'>
        <div className='col-12'>
          <InputGroup className="mb-3">
            <Form.Control
              value={termValue}
              onChange={handleInputChange}
              className='input-text-general p-3'
              placeholder="Escriba para buscar..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              onClick={searchByTerm}
              id="basic-search-btn"
              className='bg-primary-color text-white input-text-general px-5 cursor-pointer'
            >
              <i className="bi bi-search"></i>
            </InputGroup.Text>
          </InputGroup>
        </div>
        {
          error
            ? <div className='col-12 text-danger text-center'>
              {error}
            </div> : null
        }
        <div className='row'>
          {
            loading
              ? <Loading/>
              : articles.length > 0
                ? articles.map(article => (
                  <ArticleCard article={article} key={article.id}/>
                ))
                : !loading
                  ? < h2 className='col-12 text-primary-color my-4 text-center'>No hay resultados</h2>
                  : null
          }
        </div>
      </div>
    </div>
  );
};