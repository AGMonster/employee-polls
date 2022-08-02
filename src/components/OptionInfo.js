
const OptionInfo = ({currentOption, otherOption}) => {
    let currentOptionVotes = currentOption.votes.length; 
    let otherOptionVotes = otherOption.votes.length;
    let totalVotes = currentOptionVotes + otherOptionVotes ;

    return (
    <div className="poll-result" data-testid="poll-result">
        <p> { currentOptionVotes } out of { totalVotes } users selected this option </p>
        <p> { (100 * currentOptionVotes / totalVotes).toFixed() }% of users selected this option </p>
    </div>)
}

export default OptionInfo;