import { connect } from 'react-redux'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { handleAnswerPoll } from '../actions/shared'
import OptionInfo from './OptionInfo'

const PollDetail = ({
    poll,
    author,
    selectedOption,
    router,
    dispatch
    }) => {
    const handleOption = (e, option) => {
        e.preventDefault();
        dispatch(handleAnswerPoll(option, poll.id))
    }

    return (  
        <div>
            {
                !poll ? <p> Question not found</p> : 
                <div>
                    <h3> Poll by {author.id}</h3>
                    <img className='poll-author-avatar' src={author.avatarURL} alt={`avatar of ${poll.author}`}/>
                    <h3> Would You Rather</h3>
                    <div className="poll-detail">
                        <div className="option option-one">
                            <p className={selectedOption === 'optionOne'? 'option-text selected': 'option-text'}>{poll.optionOne.text}</p>
                            {
                            !!selectedOption ?  <OptionInfo currentOption = {poll.optionOne} otherOption = { poll.optionTwo}/> :
                            <button onClick={(e) => handleOption(e, 'optionOne')}>Click here</button>
                            } 
                        </div>
                        <div className="option option-two">
                            <p className={selectedOption === 'optionTwo'? 'option-text selected': 'option-text'}>{poll.optionTwo.text}</p>
                            {
                                !!selectedOption ? <OptionInfo currentOption = {poll.optionTwo} otherOption = { poll.optionOne} /> :
                                <button onClick={(e) => handleOption(e,'optionTwo')}> Click here</button>
                            } 
                            
                        </div>        
                    </div>
                </div>
            }
        </div>
    )
}

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    };
  
    return ComponentWithRouterProp;
  };

const mapStateToProps = ({polls, users, authedUser},{router}) => {
    let { question_id } = router.params;
    let poll = polls[question_id];
    if(poll) {
        return { 
            poll,
            author: users[poll.author],
            selectedOption: users[authedUser].answers[poll.id],
        }
    }
    else {
        return {}
    }
}

export default withRouter(connect(mapStateToProps)(PollDetail));