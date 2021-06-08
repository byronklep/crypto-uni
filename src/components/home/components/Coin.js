import { ListGroup, ListGroupItem } from 'react-bootstrap'

const Coin = ({ coin }) => {
  return (
    <>
      <div key={coin.id} className="card">
        <div className="card-title">
          <h1>{coin.name}</h1>
        </div>
        <div className="card-body">
          <ListGroup>
            <ListGroupItem>{coin.symbol}</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default Coin
