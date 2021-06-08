const Coin = ({ coin }) => {
  return (
    <>
      <tr key={coin.id}>
        <td>{coin.name}</td>
        <td>{coin.symbol}</td>
      </tr>
    </>
  )
}

export default Coin
