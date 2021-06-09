import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Jumbotron, Spinner } from 'react-bootstrap'
import NewsListItem from './NewsListItem'

const NewsContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${process.env.CRYPTOCOMPARE_API_KEY}`
      )
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <Spinner className="spinner" animation="grow" variant="info" />
  }

  return (
    <div className="container mt-3 text-center">
      <Jumbotron className="cl-jumbo" fluid>
        <h1 className="">Crypto News</h1>
      </Jumbotron>

      <Row>
        <br />
        <Col>
          <section>
            {data.Data.map((n, id) => (
              <NewsListItem key={id} n={n} />
            ))}
          </section>
        </Col>
      </Row>
    </div>
  )
}

export default NewsContainer
