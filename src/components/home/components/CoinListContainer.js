import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import Coin from './Coin'

const CoinListContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const options = {
      method: 'GET',
      url: 'https://coingecko.p.rapidapi.com/coins/list',
      headers: {
        'x-rapidapi-key': 'f53ec3ed8fmsh56cc4f9c74af0edp18b789jsn7fb5469ef1fc',
        'x-rapidapi-host': 'coingecko.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        setData(response.data)
        setLoading(false)
      })
      .catch(function (error) {
        console.error(error)
      })
    return () => {}
  }, [])

  if (loading) {
    return <Spinner animation="grow" variant="info" />
  }
  return (
    <>
      {data.map((coin, id) => (
        <Coin key={id} coin={coin} />
      ))}
    </>
  )
}

export default CoinListContainer
