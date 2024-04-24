import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";

//Import Team Box
import TeamBox from "./team-box";

//Import Images
import team1 from "../../assets/images/team/team-1.png";
import team2 from "../../assets/images/team/alicia.jpg";
import team3 from "../../assets/images/team/team-3.png";
import team4 from "../../assets/images/team/team-4.png";

class OurTeam extends Component {
    state = {
        members : [
            { id : 1, name : "SHER M. KHAN", image : team1, post : "CEO/Founder",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 2, name : "ALICIA FERNANDEZ", image : team2, post : "Lead Developer",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 3, name : "PAUL RIVIERA", image : "https://randomuser.me/api/portraits/men/33.jpg", post : "Web Designer",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
            { id : 4, name : "Danica Oswald", image : "https://randomuser.me/api/portraits/women/43.jpg", post : "Web Developer",
                socials : [
                    { class : "mdi mdi-facebook", link : "#" },
                    { class : "mdi mdi-google", link : "#" },
                    { class : "mdi mdi-twitter", link : "#" },
                ]
            },
        ]
    }
    render() {
        return (
            <React.Fragment>
        <section className="section" id="team">
            <Container>
                <SectionTitle title1="Our" title2="Team" />
                <Row className="mt-4 pt-4">
                    <TeamBox members={this.state.members} />
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default OurTeam;