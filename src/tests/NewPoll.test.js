import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../reducers'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router';
import App from '../components/App';
import { handleSetAuthedUser } from '../actions/shared';

  test('New Poll has all required inputs and the form gets submitted on valid inputs', async() => {
    const store = createStore(reducer, applyMiddleware(thunk))
    store.dispatch(handleSetAuthedUser('sarahedo'));
    await new Promise((res) => setTimeout(() => res(), 2200)) 

    render(
        <MemoryRouter>
        <Provider store = {store}>
          <App />
        </Provider>
        </MemoryRouter>   );
        
    let newPollBtn = await screen.findByText('New')
    fireEvent.click(newPollBtn);
    const optionOneInput = await screen.findByTestId('option-one')
    const optionTwoInput = await screen.findByTestId('option-two')
    const submitBtn = await screen.findByTestId('submit-btn')
    
    expect(optionOneInput).toBeInTheDocument();
    expect(optionTwoInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    fireEvent.change(optionOneInput, {target: {value: "Be a Artist"}})
    fireEvent.change(optionTwoInput, {target: {value: "Be a Politician"}})
    fireEvent.click(submitBtn)

    expect(optionOneInput).not.toBeInTheDocument();
    expect(optionTwoInput).not.toBeInTheDocument();
    expect(submitBtn).not.toBeInTheDocument();
 })
