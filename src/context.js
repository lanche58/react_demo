import React, {Suspense, lazy} from 'react';
const LazyComp = lazy(() => import('./lazy'));
// import PropTypes from 'prop-types';
const { Provider, Consumer } = React.createContext('123');
class ContextTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'aaa',
            b: 'bbb'
        }
    }
    // getChildContext() {
    //     return {
    //         value: this.state.value,
    //         b: this.state.b
    //     }
    // }
    render() {
        return (
            <div>
                <Provider value={this.state.value}><Child1/></Provider>
            </div>
        )
    }
}

class Child1 extends React.Component {
    render() {
        return (
            <Child2></Child2>
        )
    }
}

class Child2 extends React.Component {
    render() {
        return (
            <Consumer>{value => <p>{value}</p>}</Consumer>
        )
    }
}

// ContextTest.childContextTypes = {
//     value: PropTypes.string,
//     b: PropTypes.string
    
// }
// Child2.contextTypes = {
//     value: PropTypes.string
// }

export default () => (
    <Suspense fallback="loading data">
        <ContextTest/>
        <LazyComp/>
    </Suspense>
);