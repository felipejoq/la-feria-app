import {useEffect, useState} from "react";
import {ArticlesService} from "../services/articles.service.js";

export const useArticles = ({page, limit}) => {

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [navigation, setNavigation] = useState({ page , limit });

  const getArticleBySlug = async ({slug}) => {
    setLoading(true);
    const article = await ArticlesService.getArticleBySlug({slug});
    setLoading(false);
    return article;
  }

  const createArticle = async ({article}) => {
    setLoading(true);
    const result = await ArticlesService.createArticle({article});
    const articlesList = await ArticlesService.getArticles(navigation);
    setLoading(false);
    console.log(articlesList.length)
    setArticles([...articlesList]);
    return result;
  }

  const nextPage = () => {
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      page: prevNavigation.page + 1
    }));
  };

  const prevPage = () => {
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      page: prevNavigation.page - 1
    }));
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const articlesData = await ArticlesService.getArticles(navigation);
      setArticles(articlesData);
      setLoading(false);
    })();
  }, [navigation]);

  return {
    navigation,
    articles,
    loading,
    getArticleBySlug,
    createArticle,
    nextPage,
    prevPage,
  };
};