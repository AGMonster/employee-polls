import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../reducers'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { MemoryRouter } from 'react-router';
import App from '../components/App';
import {  handleSetAuthedUser } from '../actions/shared';

  test('App component matches snapshot', async() => {
    const store = createStore(reducer, applyMiddleware(thunk))
    await store.dispatch(handleSetAuthedUser('sarahedo'));
    await new Promise((res) => setTimeout(() => res(), 2200));

    let component = render(
        <MemoryRouter>
        <Provider store = {store}>
          <App />
        </Provider>
        </MemoryRouter>   );
    expect(component).toMatchSnapshot()
 })
