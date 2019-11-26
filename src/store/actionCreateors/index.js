import cinemaActionCreators from './cinema'
import movieActionCreators from './movie'
import searchActionCreators from './search'
export default  {
    ...cinemaActionCreators,
    ...movieActionCreators,
    ...searchActionCreators
}