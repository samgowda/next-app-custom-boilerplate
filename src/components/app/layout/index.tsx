import * as React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { compose } from 'redux';

// Components
import Nav from '../../nav';
import Toast from '../../toast';

// Styles
import { COLORS, ORDER } from '../../../styles';
import { AccessibilityAid, StyledContent, StyledLayout } from './styles';

// HOC
import layoutHawk from '../../../redux/layout/hawk';

// Types
import { Toast as ToastType } from '../../../redux/layout/reducer';

interface LayoutProps {
  backgroundColor?: string;
  display: boolean;
  toast: ToastType;
}

interface LayoutDispatch {
  dismissToast: () => void;
}

class Layout extends React.Component<LayoutProps & LayoutDispatch> {
  state = {
    disableFocus: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.mouseDown);
    document.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.mouseDown);
    document.removeEventListener('keydown', this.keyDown);
  }

  mouseDown = () => {
    this.setState({
      disableFocus: true,
    });
  }

  keyDown = () => {
    this.setState({
      disableFocus: false,
    });
  }

  render() {
    const {
      children,
      backgroundColor,
      toast,
      dismissToast,
    } = this.props;

    return (
      <StyledLayout disableFocus={this.state.disableFocus}>
        <LoadingBar
          scope="page-transition"
          style={{
            backgroundColor: COLORS.PRIMARY,
            left: 0,
            position: 'fixed',
            top: 0,
            zIndex: ORDER.LOADING,
          }}
        />
        <AccessibilityAid href="#start-of-content">
          Skip to content
        </AccessibilityAid>
        <Nav />
        <StyledContent backgroundColor={backgroundColor} id="start-of-content">
          <div>{children}</div>
        </StyledContent>
        {toast && toast.display && (
          <Toast
            display={toast.display}
            message={toast.message}
            forceDismiss={toast.forceDismiss}
            dismissToast={dismissToast}
            status={toast.status}
          />
        )}
      </StyledLayout>
    );
  }
}

export default compose(
  layoutHawk,
)(Layout);
