import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import '../assets/css/lunbotu.css'
import tools from '../filters'
class Demo extends React.Component {
    constructor(){
        super()
        this.state = {
            data: this.props?this.props.datap:[],
            imgHeight: 176,
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
                          // beforeChange={() => console.log(`slide from ${from} to ${to}`)}
                          afterChange={index => changeIndex(index)}
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
                                top: this.state.slideIndex === index ? -10 : 0,
                                height: this.state.imgHeight,
                                scale:1.2,
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                slideWidth:'100px'
                            }}
                        >
                            <img
                                src={val.img?tools.movieImg(val.img):''}
                                alt=""
                                style={{ width: '80px',height:'100px',  }}

                                onLoad={() => {
                                    // fire window resize event to change height
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