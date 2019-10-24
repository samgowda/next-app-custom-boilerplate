import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/app/layout';

// Redux Dependencies
import { withReduxSaga } from '../redux/store';

// Constants
import { PrimaryButton } from '../components/uielements/buttons';
import { LAYOUT } from '../styles';
import { media } from '../styles/breakpoints';

const StyledError = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - ${LAYOUT.MOBILE_HEADERHEIGHT}px);
  justify-content: center;
  text-align: center;

  ${media.tablet`
    height: calc(100vh - ${LAYOUT.HEADERHEIGHT}px);
  `}
`;

export const StyledHomeButton = PrimaryButton.withComponent('a').extend`
`;

const ERRORS = {
  404: {
    MESSAGE: 'Sorry, we couldn\'t find anything here.',
    CTA: 'Go back to the homepage below.',
  },
  500: {
    MESSAGE: 'Sorry, our servers are having a bad day.',
    CTA: 'Try refreshing or go back to the homepage below.',
  },
};

interface Props {
  statusCode: number;
}

class Error extends React.Component<Props> {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;

    return (
      <Layout>
        <StyledError>
          <div>
            <h1>OOPS! {statusCode} ERROR</h1>
            <h3>{ERRORS[statusCode] ? ERRORS[statusCode].MESSAGE : 'Darn, something went wrong.'}</h3>
            <h3>{ERRORS[statusCode] ? ERRORS[statusCode].CTA : 'Click the button to go back to the homepage.'}</h3>
            <Link
              href="/"
              passHref
            >
              <StyledHomeButton>
                Go to homepage
              </StyledHomeButton>
            </Link>
          </div>
        </StyledError>
      </Layout>
    );
  }
}

export default withReduxSaga(Error);
