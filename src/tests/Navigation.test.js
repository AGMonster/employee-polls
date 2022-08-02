import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router';
import Nav from '../components/Nav';
import {  handleSetAuthedUser } from '../actions/shared';
import reducer from '../reducers'

  test('Navigation has all primary links', async() => {
    const store = createStore(reducer, applyMiddleware(thunk))
    await store.dispatch(handleSetAuthedUser('sarahedo'));
    
    render(
        <MemoryRouter>
        <Provider store = {store}>
          <Nav />
        </Provider>
        </MemoryRouter>   );

    let newNavLink = await screen.findByText('New')
    const dashboardNavLink = await screen.findByText('Dashboard')
    let leaderboardNavLink = await screen.findByText('Leaderboard')

    expect(newNavLink).toBeInTheDocument();
    expect(leaderboardNavLink).toBeInTheDocument();
    expect(dashboardNavLink).toBeInTheDocument();
 })
