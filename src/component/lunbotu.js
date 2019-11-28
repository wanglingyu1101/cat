
import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import '../assets/css/lunbotu.css'
class Demo extends React.Component {
    state = {
        data: ['1', '2', '3','4','5','6','7'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['1', '2', '3','4','5','6','7'],
            });
        }, 100);
    }
    render() {
        return (
            <WingBlank>
                <Carousel className="space-carousel"
                          frameOverflow="visible"
                          cellSpacing={10}
                          slideWidth={0.8}
                          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                          afterChange={index => this.setState({ slideIndex: index })}
                          style={{width:'100px'}}
                >
                    {this.state.data.map((val, index) => (
                        <a
                            key={val}
                            // href="http://www.alipay.com"
                            style={{
                                display: 'block',
                                position: 'relative',
                                top: this.state.slideIndex === index ? -10 : 0,
                                height: this.state.imgHeight,
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                slideWidth:'100px'
                            }}
                        >
                            <img
                                src="//p0.meituan.net/148.208/moviemachine/58ee13be6dc60bf5e636cf915bbbaaa55787785.jpg"
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