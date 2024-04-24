import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
    state = {
        services : [
            { title : "Development & Design", icon : "mbri-code", description : "From concept to launch, we create responsive websites that showcase your brand and drive conversions." },
            { title : "SEO Optimization", icon : "mbri-growing-chart", description : "Boost your rankings on various search engines and drive more organic traffic to your website." },
            { title : "Site Management", icon : "mbri-features", description : "Stay ahead of the competition with a consistent and engaging online presence across all platforms." },
        ],
        services1 : [
            { title : "Expertise", icon : "mbri-photos", description : "Our team knows what it takes to succeed online. We tailor our services to meet your needs." },
            { title : "Affordability", icon : "mbri-responsive", description : "We offer competitive pricing without compromising on quality to offset the many challenges business face." },
            { title : "Results-Driven", icon : "mbri-download", description : "Your success is our priority. Our sucess is measured by the results we achieve for your business." },
        ],
        
    }
    render() {
        return (
            <React.Fragment>
        <section id="service" className="section">
            <Container>
            <SectionTitle title1="Services at" title2="Treasure Coast Digital" />
                <Row className="pt-4 mt-4">
                <ServiceBox services={this.state.services} />
                </Row>
                <Row>
                <ServiceBox services={this.state.services1} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default Services;