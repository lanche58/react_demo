import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RefTest from './ref';
import ContextTest from './context';
import HooksTest from './hooks';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/">ref</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/context">context</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/hooks">hooks</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <Route path="/" exact component={RefTest}></Route>
                    <Route path="/context" component={ContextTest}></Route>
                    <Route path="/hooks" component={HooksTest}></Route>
                </Router>
            </div>
        )
    }
}

export default App;