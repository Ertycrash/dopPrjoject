import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Main from './Main'
import store from './store/store'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Provider store={store}>
        <CssBaseline />
          <Main />
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
