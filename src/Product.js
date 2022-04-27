import React , { useState }  from 'react';
import { Container , Row , Col  } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AddItem , RemoveItem , ClearItem} from './action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCrown } from '@fortawesome/free-solid-svg-icons'
const Product = (getvalue) => {
    /* Image changing slideShow */
    const [ imageChange1 , setImageChange1 ] = useState(0);
    function MyFunction(n){
        setImageChange1(n);
    }
    const dispatch = useDispatch();
    const [price , setPrice ] = useState(getvalue.eachProduct.ExtraLarge);
    const image = getvalue.eachProduct.image;
    const sel = (getval) =>{
        if(getval.target.value == 'ExtraLarge'){
            setPrice(getvalue.eachProduct.ExtraLarge);
        }
        if(getval.target.value == 'Large'){
            setPrice(getvalue.eachProduct.Large);
        }
        if(getval.target.value == 'Normal'){
            setPrice(getvalue.eachProduct.Normal);
        }
        if(getval.target.value == 'Small'){
            setPrice(getvalue.eachProduct.Small);
        }
    }
    return (
        <div id='Product' className='Product'>
            <Container>
            <Row>
                <Col sm={12}  xs={12} className='col1'>
                    <div className='backG'>
                    {getvalue.eachProduct.saler == 'new'? null :<div className='best'> <div>Best Saler<FontAwesomeIcon icon="faCrown" /> </div></div>}
                    <div className='title' >{getvalue.eachProduct.saler == 'new'? null :  <div> {getvalue.eachProduct.title} </div> }</div>
                    </div>
            <div className='image'>
            <img className='img' src={getvalue.eachProduct.image[imageChange1]} />
            <div className="ne">❯</div>
            </div>
            <div className="prev" > ❮ </div>
            <div className='dotsMainContianer'>
                { image.length == 0 ? null :
                image.map((item , ind)=>
    <span key={ind} onClick={()=>MyFunction(ind)} className="dot"></span>
                )} 
    </div>

            <div className='content'>
            {getvalue.eachProduct.Content}
            </div>
          {/*  <div>
                      <select name="Sel" onChange={sel} id="select">
                        <optgroup label="Pant Type">
                        <option value="ExtraLarge">Extra Large</option>
                        <option value="Large">Large</option>
                        <option value="Normal">Medium</option>
                        <option value="Small">Small</option>
                        </optgroup>
                </select>
                </div>
                <div>
                <button onClick={() =>dispatch(AddItem({price , image}))} className='butn'>
                        <div className='row'>
                            <div id='Add'>
                                Add
                            </div>
                            <div id='price'>
                               Rs. {price}
                            </div>
                        </div>
                    </button></div> */}
                    <div className='priceContianer'>
                   <div className='price'> {getvalue.eachProduct.Large}</div><sup className='sub'>99</sup>
                   </div>
                   <div className='ship'>Ships to Pakistan</div>
                   <div className='quantity'>
                       {
                           getvalue.eachProduct.quantity <= 5 ?
                           getvalue.eachProduct.quantity == 1 ?
                           <div className='quantity'>
                           Only 1 left in stock - order soon.
                           </div>
                           :
                           <div className='quantity'>
                Only {getvalue.eachProduct.quantity} left in stock (more on the way).
                </div>
            :null           
            }
                   </div>
                    </Col>
                    </Row>
                    </Container>
        </div>
    );
};

export default Product;