import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../reducers'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router';
import Leaderboard from '../components/Leaderboard';
import {  handleSetAuthedUser } from '../actions/shared';

  test('Leaderboard has all required user information', async() => {
    const store = createStore(reducer, applyMiddleware(thunk))
    await store.dispatch(handleSetAuthedUser('sarahedo'));
    await new Promise((res) => setTimeout(() => res(), 1000));

    render(
        <MemoryRouter>
        <Provider store = {store}>
          <Leaderboard />
        </Provider>
        </MemoryRouter>   );

    let usersHeader = await screen.findByText('Users')
    let answeredHeader = await screen.findByText('Answered')
    let createdheader = await screen.findByText('Created')
    let userAvatar = await screen.findAllByAltText('avatar of user');

    expect(usersHeader).toBeInTheDocument()
    expect(answeredHeader).toBeInTheDocument()
    expect(createdheader).toBeInTheDocument()
    expect(userAvatar.length).toBeGreaterThan(0);
    expect(userAvatar[0]).toBeInTheDocument()
 })
