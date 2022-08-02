import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../reducers'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { MemoryRouter } from 'react-router';
import App from '../components/App';
import {  handleSetAuthedUser } from '../actions/shared';

  test('Poll Details page has all required information', async() => {
    const store = createStore(reducer, applyMiddleware(thunk))
    await store.dispatch(handleSetAuthedUser('sarahedo'));
    await new Promise((res) => setTimeout(() => res(), 1000));

    render(
        <MemoryRouter>
        <Provider store = {store}>
          <App />
        </Provider>
        </MemoryRouter>   );

    let showPollBtn = await screen.findAllByText('show')
    fireEvent.click(showPollBtn[0]);
    const clickOption = await screen.findAllByText('Click here')
    expect(clickOption[0]).toBeInTheDocument();
    fireEvent.click(clickOption[0]);
    let pollRes = await screen.findAllByTestId( 'poll-result')
    expect(pollRes[0]).toBeInTheDocument();
    expect(clickOption[0]).not.toBeInTheDocument();
 })
