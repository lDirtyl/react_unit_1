import { useEffect } from 'react';
import { useState } from 'react';
import { getArticles } from './../../Api/Articles';
import ArticleList from './../../components/ArticleList/ArticleList';
import { useSearchParams } from 'react-router-dom';

const ArticlesPage = () => {
  const [articles, setArticles] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const filterValue = searchParams.get('filter') ?? '';

  // const [filterValue, setFilterValue] = useState('');

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

  const handleChange = ({ target: { value } }) => {
    if (value) {
      searchParams.set('filter', value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('filter');
      setSearchParams(searchParams);
    }
  };

  const filteredArticles = articles?.filter(el =>
    el.author.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <h1>Articles Page</h1>
      <br />
      Filter by author:
      <input type='text' value={filterValue} onChange={handleChange} />
      <br />
      {filteredArticles && <ArticleList hits={filteredArticles} />}
    </div>
  );
};

export default ArticlesPage;
