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
      <span className="logo">Logo</span>

      <ul>
        <TwitterIcon onClick={() => openLink(MEDIA_LINKS.twitter)} />
        <GitHubIcon onClick={() => openLink(MEDIA_LINKS.github)} />
        <FacebookIcon onClick={() => openLink(MEDIA_LINKS.facebook)} />
        <HackerankIcon onClick={() => openLink(MEDIA_LINKS.hackerrank)} />
        <LinkedInIcon onClick={() => openLink(MEDIA_LINKS.linkedin)} />
      </ul>
    </StyledFooter>
  );
}
