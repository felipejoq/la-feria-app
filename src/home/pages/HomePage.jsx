import {Jumbotron} from "../../components/commons/jumbotron/Jumbotron.jsx";
import {Container} from "react-bootstrap";
import {Separator} from "../../components/commons/utils/Separator.jsx";
import {LastArticles} from "../../components/commons/galleries/articles/LastArticles.jsx";
import {Navigation} from "../../components/commons/utils/Navigation.jsx";

export const HomePage = () => {
  return (
    <>
      <Container>
        <Jumbotron/>
        <Separator>Últimos productos</Separator>
        <LastArticles />
        <Navigation />
      </Container>
    </>
  )
}
