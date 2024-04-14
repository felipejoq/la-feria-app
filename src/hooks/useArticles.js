import {useEffect, useState} from "react";
import {ArticlesService} from "../services/articles.service.js";
import {CategoriesService} from "../services/categories.service.js";

export const useArticles = ({page, limit}) => {

  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [favArticles, setFavArticles] = useState([]);
  const [navigation, setNavigation] = useState({page, limit});
  const [categories, setCategories] = useState([]);

  const addArticleToFav = ({article}) => {
    setFavArticles((prevFavArticles) => [article, ...prevFavArticles]);
  }

  const getCategories = async () => {
    setLoading(true);
    const {data: categories} = await CategoriesService.getAllCategories();
    setCategories(categories);
    setLoading(false);
  }

  const getArticleBySlug = async ({slug}) => {
    try {
      setLoading(true);
      const {data: article} = await ArticlesService.getArticleBySlug({slug});
      setLoading(false);
      return article;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }

  const getArticlesByTerm = async ({term}) => {
    try {
      setLoading(true);
      const {data: {articles}} = await ArticlesService.getArticlesByTerm({term});
      setLoading(false);
      return articles;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }

  const createArticle = async ({article}) => {
    try {
      setLoading(true);

      const {data: newArticle} = await ArticlesService.createArticle({article})
      const {data: {articles: articlesList}} = await ArticlesService.getArticles(navigation)

      console.log({articles: articlesList})
      setArticles([...articlesList]);
      setLoading(false);
      return newArticle;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }

  const getArticlesByUserId = async ({userId, page, limit}) => {
    try {
      setLoading(true);
      const {data: {articles}} = await ArticlesService.getArticlesByUserId({userId, page, limit});
      setLoading(false);
      return articles;
    } catch (error) {
      setLoading(false);
      throw error;
    }
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
      const {data: {articles}} = await ArticlesService.getArticles(navigation);
      await getCategories();
      setArticles(articles);
      setLoading(false);
    })();
  }, [navigation]);

  return {
    navigation,
    articles,
    loading,
    categories,
    favArticles,
    addArticleToFav,
    getArticlesByUserId,
    getArticlesByTerm,
    getCategories,
    getArticleBySlug,
    createArticle,
    nextPage,
    prevPage,
  };
};