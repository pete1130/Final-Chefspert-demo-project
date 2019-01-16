import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';




class Footer extends Component {
    render () {
        return (
            <footer className="bck_b_dark">
                <div className="container">
                

                        <div className="wrapper">
                            <div className="left">
                                <div className="business_info">
                                    <div className="tag">
                                        <FontAwesomeIcon
                                            icon={faEnvelope} 
                                            className="icon"/>
                                        <div className="info">
                                            <div>Email</div>
                                            <div>chef@Chefspert.com</div>
                                        </div>
                                    </div>

                                    <div className="tag">
                                        <FontAwesomeIcon
                                            icon={faPhone} 
                                            className="icon"/>
                                        <div className="info">
                                            <div>Phone</div>
                                            <div>1-800-Chefspert</div>
                                        </div>
                                    </div>
                                    <p>&copy; 2019. Chefspert. All Rights Reserved.</p>

                                </div>
                            </div>
                    </div>              
                </div>
            </footer>
        );
    }
}

export default Footer;