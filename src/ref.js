import React from 'react';

const Child = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>ren rui</div>
    )
})

class RefTest extends React.Component {
    constructor(props) {
        super(props);
        this.objRef = React.createRef();
    }
    render() {
        return (
            <Child ref={this.objRef}/>
        )
    }
    componentDidMount() {
        console.log(this.objRef.current);
    }
}

export default RefTest;