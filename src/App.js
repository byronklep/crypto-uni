import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Container } from 'react-bootstrap'
import NewsPage from './pages/NewsPage'
import CoinPage from './pages/CoinPage'

function App() {
  return (
    <Router>
      <Header />
      <Container className="my-3">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/news" component={NewsPage} />
          <Route
            path={'/coins/:id'}
            render={(props) => <CoinPage {...props} />}
          />
          {/* <Route path="/coins/:id" component={CoinPage} exact /> */}
        </Switch>
      </Container>
    </Router>
  )
}

export default App
