import cinemaType from '../../actionType/cinema'
import axios from 'axios';
import tools from '../../../filters'
export const  getCinemaList = (cinemaList)=>({
    type:cinemaType.getCinemaList,
    payload:{
        cinemaList

    }
})
let offset = -20;
export default {
    getCinema() {
        return async (dispatch)=>{
            offset += 20;
            const data =await axios.get("/m/ajax/cinemaList", {
                params: {
                    day: tools.date(Date.now()),
                    offset,
                    limit: 20,
                    item: '',
                    updateShowDay: true,
                    reqId: Date.now()
                }
            })
            dispatch(getCinemaList(data.cinemas))
        }
    }
}