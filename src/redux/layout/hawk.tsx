import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '../reducers';
import { dismissToast } from './actions';
import { Toast } from './reducer';

interface LayoutProps {
  toast: Toast;
  uiLoading: boolean;
}

interface LayoutDispatch {
  dismissToast: () => void;
}

export default function layoutHoc(WrappedComponent: any) {
  class LayoutHoc extends React.Component<LayoutProps & LayoutDispatch> {
    static async getInitialProps(context) {
      return WrappedComponent.getInitialProps(context);
    }

    render() {
      return (<WrappedComponent
        {...this.props}
      />);
    }
  }

  const mapStateToProps = (state: ApplicationState): LayoutProps => ({
    toast: state.layout.toast,
    uiLoading: state.layout.uiLoading,
  });

  const mapDispatchToProps = {
    dismissToast,
  };

  return connect<LayoutProps, LayoutDispatch, {}, ApplicationState>(
    mapStateToProps,
    mapDispatchToProps,
  )(LayoutHoc);
}
