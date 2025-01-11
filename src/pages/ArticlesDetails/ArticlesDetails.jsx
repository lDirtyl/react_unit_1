import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getSingleArticles } from '../../Api/Articles';

const ArticlesDetails = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  const location = useLocation();

  const backLink = useRef(location.state)

  useEffect(() => {
    const fetching = async () => {
      try {
        const res = await getSingleArticles(articleId);
        setArticle(res);
      } catch (error) {
        console.error(error);
      }
    };
    articleId && fetching();
  }, [articleId]);

  return (
    article && (
      <div>
        <hr />
        <hr />
        <Link to={backLink.current ?? '/articles'}>Back</Link>
        <hr />
        <hr />
        <h2>{article.title}</h2>
        <p>url: {article.url}</p>
        <p>author: {article.author}</p>
        <br />
        {/* <Link to='somePath' state={location.state}>To some path</Link> */}
        <Link to='somePath'>To some path</Link>
        <br />
        <br />
        <Link to='somePath2'>To some path2</Link>
        <br />
        <br />
        <Link to='somePath3'>To some path3</Link>
        <br />
        <Outlet />
      </div>
    )
  );
};

export default ArticlesDetails;
