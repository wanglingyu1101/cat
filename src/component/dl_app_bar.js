import React from 'react';

import '../assets/css/dl_app_bar.css'

class DlAppBar extends React.Component {
    constructor(){
        super();
        this.state = {
            dl_top: {display: 'block'},
            dl_bot: {display: 'none'}
        }
    }
    render() {
        return (
            <>
                <div className="download-app-bar" style={this.state.dl_top}>
                    <img src={"//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"} alt="logo"
                         style={{width: "42px", height: "42px"}}/>
                    <div className="app-name-desc">
                        <div className="app-name">猫眼</div>
                        <div className="app-desc">在线选座，热门影讯，爱上看电影</div>
                    </div>
                    <div className="btn-open-app">立即打开</div>
                </div>
                <a id="download-tip" style={this.state.dl_bot} className="download-tip"
                   href="/app?channel=mymovie1yuan-dy"></a>
            </>)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        if (document.documentElement.scrollTop > 0) {
            this.setState({
                dl_top: {display: 'none'},
                dl_bot: {display: 'block'}
            })
        } else {
            this.setState({
                dl_top: {display: 'block'},
                dl_bot: {display: 'none'}
            })
        }
    }
}

export default DlAppBar

