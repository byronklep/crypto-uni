import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import Chart from './Chart'
import Skeleton from 'react-loading-skeleton'

const Coin = ({ match }) => {
  const [coin, setCoin] = useState({})
  const [history, setHistory] = useState([])

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${match.params.id}`,
      headers: {
        'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.data.coin)
        setCoin(response.data.data.coin)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [match])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://coinranking1.p.rapidapi.com/coin/${match.params.id}/history/7d`,
      headers: {
        'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.data.history)
        setHistory(response.data.data.history)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [match])

  // const strippedString = coin.description.replace(/(<([^>]+)>)/gi, '')

  return (
    <div>
      <Container>
        <Link className="btn btn-light" to="/">
          Go Back
        </Link>

        <Row>
          <Col className="text-center m-5">
            <h1 className="my-3">{coin.name}</h1>
            <img src={coin.iconUrl} height={130} width={130} alt={coin.name} />
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto" lg={8}>
            <p>
              {!coin.description ? (
                <Skeleton count={5} />
              ) : (
                coin.description.replace(/<(?:.|\n)*?>/gm, '')
              )}
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="align-self-center">
            <Card className="coin-card" body>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <strong>Rank:</strong> {coin.rank}
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Price:</strong> {formatter.format(coin.price)}
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Volume: </strong>$
                  {!coin.volume ? '' : coin.volume.toLocaleString()}
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Circulating Supply:</strong>{' '}
                  {!coin.circulatingSupply
                    ? ''
                    : coin.circulatingSupply.toLocaleString()}{' '}
                  BTC
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Market Cap: </strong> $
                  {!coin.marketCap ? '' : coin.marketCap.toLocaleString()}
                </ListGroupItem>
              </ListGroup>
              <Card.Link className="text-center">
                {' '}
                <a href={coin.websiteUrl} target="_blank" rel="noreferrer">
                  {coin.websiteUrl}
                </a>
              </Card.Link>
            </Card>
          </Col>
          <Col>
            <div className="text-center">
              {/* {console.log(coin.links)} */}
              <h3>Links</h3>
              {!coin.links ? (
                <Skeleton count={5} />
              ) : (
                Object.keys(coin.links).map((key, index) => (
                  <div key={index}>
                    <a
                      href={coin.links[key].url}
                      target="_blank"
                      rel="noreferrer">
                      {coin.links[key].url}
                    </a>
                  </div>
                ))
              )}
              <hr />
              <h3>Social</h3>
              {!coin.socials ? (
                <Skeleton count={5} />
              ) : (
                Object.keys(coin.socials).map((key, index) => (
                  <div key={index}>
                    <a
                      href={coin.socials[key].url}
                      target="_blank"
                      rel="noreferrer">
                      {coin.socials[key].url}
                    </a>
                  </div>
                ))
              )}
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="mt-4 text-center">
            <h3>Current Price</h3>
            <Chart history={history} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withRouter(Coin)
