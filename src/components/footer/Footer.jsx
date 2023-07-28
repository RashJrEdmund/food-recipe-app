/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import StyledFooter from './StyledFooter';
import {
  FacebookIcon,
  GitHubIcon,
  HackerankIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../atoms/icons/media';
import { MEDIA_LINKS } from '../../services/constants';

export default function Footer() {
  const openLink = (url) => window.open(url);

  return (
    <StyledFooter>
      <ul className="media_link">
        <li onClick={() => openLink(MEDIA_LINKS.twitter)}>
          Twitter
          <TwitterIcon />
        </li>
        <li onClick={() => openLink(MEDIA_LINKS.github)}>
          GitHub
          <GitHubIcon />
        </li>
        <li onClick={() => openLink(MEDIA_LINKS.facebook)}>
          Facebook
          <FacebookIcon />
        </li>
        <li onClick={() => openLink(MEDIA_LINKS.hackerrank)}>
          HackerRank
          <HackerankIcon />
        </li>
        <li onClick={() => openLink(MEDIA_LINKS.linkedin)}>
          LinkedIn
          <LinkedInIcon />
        </li>
      </ul>
    </StyledFooter>
  );
}
