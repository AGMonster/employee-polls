import PollList from "./PollList";
import { connect } from 'react-redux'
import { useState } from "react";

const Dashboard = ({newPolls, completedPolls, isLoading}) => {

    const [completed, setCompleted] = useState(false);
    return(
        !isLoading &&
        <div> 
            <button className="toggle-view-btn" onClick={ () => setCompleted(!completed) }> Toggle Active View </button>
            {!completed && <PollList completed={completed} polls={newPolls}/>}
            {completed &&  <PollList completed={completed} polls={completedPolls}/>  }
        </div>
    )
}

const mapStateToProps = ({ polls, authedUser, users, loadingBar }) => {
    const isLoading = !!loadingBar.default;
    if(authedUser != null && !isLoading){
        let completedPolls = Object.keys(users[authedUser].answers);
        let newPolls = Object.keys(polls).filter(poll => !completedPolls.includes(poll))
        return {
            newPolls : newPolls.sort((a, b) => polls[b].timestamp - polls[a].timestamp),
            completedPolls: completedPolls.sort((a, b) => polls[b].timestamp - polls[a].timestamp),
            isLoading
        }
    }
    return {isLoading}
}

export default connect(mapStateToProps)(Dashboard);