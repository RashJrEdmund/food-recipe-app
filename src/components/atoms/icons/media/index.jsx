import styled from '@emotion/styled';
import { SiHackerrank } from 'react-icons/si';
import {
  FaTwitter,
  FaGithub,
  FaFacebookSquare,
  FaLinkedin,
} from 'react-icons/fa';

export const TwitterIcon = styled(FaTwitter)`
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0 5px' }) => margin};
  cursor: pointer;
`;

export const GitHubIcon = styled(FaGithub)`
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0 5px' }) => margin};
  cursor: pointer;
`;

export const FacebookIcon = styled(FaFacebookSquare)`
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0 5px' }) => margin};
  cursor: pointer;
`;

export const HackerankIcon = styled(SiHackerrank)`
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0 5px' }) => margin};
  cursor: pointer;
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: ${({ iconcolor }) => iconcolor || 'var(--text-color)'};
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0 5px' }) => margin};
  cursor: pointer;
`;
