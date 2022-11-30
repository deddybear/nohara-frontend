import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {IoHome} from "react-icons/io5";
import { AiFillPhone, AiOutlineWhatsApp, AiTwotoneMail, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";


const AboutComponent = ({aboutCompany, aboutContact}) => (
    <Row>
        <Col xs={12} md={4} className='my-5'>
            <p className='letter-spacing-1'><b>{aboutCompany.name}</b></p>
            <p className='text-justify'>{aboutCompany.desc}</p>
        </Col>
        <Col xs={12} md={4} className='my-5'>
            <p className='letter-spacing-1'><b>Alamat</b></p>
            <Row>
                <Col xs={1}><IoHome/></Col>
                <Col xs={11}>{aboutContact.address}</Col>
            </Row>
            <p className='mt-5 letter-spacing-1'><b>Kontak</b></p>
            <Row>
                <Col xs={1}><AiFillPhone/></Col>
                <Col xs={11}>{aboutContact.telephone}</Col>
            </Row>
            <Row>
                <Col xs={1}><AiOutlineWhatsApp/></Col>
                <Col xs={11}>{aboutContact.whatsapp}</Col>
            </Row>
            <Row>
                <Col xs={1}><AiTwotoneMail/></Col>
                <Col xs={11}>{aboutContact.email}</Col>
            </Row>
        </Col>
        <Col xs={12} md={4} className='my-5'>
            <p className='letter-spacing-1'><b>Social Media</b></p>
            <div className='my-3'>
                <a className='text-dark' href='https://web.facebook.com/people/Jasa-Desain-Rumah/100088195363945/'>
                    <Row>
                        <Col xs={1}><AiFillFacebook/></Col>
                        <Col xs={11}>Jasa Desain Rumah</Col>
                    </Row>
                </a>
            </div>
            <div className='my-3'>
                <a className='text-dark' href='#'>
                    <Row>
                        <Col xs={1}><AiFillInstagram/></Col>
                        <Col xs={11}>nohara.viscape</Col>
                    </Row>
                </a>
            </div>
            <div className='my-3'>
                <a className='text-dark' href='#'>
                    <Row>
                        <Col xs={1}><FaTiktok/></Col>
                        <Col xs={11}>nohara.viscape</Col>
                    </Row>
                </a>
            </div>
        </Col>
    </Row>
)

export default AboutComponent
