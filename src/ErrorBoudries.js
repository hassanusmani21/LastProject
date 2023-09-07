import React, { Component } from 'react';
import './Css/Error.css'
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can customize the error message or display a fallback UI here
      return (
    <div className='error'>
        <div className="error-container">
          <h2 className="error-heading">Something went wrong!</h2>
          <p className="error-message">{this.state.error.toString()}</p>
          <div className="error-details">
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        </div>
     </div>
        
      );
    }
    return this.props.children;
  }
}  

export default ErrorBoundary;
