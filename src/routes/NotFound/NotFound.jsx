import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styled404Page from './index.style';

function NotFoundNav() {
  const navigate = useNavigate();
  const gobackto = (route) => {
    navigate(`/${route}`, { replace: true });
  };

  return (
    <section className="not_found_nav">
      <button
        className="nav_404_btn"
        type="button"
        onClick={() => gobackto('foods')}
      >
        Foods
      </button>

      <button
        className="nav_404_btn"
        type="button"
        onClick={() => gobackto('favorites')}
      >
        Favorites
      </button>
    </section>
  );
}

export default function NotFound() {
  return (
    <Styled404Page>
      <div className="not_found_container">
        <NotFoundNav />

        <span className="code">404</span>

        <span className="text">Page Not Found</span>
      </div>
    </Styled404Page>
  );
}
