import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const Coin = ({ match }) => {
  const [coin, setCoin] = useState({})

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

  return (
    <div>
      <Container>
        <Link className="btn btn-primary" to="/">
          Go Back
        </Link>
      </Container>
      <Card>
        <Card.Title>{coin.name}</Card.Title>
        <Card.Body>
          <ListGroup>
            <ListGroupItem>Rank: {coin.rank}</ListGroupItem>
            <ListGroupItem>Total Supply: {coin.totalSupply}</ListGroupItem>
            <ListGroupItem>Price: {coin.price}</ListGroupItem>
            <ListGroupItem>{coin.description}</ListGroupItem>
          </ListGroup>
          {/* <div className="d-flex justify-content-between">
            <a href={coin.links[0].url}>{coin.links[0].url}</a>
            <a href={coin.links[1].url}>{coin.links[1].url}</a>
          </div> */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default withRouter(Coin)
