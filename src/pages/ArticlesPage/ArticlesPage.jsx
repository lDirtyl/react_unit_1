import { useEffect } from 'react';
import { useState } from 'react';
import { getArticles } from './../../Api/Articles';
import ArticleList from './../../components/ArticleList/ArticleList';

const ArticlesPage = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await getArticles();
        setArticles(res.hits);
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, []);

  return (
    <div>
      <h1>Articles Page</h1>
      {articles && <ArticleList hits={articles} />}
    </div>
  );
};

export default ArticlesPage;
