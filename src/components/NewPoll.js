import { connect } from 'react-redux'
import { handleNewPoll } from '../actions/shared';
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const NewPoll = ({ dispatch }) => 
{
    const [optionOneText, setOptionOneText] = useState("")
    const [optionTwoText, setOptionTwoText] = useState("")

    const handlers = [setOptionOneText, setOptionTwoText];
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        e.preventDefault();
        handlers[index](e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleNewPoll(optionOneText, optionTwoText))
        setOptionOneText("")
        setOptionTwoText("")
        navigate("/")
    }

    return (
        <div className="new-poll">
            <h1> Would You Rather</h1>
            <p className="sub-heading">Create your own poll</p>
            <form className="poll-form" onSubmit={handleSubmit}>
            <label htmlFor ="option-one"> First Option</label>
            <input id ="option-one" data-testid="option-one" minLength={5} maxLength={300} value={optionOneText} onChange={(e) => handleChange(e, 0)}/>
            <label htmlFor ="option-two"> Second Option</label>
            <input id ="option-two" data-testid="option-two" minLength={5} maxLength={300} value={optionTwoText} onChange={(e) => handleChange(e, 1)}/>
            <button data-testid="submit-btn" disabled={optionOneText ==='' || optionTwoText===''} type="submit"> Submit</button>
            </form>
        </div>
    )
}

export default connect()(NewPoll);