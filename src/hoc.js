import React from 'react';
import axios from 'axios';

const HOCSubscriptionOne = HOCSubscription(HOCcomp1);
const HOCSubscriptionTwo = HOCSubscription(HOCcomp2);

function HOCSubscription(Comp) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            }
        }
        componentDidMount() {
            axios.get('/api/hoc.json').then(res => {
                this.setState({
                    data: res.data
                })
            })
        }
        render() {
            return (
                <Comp data={this.state.data}></Comp>
            )
        }
    }
}

function HOCcomp1(props) {
    return (
        <p>HOCcomp1: {props.data.slice(0,2).join(',')}</p>
    )
}

function HOCcomp2(props) {
    return (
        <p>HOCcomp2: {props.data.slice(-3).join(',')}</p>
    )
}

function HOCTest() {
    return (
        <React.Fragment>
            <HOCSubscriptionOne/>
            <HOCSubscriptionTwo/>
        </React.Fragment>
    )
}

export default HOCTest;