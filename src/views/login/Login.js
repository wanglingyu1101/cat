import React from 'react'
import Header from '../../component/Header'
class Login extends React.Component {
    render() {
        return (
            <div>
                <Header back={true} head={"猫眼电影"}></Header>
                <div>这是Login</div>
            </div>
        )
    }
}

export default Login