import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';


class Footer extends Component {
    render () {
        return (
            <footer className="bck_b_dark">
                <div className="container">
                    <div className="logo">
                            Chefspert
                    </div>

                        <div className="wrapper">
                            <div className="left">
                                <h2>Contact Information</h2>
                                <div className="business_info">
                                    <div className="tag">
                                        <FontAwesomeIcon
                                            icon={faCompass} 
                                            className="icon"/>
                                        <div className="info">
                                            <div>Address</div>
                                            <div>Houston, TX</div>
                                        </div>
                                    </div>

                                    <div className="tag">
                                        <FontAwesomeIcon
                                            icon={faPhone} 
                                            className="icon"/>
                                        <div className="info">
                                            <div>Phone</div>
                                            <div>832-330-8004</div>
                                        </div>
                                    </div>

                                    <div className="tag">
                                        <FontAwesomeIcon
                                            icon={faClock} 
                                            className="icon"/>
                                        <div className="info">
                                            <div>Hours</div>
                                            <div>24/7</div>
                                        </div>
                                    </div>

                                    <div className="tag">
                                        <FontAwesomeIcon
                                            icon={faEnvelope} 
                                            className="icon"/>
                                        <div className="info">
                                            <div>Envelope</div>
                                            <div>chef@chefspert.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="left">
                            <h2>Be the first to know</h2>
                            <div>
                                <p>Home cooking on demand.</p>
                            </div>
                        </div>
                    </div>              
                </div>
            </footer>
        );
    }
}

export default Footer;