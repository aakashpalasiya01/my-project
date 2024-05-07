import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Icon
} from "@material-ui/core";

const style = {
  root: {
    height: "100vh"
  },
  icon: {
    fontSize: 150
  }
};
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, classes: style };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
          <>
          <Card className="pt-5" style={this.state.classes.root}>
            <CardContent>
              <div className="text-center p-5">
                <Icon style={this.state.classes.icon} color="primary" className="text-center">
                  error_outline_sharp
                </Icon>
                <Typography
                    variant="h2"
                    color="primary"
                    className="text-center p-5"
                    >
                  Something went wrong!
                </Typography>
              </div>
            </CardContent>
          </Card>
          </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;