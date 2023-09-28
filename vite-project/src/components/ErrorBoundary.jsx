import React , {Component} from 'react'

class ErrorBoundary extends Component{

    constructor(props){
        super(props);
        this.state = {hasError:false};
    }
    componentDidCatch(error,errorInfo){
        console.error(error,errorInfo);
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return
            <div>Something went wrong. Please try again later.</div>;
        }

        return this.props.children
    }    
}
export default ErrorBoundary