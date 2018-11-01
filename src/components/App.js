import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import CourseListContainer from './employee/EmployeeListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditCourseContainer from './employee/AddOrEditEmployeeContainer'; // eslint-disable-line import/no-named-as-default
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default


const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/employees" component={CourseListContainer} />
                        <Route exact path="/employee" component={AddOrEditCourseContainer} />
                        <Route path="/employees/:id" component={AddOrEditCourseContainer} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;