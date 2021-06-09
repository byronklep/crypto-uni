import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { Container } from 'react-bootstrap'
import NewsPage from './pages/NewsPage'
import CoinPage from './pages/CoinPage'
import PricesPage from './pages/PricesPage'

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
          <Route to="/prices" component={PricesPage} />
          {/* <Route path="/coins/:id" component={CoinPage} exact /> */}
        </Switch>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
