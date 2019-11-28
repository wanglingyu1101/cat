import  React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import searchActionCreators from '../../store/actionCreateors/search/index'
import Header from '../../component/Header'
class CinemaSearch extends React.Component{
    render(){
        return (
            <>
                <Header head={"猫眼电影"} back={true}></Header>
                <input type="text" placeholder="搜影院" onChange={this.searchCinema.bind(this)}/>
                {
                    this.props.searchMovieList?this.props.searchMovieList.map((v,i)=>(
                        <div key={i}>
                           1111111
                        </div>

                    )):null
                }
            </>
        )
    }
    async searchCinema(e){
        if(e.target.value !== "")
            await this.props.upMovieList(e.target.value,2)
        console.log(this.props.searchCinemaList)
    }
}
function mapStateToProps(state) {
    return {
        searchCinemaList:state.search.searchCinemaList
    }
}
export  default connect(mapStateToProps,dispatch=>bindActionCreators(searchActionCreators,dispatch))(CinemaSearch)