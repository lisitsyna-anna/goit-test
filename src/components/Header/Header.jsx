import { useLocation } from 'react-router-dom';

import BackLink from 'components/BackLink';
import SecondContainer from 'components/SecondContainer';

import { StyledHeader, StyledNavLink } from './Header.styled';

const Header = () => {
  const location = useLocation();
  const isTweetsPage =
    location.pathname === '/tweets' || location.pathname === '/tweets/';

  const backLinkHref = location.state?.from ?? '/';
  return (
    <StyledHeader>
      <SecondContainer>
        <nav>
          <ul>
            <li>
              {!isTweetsPage && (
                <StyledNavLink to="/tweets" state={{ from: location }}>
                  Tweets
                </StyledNavLink>
              )}

              {isTweetsPage && <BackLink to={backLinkHref}>Go back</BackLink>}
            </li>
          </ul>
        </nav>
      </SecondContainer>
    </StyledHeader>
  );
};

export default Header;
