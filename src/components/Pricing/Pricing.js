import { Container, Card, ListGroup, Col, Table, Button, Row } from 'react-bootstrap'
export default function Pricing() {

    return (
        <Container expand="lg">
            <div className="pricing-header px-3 py-3 pt-md-5 pd-md-4 mx-auto text-center">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">
                    Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.
                </p>
            </div>


            <Row className='row-cols-1 row-cols-md-3 mb-5 text-center'>
                <Col>
                    <Card className='mb-4 shadow-sm text-center'>
                        <Card.Header>
                            <h4 className="my-0 font-weight-normal">
                                Free
                            </h4>
                        </Card.Header>

                        <Card.Body>
                            <Card.Title className=''>
                                <h1>
                                    $ 0 / mo
                                </h1>
                            </Card.Title>
                            <ListGroup className='mt-3 mb-4'>
                                <ListGroup.Item>10 users included</ListGroup.Item>
                                <ListGroup.Item>2 GB of storage</ListGroup.Item>
                                <ListGroup.Item>Email support</ListGroup.Item>
                                <ListGroup.Item>Help center access</ListGroup.Item>
                            </ListGroup>
                            <Button size='lg' variant='outline-primary'>Sign up for Free</Button>
                        </Card.Body>

                    </Card >

                </Col>

                <Col>
                    <Card className='mb-4 shadow-sm text-center'>
                        <Card.Header>
                            <h4 className="my-0 font-weight-normal">
                                Pro
                            </h4>
                        </Card.Header>

                        <Card.Body>
                            <Card.Title className=''>
                                <h1>
                                    $ 15 / mo
                                </h1>
                            </Card.Title>
                            <ListGroup className='mt-3 mb-4'>
                                <ListGroup.Item>20 users included</ListGroup.Item>
                                <ListGroup.Item>10 GB of storage</ListGroup.Item>
                                <ListGroup.Item>Priority email support</ListGroup.Item>
                                <ListGroup.Item>Help center access</ListGroup.Item>
                            </ListGroup>
                            <Button size='lg' variant='primary'>Get started</Button>
                        </Card.Body>

                    </Card >

                </Col>


                <Col>
                    <Card className='mb-4 shadow-sm text-center'>
                        <Card.Header>
                            <h4 className="my-0 font-weight-normal">
                                Free
                            </h4>
                        </Card.Header>

                        <Card.Body>
                            <Card.Title className=''>
                                <h1>
                                    $ 29 / mo
                                </h1>
                            </Card.Title>
                            <ListGroup className='mt-3 mb-4'>
                                <ListGroup.Item>30 users included</ListGroup.Item>
                                <ListGroup.Item>15 GB of storage</ListGroup.Item>
                                <ListGroup.Item>Phone and email support</ListGroup.Item>
                                <ListGroup.Item>Help center access</ListGroup.Item>
                            </ListGroup>
                            <Button size='lg' variant='primary'>Sign up for Free</Button>
                        </Card.Body>

                    </Card >

                </Col>

            </Row>

            <Table striped="columns" className='mt-5'>
                <thead>
                    <tr>
                        <th>Free</th>
                        <th>Pro</th>
                        <th>Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Public</td>
                        <td>✓</td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td>Private</td>
                        <td></td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td>Permissions</td>
                        <td>✓</td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td>Sharing</td>
                        <td></td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td>Unlimited Members</td>
                        <td></td>
                        <td>✓</td>
                        <td>✓</td>
                    </tr>
                    <tr>
                        <td> Extra security</td>
                        <td></td>
                        <td></td>
                        <td>✓</td>
                    </tr>
                   
                </tbody>
            </Table>

        </Container >

    )
}