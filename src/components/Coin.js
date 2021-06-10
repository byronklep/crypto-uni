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

const Coin = ({ match }) => {
  const [coin, setCoin] = useState({})
  const [history, setHistory] = useState([])

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

  return (
    <div>
      <Container>
        <Link className="btn btn-primary" to="/">
          Go Back
        </Link>
      </Container>
      <Card>
        <div className="d-flex justify-content-between">
          <Card.Title>{coin.name}</Card.Title>
          <img src={coin.iconUrl} height={30} width={30} alt={coin.name} />
        </div>

        <Card.Body>
          <ListGroup>
            <ListGroupItem>Rank: {coin.rank}</ListGroupItem>
            <ListGroupItem>Total Supply: {coin.totalSupply}</ListGroupItem>
            <ListGroupItem>Price: {coin.price}</ListGroupItem>
            <ListGroupItem>{coin.description}</ListGroupItem>
          </ListGroup>
          <div className="text-center">
            <a href={coin.websiteUrl}>{coin.websiteUrl}</a>
            <hr />
            {/* {console.log(coin.links)} */}
            <h3>Links</h3>
            {!coin.links
              ? ''
              : Object.keys(coin.links).map((key, index) => (
                  <div key={index}>
                    <a href={coin.links[key].url}>{coin.links[key].url}</a>
                  </div>
                ))}
            <hr />
            <h3>Social</h3>
            {!coin.socials
              ? ''
              : Object.keys(coin.socials).map((key, index) => (
                  <div key={index}>
                    <a href={coin.socials[key].url}>{coin.socials[key].url}</a>
                  </div>
                ))}
          </div>
        </Card.Body>
      </Card>
      <Container>
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
