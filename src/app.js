import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RefTest from './ref';
import ContextTest from './context';
import HooksTest from './hooks';
import HOCTest from './hoc';
import Mouse from './renderProp';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/">ref</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/context">context</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/hooks">hooks</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/hoc">hoc</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/renderProp">render prop</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <Route path="/" exact component={RefTest}></Route>
                    <Route path="/context" component={ContextTest}></Route>
                    <Route path="/hooks" component={HooksTest}></Route>
                    <Route path="/hoc" component={HOCTest}></Route>
                    <Route path="/renderProp" component={Mouse}></Route>
                </Router>
            </div>
        )
    }
}

export default App;