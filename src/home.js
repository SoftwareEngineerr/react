import React , { useState } from 'react';
import {Slider} from './slider';
import { FaArrowAltCircleRight , FaArrowAltCircleLeft } from 'react-icons/fa';

              // Picture Start
import image from './image/shop1.jpg';
import Keyborad from './image/keyborad.jpg';
import Mouse from './image/mouse.jpg';
import Head from './image/head2.jpg';
import key from './image/keyborad.jpg';
import Chair from './image/chair.jpg';
import laptop from './image/laptop.jpg';
import video from './image/video.jpg';
import airoplane from './image/airoplane.jpg';
import shave from './image/shave.jpg';
import baby from './image/baby.jpg';
import toy from './image/toy.jpg';
import ship from './image/ship.jpg';
import dress from './image/dress.jpg';
import computer from './image/computer.jpg';
import computer1 from './image/computer1.jpg';
import books from './image/books.jpg';
import Sweatshirts from './image/Sweatshirts.jpg';
import Joggers from './image/Joggers.jpg';
import Cardigans from './image/Cardigans.jpg';
import slide1 from './image/shop3.jpg';
import slide2 from './image/shop4.jpg';
import slide3 from './image/faniture.jpg';
import slide4 from './image/beauty.jpg';
import slide5 from './image/shop7.jpg';
import Easytees from './image/Easy tees.jpg';
import Sock from './image/Sock.jpg';
import Sock1 from './image/Sock1.jpg';
import Sock2 from './image/Sock2.jpg';
import Sock3 from './image/Sock3.jpg';
import shirt from './image/shirt.jpg';
import hat from './image/hats.jpg';
import spider from './image/spider.jpg';
import mug from './image/mugs.jpg';
import tablet from './image/tablet.jpg';
import pet from './image/pets.jpg';
import watch from './image/watch.jpg';
import BabyProduct from './image/BabyProduct.jpg';
import BabyProduct1 from './image/BabyProduct1.jpg';
import BabyProduct2 from './image/BabyProduct2.jpg';
import BabyProduct3 from './image/BabyProduct3.jpg';
import phone1 from './image/phone.jpg';
import phone2 from './image/phone2.jpg';
import phone3 from './image/phone3.jpg';
import phone4 from './image/phone5.jpg';
import fit from './image/fit.jpg';
import laptop2 from './image/laptop2.jpg';
import seller from './image/seller.jpg';
import seller1 from './image/seller1.jpg';
import seller2 from './image/seller2.jpg';
import seller3 from './image/seller3.jpg';
                        // Picture End
