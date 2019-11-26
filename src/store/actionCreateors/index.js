import cinemaActionCreators from './cinema'
import movieActionCreators from './movie'

export default  {
    ...cinemaActionCreators,
    ...movieActionCreators
}