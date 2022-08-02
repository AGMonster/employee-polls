import '../App.css';
import Nav from './Nav'
import Dashboard from './Dashboard';
import { connect } from 'react-redux'
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import PollDetail from './PollDetail';
import Login from './Login';
import NotFound from './NotFound';
import LoadingBar from 'react-redux-loading-bar'

function App({IsLoggedIn, isLoading}) {
  return (
    <Fragment>
      <LoadingBar/>
      { 
        !IsLoggedIn ? <Login/> :
        <div className="App">
          <header className="header">
            <Nav/>
          </header>
          { 
            !isLoading &&
            <Routes>
              <Route path="/" exact element={<Dashboard/>}></Route>
              <Route path="/add" element={<NewPoll/>}></Route>
              <Route path="/leaderboard" element={<Leaderboard/>}></Route>
              <Route path="/questions/:question_id" element={<PollDetail/>}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes> 
          }
        </div>
    }
    </Fragment>
  );
}

const mapStateToProps = ({authedUser, loadingBar}) => {
  return {
    IsLoggedIn : authedUser != null,
    isLoading: loadingBar.default === 1
  }
}

export default connect(mapStateToProps)(App);
