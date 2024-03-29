import {ArticlesContext} from "./ArticlesContex.js";
import {useArticles} from "../../hooks/useArticles.js";

export const ArticlesProvider = ({children}) => {

  const {articles, navigation, prevPage, nextPage, loading, createArticle} = useArticles({page: 1, limit: 4});

  return (
    <ArticlesContext.Provider value={{
      articles,
      navigation,
      prevPage,
      nextPage,
      loading,
      createArticle
    }}>
      {children}
    </ArticlesContext.Provider>
  );
};