import { connect } from 'react-redux'
import { unsetAuthedUser } from '../actions/authedUser'
import { Link } from 'react-router-dom'

const Logout = ({ dispatch, authedUserInfo }) => {
    const handleLogout = (e) => {
        dispatch(unsetAuthedUser())
    }

    return (
        !!authedUserInfo && <div className="logout">
            <div className='loggedin-user'>
                <img src={authedUserInfo.avatarURL} className="avatar"/>
                <span className="user"> {authedUserInfo.id}</span>
            </div>
            <Link to='/' onClick={handleLogout}>Logout</Link>
        </div>
    )
}

const mapStateToProps = ({authedUser, users}) => ({
    authedUserInfo: users[authedUser],
})

export default connect(mapStateToProps)(Logout)