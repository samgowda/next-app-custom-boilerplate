import * as React from 'react';
import { compose } from 'redux';

// HOC
import withApp from '../components/app/withApp';

// Components
import Layout from '../components/app/layout';

// Redux Dependencies
import { withReduxSaga } from '../redux/store';

// Actions
import locationsActions from '../redux/locations/actions';

// interface Props {
//   giphs:
// }

class Index extends React.Component<any> {
  static async getInitialProps({ store }: {store: any}) {
    // Method used to get data for server side rendering
    store.dispatch({ type: locationsActions.FETCH_LOCATIONS });

    return;
  }

  render() {
    // const { locations } = this.props;

    return (
      <Layout>
        <div>
          Testing
        </div>
      </Layout>
    );
  }
}

export default withReduxSaga(compose(
  withApp,
)(Index));
