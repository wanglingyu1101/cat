import  React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import searchActionCreators from '../../store/actionCreateors/search/index'

class cinemaSearch extends React.Component{
    render(){
        return (
            <>
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
export  default connect(mapStateToProps,dispatch=>bindActionCreators(searchActionCreators,dispatch))(cinemaSearch)