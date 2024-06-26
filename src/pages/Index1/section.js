import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

//Import Image
// import img1 from "../../assets/images/bg-home.jpg";

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this)
    }

    callModal = () => {
        this.refs.child.openModal();
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="bg-home" id="home">
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <Container>
                                <Row className="row justify-content-center">
                                    <Col lg="10" className="text-center">
                                        <h6 className="home-title text-white">Empower your business and outshine the competition</h6>
                                        {/* <p className="pt-4 home-sub-title text-white mx-auto">We help small businesses and startups thrive in the digital world.</p> */}
                                        <p className="pt-4 home-sub-title text-white mx-auto">From improving your search engine visibility to developing a stunning website, we've got you covered.</p>
                                        <div className="watch-video pt-4">
                                            {/* <Link to="#" onClick={this.callModal} className="video-play-icon text-white">
                                                <i className="mdi mdi-play play-icon-circle play play-iconbar"></i> <span>Watch The Video!</span>
                                            </Link> */}
                                            <a href="#features" className="btn btn-custom btn-rounded">
                                                Get Started
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                {/* Render ModalSection Component for Modal */}
                            <ModalSection ref="child" channel='vimeo' videoId='99025203' />
                            </Container>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;