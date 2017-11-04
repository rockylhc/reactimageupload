import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


const store = configureStore();
const theme = createMuiTheme({
    palette: {
        type: 'light', // Switching the dark mode on is a single property value change.
    },
});
const rootEl = document.getElementById('app');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
        <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>
        </MuiThemeProvider>
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./components/App', () => render(App));