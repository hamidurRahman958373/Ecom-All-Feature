import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class Favourite extends Component {


    render() {

        return (
            <Fragment>
                <Container  className="text-center bg-white card-body shadow-sm py-5 BetweenTwoSection" fluid={true}>
                    <h4 className="section-title ">My Favourite Items</h4>
                    <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                    <Row >

                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/e83135c4f08dba766d539651fb79d2fa.jpg_400x400q75.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                    <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>


                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/e83135c4f08dba766d539651fb79d2fa.jpg_400x400q75.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>
                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/e83135c4f08dba766d539651fb79d2fa.jpg_400x400q75.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>
                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/e83135c4f08dba766d539651fb79d2fa.jpg_400x400q75.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>
                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/e83135c4f08dba766d539651fb79d2fa.jpg_400x400q75.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>
                        <Col className="p-2" xl={3} lg={3} md={3} sm={6} xs={6} >
                            <Card className="card text-center w-100  image-box ">
                                <img src="https://static-01.daraz.com.bd/p/e83135c4f08dba766d539651fb79d2fa.jpg_400x400q75.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card m-0 p-0">ASUS TUF A15 FA506IU Ryzen 7 4800H</h5>
                                    <p className="product-price-on-card m-0 p-0">Price: 3000TK</p>
                                </Card.Body>
                                <Button className="btn text-danger w-100 btn-light"> <i className="fa fa-trash-alt"></i> Remove </Button>
                            </Card>
                        </Col>


                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Favourite;