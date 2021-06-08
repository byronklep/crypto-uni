import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Container } from 'react-bootstrap'
import NewsPage from './pages/NewsPage'

function App() {
  return (
    <Router>
      <Header />
      <Container className="my-3">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/news" component={NewsPage} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
