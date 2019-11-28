import  React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import searchActionCreators from '../../store/actionCreateors/search/index'
import Header from '../../component/Header'
class Search extends React.Component{
    render(){
        return (
            <>
                <Header head={"猫眼电影"} back={true}></Header>
                <input type="text" placeholder="搜电影、搜影院" onChange={this.searchMovie.bind(this)}/>
                {
                    this.props.searchMovieList?this.props.searchMovieList.map((v,i)=>(
                        <div key={i}>
                            <p>{v.nm}{v.version} {v.sc===0?'暂无评分':v.sc}</p>
                            <p>{v.enm}</p>
                            <p>{v.cat}</p>
                            <p>{v.rt}</p>
                            <img src={this.$tools.movieImg(v.img)} alt=""/>
                            <hr/>
                        </div>

                    )):null
                }
            </>
        )
    }
   async searchMovie(e){
        if(e.target.value !== "")
       await this.props.upMovieList(e.target.value)
       console.log(this.props.searchMovieList)
   }
}
function mapStateToProps(state) {
    return {
        searchMovieList:state.search.searchMovieList
    }
}
export  default connect(mapStateToProps,dispatch=>bindActionCreators(searchActionCreators,dispatch))(Search)