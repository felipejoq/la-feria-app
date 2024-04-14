import {ArticlesContext} from "./ArticlesContex.js";
import {useArticles} from "../../hooks/useArticles.js";

export const ArticlesProvider = ({children}) => {

  const {
    articles,
    navigation,
    loading,
    categories,
    getArticlesByTerm,
    getCategories,
    getArticleBySlug,
    createArticle,
    prevPage,
    nextPage
  } = useArticles({page: 1, limit: 4});

  return (
    <ArticlesContext.Provider value={{
      articles,
      navigation,
      loading,
      categories,
      getArticlesByTerm,
      getCategories,
      getArticleBySlug,
      createArticle,
      prevPage,
      nextPage,
    }}>
      {children}
    </ArticlesContext.Provider>
  );
};