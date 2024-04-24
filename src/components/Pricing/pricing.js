import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Pricing
import PricingBox from './pricing-box';

class Pricing extends Component {
    state = {
        pricings : [
            { id : 1, title : "Economy", price : "1.3k", duration : "",
                features : 
                    { bandwith : "1GB", onlinespace : "50MB", support : "No", domain : "-", hiddenFees : "*No Hidden Fees", 
                    link: "https://html.dynamiclayers.net/dl/xoom/templates/demo-2/image/index.html",
                    description: [ <li>Static landing page</li>, 
                                    <li>Fresh, modern design</li>, 
                                    <li>Business Bio</li>, 
                                    <li>Services Section</li>, 
                                    <li>Pricing Section</li>]}
                
            },
            { id : 2, title : "Premium", price : "190", duration : "m",
                features : 
                    { bandwith : "1GB", onlinespace : "500MB", support : "Yes", domain : "5 Domain5", hiddenFees : "*Plus Startup Fee", link: "https://appie.quomodosoft.com/home-dark#",
                    description: [ <li>All Economy Features</li>, 
                                    <li>Multiple Custom Pages</li>, 
                                    <li>Fillable Forms</li>, 
                                    <li>Social Media Integration</li>, 
                                    <li>Basic SEO + Analytics</li>] }
                
            },
            { id : 3, title : "Deluxe", price : "290", duration : "m",
                features : 
                    { bandwith : "1GB", onlinespace : "2GB", support : "Yes", domain : "10 Domain", hiddenFees : "*Plus Startup Fee", link: "https://qatanshop.myshopify.com/",
                    description: [ <li>All Standard Features</li>, 
                                    <li>E-commerce + 3rd Party Integration</li>, 
                                    <li>Scheduling Features</li>, 
                                    <li>Advanced Analytics + Reporting</li>, 
                                    <li>Payment Gateway Integration</li>] }
                
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="pricing">
                    <Container>
                    <SectionTitle title1="Our" title2="Pricing" />
                        <Row className="mt-4 pt-4">
                            <PricingBox pricings={this.state.pricings} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Pricing;