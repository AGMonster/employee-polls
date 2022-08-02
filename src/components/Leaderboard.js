import { connect } from "react-redux";

const LeaderBoard = ({users}) =>{
    return <div className="leaderboard-grid">
        <table>
            <thead>
                <tr>
                    <td className="username">Users</td>
                    <td className="votes">Answered</td>
                    <td className="polls">Created</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>
                                    <div className="profile-info">
                                        <img src={user.avatarURL} alt="avatar of user" className="avatar"/>
                                        <div className="user-info">
                                            <span> {user.name}</span>
                                            <span><small> {user.id}</small></span>
                                        </div>
                                    </div>
                                    
                                </td>
                                <td> {Object.keys(user.answers).length} </td>
                                <td > { user.questions.length }</td>
                            </tr>
                        )
                    })
                }          
            </tbody>
        </table>
    </div>
}

const mapStateToProps = ({users}) => ({
    users: 
    Object.values(users).sort((a,b) => 
        (b.questions.length + Object.keys(b.answers).length) -
        (a.questions.length + Object.keys(a.answers).length))
})

export default connect(mapStateToProps)(LeaderBoard);