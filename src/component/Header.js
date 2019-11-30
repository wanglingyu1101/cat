import React from 'react';
import {withRouter} from 'react-router-dom'
import '../assets/css/header.css'

class Header extends React.Component{
    render(){
        return (
            <header className="header-header">
                <div className="nav-back">
                    {
                        this.props.back === true?<span onClick={()=>this.props.history.go(-1)} className="iconfont icon-houtuishangyige"></span>:null
                    }
                </div>
                {
                    this.props.head?<h1 className="nav-header">{this.props.head}</h1>:<h1 className="nav-header">猫眼电影</h1>
                }
            </header>
        )
    }
}

export default withRouter(Header)

