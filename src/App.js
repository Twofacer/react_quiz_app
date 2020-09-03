import React, { Component } from 'react';
import Layout from "./hoc/Layout/Laout"
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import QuizList from './containers/QuizList/QuizList'
import Auth from './containers/Auth/Auth'
import QuizCreactor from './containers/QuizCreactor/QuizCreactor'
import {connect} from 'react-redux'
import Logout from './components/Logout/Logout'
import {autoLogin} from './store/actions/auth'
class  App extends Component {

  componentDidMount() {
    this.props.authLogin()
  }
  render() {
    let routes = (
          <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/quiz/:id" component={Quiz}/>
          <Route path="/" exact component={QuizList}/>
          <Redirect to="/"/>
        </Switch>
    )
    if (this.props.isAuthenticated) {
      routes = (
      <Switch>
       
        <Route path="/quiz-creator" component={QuizCreactor}/>
        <Route path="/quiz/:id" component={Quiz}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/" exact component={QuizList}/>
        <Redirect to="/"/>
      </Switch>
      )
    }
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
  
}
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
} 

function mapDispatchToProps(dispatch){
  return {
    authLogin: () => dispatch(autoLogin())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)) 
