import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import '../assets/css/lunbotu.css'
import tools from '../filters'
class Demo extends React.Component {
    constructor(){
        super()
        this.state = {
            data: this.props?this.props.datap:[],
        }
    }
    componentDidMount() {
        // simulate img loading
        // setTimeout(() => {
        //     this.setState({
        //         data: ['1', '2', '3','4','5','6','7'],
        //     });
        // }, 100);
    }

    render() {
        const {changeIndex} = this.props
        return (
            <WingBlank>
                <Carousel className="space-carousel"
                          frameOverflow="visible"
                          cellSpacing={10}
                          slideWidth={0.8}
                          swipeSpeed={1}
                          dots={false}
                          afterChange={index => {
                              changeIndex(index)
                              this.setState({ slideIndex: index })
                          }}
                          style={{width:'100px'}}
                >
                    {this.props.dataP.map((val, index) => (
                        <a
                            key={val}
                            // href="http://www.alipay.com"
                            // onClick={changeIndex.bind(this,index)}
                            style={{
                                display: 'block',
                                position: 'relative',
                                top:0,
                                border:this.state.slideIndex === index?'2px solid #fff':'none',
                                transform:this.state.slideIndex === index ? 'scale(1.15)' :"scale(1)",
                                height:'95px',
                                width:'65px',
                                slideWidth:'100px'
                            }}
                        >
                            <img
                                src={val.img?tools.movieImg(val.img):''}
                                alt=""
                                style={{
                                    width: '100%',
                                    height:'100%',
                                }}

                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default Demo