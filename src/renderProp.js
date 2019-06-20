import React from 'react';

class Mouse extends React.Component{
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            x: 0,
            y: 0
        }
    }
    render() {
        return (
            <div style={{height: '500px', background: 'red'}} onMouseMove={this.handleMouseMove}>
                {/* 动态添加需要渲染的内容 */}
                {this.props.aaa(this.state)}
            </div>
        )
    }
    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
}

function MouseTracker() {
    return (
        <Mouse aaa={(mouse) => <Dot mouse={mouse}></Dot>}></Mouse>
    )
}

function Dot(props) {
    return (
        <div style={{width: '20px', height: '20px', borderRadius: '50%', background: 'green', position: 'absolute', left: props.mouse.x - 10, top: props.mouse.y - 10}}></div>
    )
}
export default MouseTracker;