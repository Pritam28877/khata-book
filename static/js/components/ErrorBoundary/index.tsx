// libs
import React from 'react';

// helpers
import { captureException } from 'src/helpers/sentry';

// components
import ErrorUI from './components/ErrorUI';
import ErrorProvider from './ErrorModalProvider';

// constants
import { SENTRY_TAG } from 'src/constants/sentry';

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.PureComponent<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public state = {
    hasError: false,
  };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error) {
    // log this to sentry
    this.setState({ hasError: true });
    captureException(error, {
      tags: {
        module: SENTRY_TAG.ERROR_BOUNDARY,
      },
    });
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorUI />;
    }

    return <ErrorProvider>{this.props.children}</ErrorProvider>;
  }
}

export default ErrorBoundary;
