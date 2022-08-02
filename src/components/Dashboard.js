import PollList from "./PollList";
import { connect } from 'react-redux'

const Dashboard = ({newPolls, completedPolls}) => {
    return(
        <div> 
            <PollList completed={false} polls={newPolls}/>
            <PollList completed={true} polls={completedPolls}/>            
        </div>
    )
}

const mapStateToProps = ({ polls, authedUser, users, loadingBar }) => {
    if(authedUser != null){
        let completedPolls = Object.keys(users[authedUser].answers);
        let newPolls = Object.keys(polls).filter(poll => !completedPolls.includes(poll))
        return {
            newPolls : newPolls.sort((a, b) => polls[b].timestamp - polls[a].timestamp),
            completedPolls: completedPolls.sort((a, b) => polls[b].timestamp - polls[a].timestamp),
        }
    }
    return {}
}

export default connect(mapStateToProps)(Dashboard);