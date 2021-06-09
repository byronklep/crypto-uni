import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Spinner,
  Table,
  Container,
  Row,
  Col,
  Jumbotron,
  Form,
  FormControl,
} from 'react-bootstrap'
import Coin from './Coin'

const CoinListContainer = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setLoading(true)
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      headers: {
        'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.coins)
        setItems(response.data.data.coins)
        setLoading(false)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  if (loading) {
    return <Spinner className="spinner" animation="grow" variant="info" />
  }
  return (
    <>
      <Container>
        <Row>
          <Col className="justify-content-lg-center">
            <Jumbotron className="cl-jumbo" fluid>
              <h1 className="text-center">Search a Crypto Currency</h1>
            </Jumbotron>
            <Form>
              <FormControl
                type="text"
                placeholder="Search"
                className="search mx-auto m-5"
                onChange={handleChange}
              />
            </Form>
          </Col>
        </Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Icon</th>
              <th>Symbol</th>
              <th>Change</th>
              <th>Price</th>
              <th>Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((item, id) => (
              <Coin key={id} item={item} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default CoinListContainer
