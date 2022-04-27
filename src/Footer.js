import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
export const Footer = () =>{
    return(
        <div className='Footer'>
        
<p></p>
                    <Container>
        <Row>
                      <Col md={2} sm={6}>
                        <h2>Get to Know Us</h2>
                       <ul>
                        <li>Careers</li>
                         <li>Blog</li> 
                          <li>About Amazon</li>
                          <li>Investor Relations</li>
                         <li>Amazon Devices</li> 
                          <li>Amazon Science</li>
                     </ul>
                        </Col>
                      
                    </Row>
                    </Container>
                    </div>
    );
}