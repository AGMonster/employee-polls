import PollCard from './PollCard'

const PollList = ({polls, completed}) => {
    return(
        <div className='poll-list'>
            { 
            completed ?  
            <p><strong>Done</strong></p> :
            <p><strong>New Questions</strong></p>
            }
            <hr className='poll-divider'/>
            <div className='poll-cards'>
            {
                polls.map((poll) => (
                    <PollCard key={ poll} id={poll}/>
                ))
            }
            </div>
        </div>    
    )
}

export default PollList