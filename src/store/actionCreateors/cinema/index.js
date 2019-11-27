import cinemaType from '../../actionType/cinema'
import axios from 'axios';
import tools from '../../../filters'
export const  getCinemaList = (cinemaList)=>({
    type:cinemaType.getCinemaList,
    payload:{
        cinemaList

    }
})
export const  upCinemaList = (cinemaList)=>({
    type:cinemaType.upCinemaList,
    payload:{
        cinemaList

    }
})
export default {
    getCinema() {
        return async (dispatch)=>{
            const data =await axios.get("/m/ajax/cinemaList", {
                params: {
                    day: tools.date(Date.now()),
                    offset : 0,
                    limit: 20,
                    item: '',
                    updateShowDay: true,
                    reqId: Date.now()
                }
            })
            dispatch(getCinemaList(data.cinemas))
        }
    },
    upCinema(pige = 1) {
        return async (dispatch)=>{
            const data =await axios.get("/m/ajax/cinemaList", {
                params: {
                    day: tools.date(Date.now()),
                    offset : 20*pige,
                    limit: 20,
                    item: '',
                    updateShowDay: true,
                    reqId: Date.now()
                }
            })
            dispatch(upCinemaList(data.cinemas))
        }
    }
}