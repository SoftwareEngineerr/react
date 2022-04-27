import React from 'react';
import { Link } from 'react-router-dom';
import { black , gray , green , white , blue , red , all} from './action';
import { useDispatch } from 'react-redux';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container , Row , Col  } from 'react-bootstrap';
export const SideMenu = () =>{
    const Cross = () =>{
        //var x = document.getElementsByClassName('sideMenu');
//        x.style={{display = 'block'}} ? style={{display = "none"}} : style={{display = 'block'}}
        console.log('Cross button');
    }
    const dispatch = useDispatch();
    return(
        <div className='sideMenu'>
            <input type='text' name='txt' placeholder='Search' />
            <div onClick={Cross()} className='cross'>X</div>
            <p className='heading'>Category</p>
            <nav>
                <ul>
                    <li><Link to='/'>All</Link></li>
                    <li><a href='#'>SweatShirt</a></li>
                    <li><a href='#'>Tees</a></li>
                    <li><a href='#'>Hoodies</a></li>
                    <li><a href='#'>Jeans</a></li>
                    <li><Link to='/pant'>Formal pant</Link></li>
                    <li><Link to='/Trousers'>Trousers</Link></li>
                    <li><Link to='/TShirt'>T-shirt</Link></li>
                    <li><Link to='/Shirt'>Formal shirt</Link></li>
                </ul>
            </nav>
            <div>
                <p className='heading'>Color</p>
                <div>
                   <p className='all' onClick={()=> dispatch(all('all'))}>All :</p> 
                    <div className='black' onClick={() => dispatch(black('black'))}>h</div>
                    <div className='grey' onClick={() => dispatch(gray('gray'))}>.</div>
                    <div className='green' onClick={() => dispatch(green('green'))}>.</div>
                    <div className='white' onClick={() => dispatch(white('white'))}>.</div>
                    <div className='blue' onClick={() => dispatch(blue('blue'))}>.</div>
                    <div className='red' onClick={() => dispatch(red('red'))}>.</div> 
                </div>
            </div>
        </div>
    )
}