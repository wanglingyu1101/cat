import  React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import ReactPullLoad,{STATS} from 'react-pullload';
import actionCinemaCreators from "../../store/actionCreateors/cinema/index";
let cinemaPage = 1;
class Cinema extends React.Component{
    render(){
        return (
            <div>
                {
                    this.props.cinemaList.map((v,i)=>(
                        <div key={v.id}>
                            <h4>{i}</h4>
                            <p><b>{v.nm}</b> <span>{v.sellPrice}</span>元起 </p>
                            <p>{v.addr}  <span>{v.distance}</span></p>
                            <i>{v.promotion.cardPromotionTag}</i>
                            <hr/>
                        </div>
                    ))
                }
                <input type="button"  value={"点击加载更多"} onClick={()=>this.props.upCinema(cinemaPage++)}/>
            </div>
        )
    }
    componentDidMount(){
        this.props.getCinema()
        console.log(this.props.cinemaList)
    }
}
function mapStateToProps(state) {
    return{
        cinemaList:state.cinema.cinemaList,
    }
}

export default connect(mapStateToProps,dispatch=>bindActionCreators(actionCinemaCreators,dispatch))(Cinema)