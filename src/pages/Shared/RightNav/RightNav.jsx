import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'
import './RightNav.css'

const RightNav = () => {
    return (
        <div className='mt-4'>
            <div>
                <h4>Login With</h4>
                <div className='mb-2 mt-4'>
                    <Button variant="outline-primary"><FaGoogle /> Login With Google</Button>
                </div>
                <div>
                    <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
                </div>
            </div>
            <div className='mt-4'>
                <h4 className='mb-4'>Find Us On</h4>
                <div>
                    <ListGroup>
                        <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                        <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                        <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <Qzone/>
            <div className='mt-4 bg-img'>
                <img src={bg} alt="" />
                <div className='text-center p-4 bg-img-text'>
                    <h4>Create an Amazing Newspaper</h4>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="secondary">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;