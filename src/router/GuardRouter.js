import React from 'react'
import {withRouter} from 'react-router-dom'
class GuardRouter extends React.Component{
    render(){
        return (
            <this.props.component></this.props.component>
        )
    }
    UNSAFE_componentWillMount(){
     if(this.props.match.url === '/my'){
         if(!localStorage.userName){
             this.props.history.push("/login")
         }
     }
    }
}
export  default withRouter(GuardRouter)