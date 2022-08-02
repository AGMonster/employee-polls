import { connect } from 'react-redux'
import  formatDate  from '../utils/helpers'
import { Link } from 'react-router-dom'


const PollCard = ({id, poll}) => {
    return (
    <div className="poll-card">
        <span> {poll.author}</span>
        <span className="timestamp"> {formatDate(poll.timestamp)}</span>
        <Link to={`/questions/${poll.id}`}><button data-testid="show-btn" className="show-poll-btn"> show </button></Link>
    </div>)
}

const mapStateToProps = ({polls}, {id}) => ({ 
        poll: polls[id]
    }
)

export default connect(mapStateToProps)(PollCard);