/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import StyledFooter, { StyledAuthor } from './StyledFooter';
import MEDIA_LINKS from '../../services/constants/media_links';
import { Header2Atom } from '../atoms/Atoms';

function Author({ text, setShowLinks }) {
  return (
    <StyledAuthor onClick={() => setShowLinks((prev) => !prev)}>
      {text}
      <span className="author_img" />
    </StyledAuthor>
  );
}

export default function Footer() {
  const [showLinks, setShowLinks] = React.useState(false);
  const openLink = (url) => window.open(url);

  return (
    <StyledFooter>
      <ul className="media_link">
        {showLinks ? (
          <>
            {MEDIA_LINKS.map(({ media, link, icon: Icon }) => (
              <li key={media} onClick={() => openLink(link)}>
                {media}
                {Icon && <Icon />}
              </li>
            ))}

            <li>
              <Author text="Back" setShowLinks={setShowLinks} />
            </li>
          </>
        ) : (
          <div className="author_holder">
            <Header2Atom text="Food App" size="2rem" />

            <Author text="Rash" setShowLinks={setShowLinks} />
          </div>
        )}
      </ul>
    </StyledFooter>
  );
}
