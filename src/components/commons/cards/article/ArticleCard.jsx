import {Badge, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {formatCLPCurrency} from "../../../../utils/formatters/currencies.format.js";
import {formatDate} from "../../../../utils/formatters/dates.format.js";
import {capitalize} from "../../../../utils/formatters/strings.format.js";
import {FavoriteButton} from "../../utils/FavoriteButton.jsx";

export const ArticleCard = ({article}) => {
  return (
    <Card className='col-12 col-sm-6 col-lg-4 col-xl-3 my-3'>
      <Link to={`/article/${article.slug}`} className='position-relative'>
        <span className='price-card-article'>{formatCLPCurrency({ value: article.price })}</span>
        <Card.Img variant="top" src={article?.article_images[0]?.url_img} className='hover-effect' style={{ maxHeight: '250px', objectFit: 'cover' }}/>
      </Link>
      <Card.Body>
        <Card.Title className='text-truncate'>
          {article.title}
        </Card.Title>
        <Card.Text className='truncated-text'>
          {article.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-center align-content-center align-items-center gap-3'>
        <FavoriteButton selected={article.isNew} width='30px' height='30px' article={article}/>
        <Card.Text className='d-flex align-items-center gap-3'>
          <small className='text-muted'>{formatDate({date: article?.created_at})}</small>
          <Badge bg='primary'><i className="bi bi-tags-fill"></i> {capitalize({str: article?.category?.title })}</Badge>
        </Card.Text>
      </Card.Footer>
      <Card.Footer className='footer-card text-uppercase d-flex justify-content-center gap-2 roboto-bold'>
        <Link to={`/article/${article.slug}`}>
          <i className="bi bi-arrow-right-circle-fill"></i> ver más
        </Link>
      </Card.Footer>
    </Card>
  );
};