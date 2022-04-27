import React , { useState } from 'react';
import { useSelector  } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee , faShopping } from '@fortawesome/free-solid-svg-icons';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import Badge from "@material-ui/core/Badge";
import { Link } from 'react-router-dom';
import shop from './image/shopify.png';
import './main.css';
import {Product} from './Product1';
import  amazon  from './image/zoom.png';
import { Cart } from './Cart';
export const Header = () => {
    //const getvalue = useSelector((getvalue) => state.AddItemReducer.lenght);
    const [itemCount, setItemCount] = useState(22);
    const [ menu , setMenu ] = useState(false);
    function showHidePop() {
        setMenu(!menu);
       // setMenu(1);
    }
    return(
        <div className='Header'>
        <nav>  
            <ul>
            <div>  
            <div>
                    <button>Login</button>
                </div>      
                  <Badge color="secondary" id='Badge' badgeContent={itemCount} >
          <ShoppingCartIcon onClick={()=>showHidePop()} className='font' />{" "}
          {menu ?
          <div> 
          <Cart />
          </div> : null }
          
        </Badge>
                <p className='content'><img src={amazon} className='image123' /></p>
                <div className='heading'>
                    <LocationOnIcon className='location' />
                    <p className='smallheading'>Deliver to</p>
                    <p className='Largeheading'>Pakistan</p>
                    </div>
            </div>
            <div>
                <span style={{marginTop : '-10px'}}>
                <select className='select'>
                    <option className='option'>All</option>
                    <option className='option'>Computer</option>
                    <option className='option'>Art & Crafts</option>
                    <option className='option'>Automative</option>
                    <option className='option'>Boy's Fashion</option>
                    <option className='option'>Deals</option>
                    <option className='option'>Digitail Music</option>
                </select>
                </span>


                <input type='text' className='input' placeholder='Type Item' name='searchBar'/>
                <SearchIcon className='search' />
                </div>
                
            </ul>
        </nav>
        <div className='Menu2nd'>
            <Link to='/'><span>All</span></Link>
            <span>Today's Deals</span>
            <span>Customers Services</span>
            <span>Registry</span>
            <span>Gift Card</span>
            <span>Sell</span>
            <span><Link to='/Product'>Product </Link></span>
        </div>
        </div>
    )
}