import Logout from './Logout'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul className="nav-items">
                <li className="nav-item"> <NavLink to='/'> Dashboard</NavLink> </li>
                <li className="nav-item"> <NavLink to='/leaderboard'> Leaderboard </NavLink></li>
                <li className="nav-item"> <NavLink to='/add'> New</NavLink> </li>
                <li className="nav-item user"> <Logout/> </li>
            </ul>
            <hr className="divider"/>
        </nav>

    )
}

export default Nav;