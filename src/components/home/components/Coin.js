const Coin = ({ item }) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  return (
    <>
      <tr key={item.id}>
        <td>{item.rank}</td>
        <td>{item.name}</td>
        <td>
          <img src={item.iconUrl} height={30} width={30} alt="icon" />
        </td>
        <td>{item.symbol}</td>
        <td>
          {item.change < 0 ? (
            <p className="red">{item.change.toFixed(2)}%</p>
          ) : (
            <p className="green">{item.change.toFixed(2)}%</p>
          )}
        </td>
        <td>{formatter.format(item.price)}</td>
        <td>$ {item.marketCap.toLocaleString()}</td>
      </tr>
    </>
  )
}

export default Coin
