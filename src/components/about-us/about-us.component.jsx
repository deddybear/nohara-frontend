import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AboutComponent = ({}) => (
    <Row>
        <Col xs={12} md={4}>Nohara</Col>
        <Col xs={12} md={4}>
            <h1>Alamat</h1>
            <h1>Kontak</h1>
        </Col>
        <Col xs={12} md={4}>Sosmed</Col>
    </Row>
)

export default AboutComponent