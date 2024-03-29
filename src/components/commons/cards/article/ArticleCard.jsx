import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {formatCLPCurrency} from "../../../../utils/formatters/currencies.format.js";

export const ArticleCard = ({article}) => {
  return (
    <Card className='col-12 col-sm-6 col-lg-4 col-xl-3 my-3'>
      <Link to={`/article/${article.slug}`} className='position-relative'>
        <span className='price-card-article'>{formatCLPCurrency({ value: article.price })}</span>
        <Card.Img variant="top" src={article.images[0].url_img} className='hover-effect'/>
      </Link>
      <Card.Body>
        <Card.Title className='text-truncate'>
          {article.title}
        </Card.Title>
        <Card.Text className='truncated-text'>
          {article.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='footer-card text-uppercase d-flex justify-content-end gap-2 roboto-bold'>
        <Link to={`/article/${article.slug}`}>
          <i className="bi bi-arrow-right-circle-fill"></i> ver más
        </Link>
      </Card.Footer>
    </Card>
  );
};