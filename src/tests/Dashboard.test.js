import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../reducers'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router';
import Dashboard from '../components/Dashboard';
import {  handleSetAuthedUser } from '../actions/shared';

  test('Dashboard has all required user information', async() => {
    const store = createStore(reducer, applyMiddleware(thunk))
    store.dispatch(handleSetAuthedUser('sarahedo'));
    await new Promise((res) => setTimeout(() => res(), 2200)) 

    render(
        <MemoryRouter>
        <Provider store = {store}>
          <Dashboard />
        </Provider>
        </MemoryRouter>   );

    let showPollBtn = await screen.findAllByText('show')
    let newQuestions = await screen.findByText('New Questions')
    let doneSectionheader = await screen.findByText('Done')

    expect(doneSectionheader).toBeInTheDocument()
    expect(newQuestions).toBeInTheDocument()
    expect(showPollBtn.length).toBeGreaterThan(0)
    expect(showPollBtn[0]).toBeInTheDocument()
 })
