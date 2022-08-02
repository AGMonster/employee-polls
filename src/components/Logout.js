import { connect } from 'react-redux'
import { unsetAuthedUser } from '../actions/authedUser'
import { useNavigate, Link } from 'react-router-dom'

const Logout = ({ dispatch, authedUserInfo }) => 
{
    const naviagate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(unsetAuthedUser())
        // naviagate('/')
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