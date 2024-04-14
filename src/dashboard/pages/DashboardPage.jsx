import {useLocalStorage} from "../../hooks/useLocalStorage.js";
import {useContext, useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {Separator} from "../../components/commons/utils/Separator.jsx";
import {useNavigate} from "react-router-dom";
import {ArticlesContext} from "../../contexts/articles/ArticlesContex.js";
import {capitalize} from "../../utils/formatters/strings.format.js";
import {Loading} from "../../components/commons/utils/Loading.jsx";

export const DashboardPage = () => {

  const {categories, createArticle, loading} = useContext(ArticlesContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const {getDataLocalStorage} = useLocalStorage();
  const [articleState, setArticleState] = useState({
    title: '',
    description: '',
    isNew: false,
    price: '',
    image_url: '',
    author: null,
    category_id: 1
  });

  useEffect(() => {
    const userLocal = getDataLocalStorage({key: 'user'});
    if (userLocal) {
      setUser(userLocal)
    }
  }, []);

  const handleChange = ({target}) => {
    let {name, value} = target;
    const isChecked = target.type === 'checkbox' && name === 'isNew';
    value = name === 'category_id' ? value = parseInt(value) : value;

    setArticleState({
      ...articleState,
      [name]: isChecked ? target.checked : value
    })
  }

  const validArticle = ({article}) => {
    const {title, description, price, image_url} = article;
    return title && description && price && image_url;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validArticle({article: articleState})) {
      createArticle({article: articleState})
        .then(article => {
          navigate(`/article/${article.slug}`);
        })
        .catch(error => {
          console.log(error)
          setError(error.response.data.error);
        });
    }
  }

  return (
    !user
      ? <div>Cargando...</div>
      : loading
        ? <Loading/>
        : <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-lg-8 mt-4 mb-3'>
              <div className="special-card bg-secondary-color-2 p-3">
                {error && <div className='alert alert-warning'>{error}</div>}
                <h2 className='text-primary-color text-uppercase mb-4 text-center'>
                  Publicar un nuevo artículo
                </h2>
                <Separator></Separator>
                <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
                  <div className='row'>
                    <Form.Group className="col-12 col-sm-12 col-lg-8 mb-3" controlId="formBasicTitle">
                      <Form.Control
                        value={articleState.title}
                        className='input-text-general'
                        name="title"
                        type="text"
                        placeholder="Título del artículo..."
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className='col-12 col-sm-12 col-lg-4' controlId="formBasicNew">
                      <Form.Check
                        className='input-text-general-2 d-flex justify-content-center gap-3 text-primary-color w-100'
                        inline
                        label="¿Es nuevo?"
                        name="isNew"
                        type="checkbox"
                        id={`inline-checkbox-1`}
                        onChange={handleChange}
                        checked={articleState.isNew}
                      />
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Control
                      value={articleState.description}
                      className='input-text-general'
                      name="description"
                      as="textarea"
                      placeholder="Escribir la descripción aquí..."
                      style={{height: '200px'}}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div className="row">
                    <Form.Group className='col-12 col-sm-12 col-lg-6 mb-2' controlId="formBasicUrl">
                      <Form.Control
                        value={articleState.image_url}
                        className='input-text-general'
                        name="image_url"
                        type="text"
                        placeholder="Url de la imagen"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className='col-12 col-sm-12 col-lg-6' controlId="formBasicPrice">
                      <Form.Control
                        value={articleState.price}
                        className='input-text-general'
                        name="price"
                        type="number"
                        placeholder="Precio"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="row">
                    <Form.Group className='col-12 col-sm-12 col-lg-12' controlId="formBasicSelectCategories">
                      <Form.Select
                        onChange={handleChange}
                        defaultValue={'1'}
                        name='category_id'
                        className='input-text-general'
                        aria-label="Select categories"
                        required
                      >
                        {
                          categories.map(({id, title}) => (
                            <option key={id} value={id}>{capitalize({str: title})}</option>
                          ))
                        }
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <Button variant="primary" type="submit" className='btn-generic text-uppercase'>
                    Publicar
                  </Button>
                </Form>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-lg-4 mt-4'>
              <div className='special-card d-flex gap-3 bg-secondary-color-2 p-3'>
                <div className='col-5 col-sm-4'>
                  <img className='avatar-article w-100 object-fit-contain' src={user?.image}
                       alt={user?.name}/>
                </div>
                <div className='col-6 col-sm-8'>
                  <div className='row'>
                    <h3 className='col-12'>{user?.name}</h3>
                    <p className='col-12'>{user?.email}</p>
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
        </div>
  )
}