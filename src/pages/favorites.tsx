import * as React from 'react';
import { compose } from 'redux';

// HOC
import withApp from '../components/app/withApp';

// Components
import Layout from '../components/app/layout';

// Redux Dependencies
import { withReduxSaga } from '../redux/store';

class Favorites extends React.Component {
  static async getInitialProps() {
    return;
  }

  render() {
    return (
      <Layout>
        <div>
          Favorites
        </div>
      </Layout>
    );
  }
}

export default withReduxSaga(compose(
  withApp,
)(Favorites));