import Carousel from 'react-bootstrap/Carousel'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container , Row , Col  } from 'react-bootstrap';
export const Home = (sliders) => {
    const [ current , setCurrent ] = useState(0);
    const length = Slider.length;
    const [ slideshow , setSlideshow ] = useState(BabyProduct);
    const [ phoneSlide , setPhoneSlide ] = useState(phone1);
    function Slide(n){
      if(n == '0'){
        setSlideshow(BabyProduct);
      }
      if(n == '1'){
        setSlideshow(BabyProduct1);
      }
      if(n == '2'){
        setSlideshow(BabyProduct2);
      }
      if(n == '3'){
        setSlideshow(BabyProduct3);
      }
    }
    function phone(n){
      if(n == '0'){
        setPhoneSlide(phone1);
      }
      if(n == '1'){
        setPhoneSlide(phone2);
      }
      if(n == '2'){
        setPhoneSlide(phone3);
      }
      if(n == '3'){
        setPhoneSlide(phone4);
      }
    }
    // var header = document.getElementById("myDIV");
    // var btns = header.getElementsByclassName("smallImage");
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function() {
    //   var current = document.getElementsByclassName("active");
    //   current[0].className = current[0].className.replace(" active", "");
    //   this.className += " active";
    //   });
    // }
    return(
        <div className='home'>
          <div className='home1'>

          </div>
            {/* <section className='slider'>
                <FaArrowAltCircleLeft className='left-arrow' /> 
                hellowrold
                <FaArrowAltCircleRight className='right-arrow' /> 
            {Slider.map((slide , index) =>
          <img style={{width: "100%"}} src={slide.image} className='image' />
            ) }
            </section> */}
            <div className='slide'>
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img src={slide4} className="d-block w-100" />
  </Carousel.Item>
  <Carousel.Item>
    <img src={slide5} className="d-block w-100" />
  </Carousel.Item>
</Carousel>
</div>
            <Container style={{ marginTop: '220px' ,   maxWidth: '1309px'}}>
              <Row>


                  <Col md={3} className='Col' sm={4} xs={6}>
                 <b className='text'> Gaming accessories</b>
                    <div className='imagecon'>
                      <div>
                        <div><img src={Head} className='image'  /></div>
                     <div> <img src={Keyborad} className='image'  /></div>
                     <div className='content'>HeadPhonse</div>
                     <div className='content'> keyborad</div>
                     <div style={{padding : '5px 5px 3px'}}><img src={Mouse} className='image' /></div>
                     <div> <img src={Chair} className='image'  /></div>
                     <div className='content'>HeadPhonse</div>
                     <div className='content'> keyborad</div>
                      </div>
                      </div>
                      <div className='See'>
                      See More
                      </div>
                  </Col>

                  <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Shop by Category</b>
                    <div className='imagecon'>
                      <div>
                        <div className='smcontianer' style={{ paddingBottom: '4px'}}><img src={laptop} className='smImage'  />
                        <p className='smtext' >Computer & Accessories</p>
                        </div>
                     <div className='smcontianer'> <img src={video} className='smImage'  />
                     <p className='smtext'>Computer & Accessories</p>
                     </div>
                     <div className='smcontianer'><img src={baby} className='smImage' />
                     <p className='smtext'>Computer & Accessories</p>
                     </div>
                     <div className='smcontianer'> <img src={toy} className='smImage'  />
                     <p className='smtext'>Computer & Accessories</p></div>
                      </div>
                      </div>
                      <div className='Shop'>
                      Shop Now
                      </div>
                      </div>

                  </Col>

                  <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Health & Personal Care</b>
                 <img src={shave} className='shave' />
                 <div className='shavecontent'>
                  Shop Now
                 </div>
                      </div>

                  </Col>

                  <Col id='col' className='ColWithOutBackground' md={2} sm={4} xs={6}>
                    <div className='sign'>
                  <b className='text'>Sign in for the best experience</b>
                  <button className='signbutton'>Sign in Securely</button>
                  </div>

                  <div className='shipimage'>
                <img src={ship} className='ship' />
                  </div>
                  </Col>
              </Row>


              <Row>
              <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Dresses</b>
                 <img src={dress} className='shave' />
                 <div className='shavecontent'>
                  Shop Now
                 </div>
                      </div>

                  </Col>
                  <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Computers & Accessories</b>
                 <img src={computer} className='shave' />
                 <div className='shavecontent'>
                  Shop Now
                 </div>
                      </div>

                  </Col>

                  <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Deal of the Day</b>
                 <img src={books} className='books' />
                 <div className='bookscontent'>
                   <sup>$</sup><span className='sub'>0</span><sup>99</sup> - <sup>$</sup><span className='sub'>4</span><sup>99</sup>
                   <p style={{    fontSize: '13px'}}>Load your Kindle width today's book deals</p>
                 </div>
                 <div className='shavecontent'>
                  See all deals
                 </div>
                      </div>

                  </Col>


                  <Col id='col' style={{ background : 'white'}} className='ColWithOutBackground' md={2} sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Electronics</b>
                 <img src={computer1} className='shave' />
                 <div className='shavecontent'>
                  See More
                 </div>
                      </div>

                  </Col>
              </Row>


              <Row>

              <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>New arrivals in Toys</b>
                 <img src={airoplane} className='shave' />
                 <div className='shavecontent' style={{marginTop: '52px'}}>
                  Shop Now
                 </div>
                      </div>
                  </Col>
                  

                  <Col md={3} className='Col' sm={4} xs={6}>
                 <b className='text'>Comfy styles for her</b>
                    <div className='imagecon'>
                      <div>
                        <div><img src={Sweatshirts} className='imagepad'  /></div>
                        <div className='pad'></div>
                     <div> <img src={Joggers} className='imagepad'  /></div>
                     <div className='contentpad'>Sweatshirts</div>
                     <div className='contentpad'> Joggers</div>
                     <div style={{padding : '5px 5px 3px'}}><img src={Cardigans} className='imagepad' /></div>
                     <div className='pad'></div>
                     <div> <img src={Easytees} className='imagepad'  /></div>
                     <div className='contentpad'>Cardigans</div>
                     <div className='contentpad'> Easy tees</div>
                      </div>
                      </div>
                      <div className='See1'>
                      See More
                      </div>
                  </Col>



                  <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Popular products in Apparel internationally</b>
                 <Carousel style={{    zIndex: '1', width: '301px'}}>
              <Carousel.Item interval={20000}>
              <img src={Sock} className='shave1' />
              </Carousel.Item>
              <Carousel.Item interval={20000}>
              <img src={Sock1} className='shave1' />
                </Carousel.Item>
                <Carousel.Item interval={20000}>
                  <img src={Sock2} className='shave1' />
                </Carousel.Item>
                <Carousel.Item interval={20000}>
                  <img src={Sock3} className='shave1' />
                </Carousel.Item>
                 </Carousel>
                 
                 <div className='shavecontent1'>
                  Shop Now
                 </div>
                      </div>
                  </Col>

                  <Col  id='col' style={{ background : 'white'}} className='ColWithOutBackground' md={2} sm={4} xs={6}>
                 <b className='text'> Gaming merchandise</b>
                    <div className='imagecon'>
                      <div>
                        <div><img src={shirt} className='image'  /></div>
                     <div> <img src={hat} className='image'  /></div>
                     <div className='content'>Apparel Apparel</div>
                     <div className='content'> Hats</div>
                     <div style={{padding : '5px 5px 3px'}}><img src={spider} className='image' /></div>
                     <div> <img src={mug} className='image'  /></div>
                     <div className='content'>Action Figure</div>
                     <div className='content'> Mugs</div>
                      </div>
                      </div>
                      <div className='See1'>
                      See More
                      </div>
                  </Col>

              </Row>


              <Row>
              <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Kindle E readers</b>
                 <img src={tablet} className='shave' />
                 <div className='shavecontent' style={{marginTop: '23px'}}>
                  Shop Now
                 </div>
                      </div>
                  </Col>
                                          {/* Animation Using Own javascript */}
                  <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Frequently repurchased in Baby Products</b>
                 <img src={slideshow} className='slideImage' />
                 <div id='myDIV'>
                   <img src={BabyProduct} className='smallImage active' onClick={()=>Slide(0)} />
                   <img src={BabyProduct1} className='smallImage' onClick={()=>Slide(1)} />
                   <img src={BabyProduct2} className='smallImage' onClick={()=>Slide(2)} />
                   <img src={BabyProduct3} className='smallImage' onClick={()=>Slide(3)} />
                 </div>
                      </div>
                  </Col>


                  <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Shop Pet supplies</b>
                 <img src={pet} className='shave' />
                 <div className='shavecontent' style={{marginTop: '23px'}}>
                  See More Pets
                 </div>
                      </div>
                  </Col>

                  <Col id='col' style={{ background : 'white'}} className='ColWithOutBackground' md={2} sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Shop activity trackers and smartwatches</b>
                 <img src={watch} className='shave' />
                 <div className='shavecontent' style={{marginTop: '23px'}}>
                  Shop Now
                 </div>
                      </div>
                  </Col>
              </Row>


              <Row>
              <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>For your Fitness Needs</b>
                 <img src={fit} className='shave' />
                 <div className='shavecontent' style={{marginTop: '23px'}}>
                  Shop Now
                 </div>
                      </div>
                  </Col>

                  <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>International top sellers</b>
                 <img src={phoneSlide} className='slideImage' />
                 <div id='myDIV'>
                   <img src={phone1} className='smallImage active' onClick={()=>phone(0)} />
                   <img src={phone2} className='smallImage' onClick={()=>phone(1)} />
                   <img src={phone3} className='smallImage' onClick={()=>phone(2)} />
                   <img src={phone4} className='smallImage' onClick={()=>phone(3)} />
                 </div>
                      </div>
                  </Col>

                  <Col md={3} className='Col' sm={4} xs={6}>
                    <div className='shop'>
                 <b className='text'>Shop Laptops & Tablets</b>
                 <img src={laptop2} className='shave' />
                 <div className='shavecontent' style={{marginTop: '23px'}}>
                  Shop Now
                 </div>
                      </div>
                  </Col>
              

              

                 <Col id='col' style={{ background : 'white'}} className='ColWithOutBackground' md={2} sm={4} xs={6}>
                 <b className='text'> International top sellers in Home Improvement</b>
                    <div className='imagecon'>
                      <div>
                        <div><img src={seller} className='image'  /></div>
                     <div> <img src={seller1} className='image'  /></div>
                     <div style={{padding : '5px 5px 3px'}}><img src={seller2} className='image' /></div>
                     <div> <img src={seller3} className='image'  /></div>
                      </div>
                      </div>
                      <div style={{ marginTop: '55px' , marginLeft : '7px'}} className='See'>
                      See More
                      </div>
                  </Col>
                  </Row>


                  <Row className='centerRow'>
                    <Col className='centerdiv' md={3} sm={6}>
                    <div  className='footer' style={{textAlign:'center'}}>
                    See personalized recommendations
                    <button className='signIn'>Sign in</button>
                    <p>New customer? <span className='start'>Start here.</span></p>
                    </div>
                    </Col>
                    </Row>
                    <Row className='backTotop'>
                    <Col className='centerdiv'>
                      Back to top
                    </Col>
                    </Row>

        </Container>
</div>
    )}