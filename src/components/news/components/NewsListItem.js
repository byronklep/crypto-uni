import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Truncate from 'react-truncate'

const NewsListItem = ({ n }) => {
  return (
    <Container className="justify-content-md-center">
      <Row className="m-5">
        <Col lg={4}>
          <a href={n.url} target="_blank" without rel="noreferrer">
            <Image src={n.imageurl} alt="news" fluid />
          </a>
        </Col>
        <Col>
          <div className="container">
            <strong>
              <a href={n.url} target="_blank" without rel="noreferrer">
                <h4 className="title">{n.title}</h4>
              </a>
            </strong>
            <p>
              <Truncate lines={3}>{n.body}</Truncate>
            </p>
            <a href={n.url} target="_blank" without rel="noreferrer">
              <Button className="btn-success">Read More</Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NewsListItem
