import { Component } from 'react';
/** 
 * getSnapshotBeforeUpdate,
 * getDerivedStateFromError
 * componentDidCatch
 * will be added soon to Funcitonal Components
 */
export default class ErrorBoundary extends Component {
    state: any;
    
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch() {
      this.setState({ hasError: true });
    }
  
    render() {
      return (this.props.children as any)(this.state.hasError);
    }
  }