import Link from 'next/link';
import * as React from 'react';

// Styles
import { StyledFavorites, StyledHeader, StyledLink, StyledLogoLink } from './styles';

const Nav = () => (
  <StyledHeader>

    <StyledLogoLink>
      <Link href="/" passHref>
        <a>
          <img
            src="/static/img/logo.svg" alt="Giphy-Logo"
          />
        </a>
      </Link>
    </StyledLogoLink>

    <StyledLink>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
    </StyledLink>

    <StyledLink>
      <Link href="/favorites">
        <StyledFavorites>
          Favorites
          <img src="/static/img/icons/giphySquare.png" alt="Giphy-Icon" role="presentation" />
        </StyledFavorites>
      </Link>
    </StyledLink>

  </StyledHeader>
);

export default Nav;
