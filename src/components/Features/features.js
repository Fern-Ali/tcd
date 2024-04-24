import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Images
import img1 from "../../assets/images/features/mockup1.png";
import img2 from "../../assets/images/features/mockup2.png";
import FeatureBox from "../common/feature-box";

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <SectionTitle title1="Quality" title2="Features" />
            {/* <Row className="mt-4 pt-4 vertical-content"> */}
            <Row className="mt-2 pt-2 vertical-content">
              <Col lg="6" className="mt-2">
                <div>
                  <img
                    src={img1}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <Col lg="6" className="mt-2 text-center">
                <FeatureBox
                  class=""
                  title="Boost Traffic with SEO Optimization"
                  desc="Elevate your rankings on search engines and drive more organic traffic to your website."
                  link="service"
                  text="Learn More"
                />
              </Col>
            </Row>
            <Row className="mt-5 vertical-content">
              <Col lg="6" className="mt-2">
                <FeatureBox
                  class="text-center"
                  title="Website Development & Management"
                  desc="From concept to launch, we create beautiful, responsive websites that showcase your brand and drive conversions."
                  link="service"
                  text="Learn More"
                />
              </Col>
              <Col lg="6" className="mt-2">
                <div>
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
