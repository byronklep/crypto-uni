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
            {/* {Array.coin.links.map((l) => (
              <>
                <a href={l.url}>{l.url}</a>
                <h5>{l.name}</h5>
              </>
            ))} */}
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default withRouter(Coin)
