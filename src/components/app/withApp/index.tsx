import Router from 'next/router';
import * as React from 'react';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { Dispatch } from 'redux';

interface Props {
  children: JSX.Element;
  dispatch: Dispatch;
}

// Do global things here at the page level
function withApp(WrappedComponent) {
  class WithApp extends React.Component<Props> {
    static getInitialProps(context) {
      return WrappedComponent.getInitialProps(context);
    }

    componentWillMount() {
      Router.onRouteChangeStart = () => {
        // Show global loading bar for page transitions
        this.props.dispatch(showLoading('page-transition'));
      };

      Router.onRouteChangeComplete = () => {
        // Hide global page loading bar
        window.setTimeout(() => {
          this.props.dispatch(hideLoading('page-transition'));
        }, 300); // Timeout to prove the loader works
      };
    }
    render() {
      return (<WrappedComponent
        {...this.props}
      />);
    }
  }

  return WithApp;
}

export default withApp;
