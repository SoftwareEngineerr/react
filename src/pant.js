import React , { useState } from 'react';
import { useSelector  } from 'react-redux';
import { val } from './centerobject.js';
import Product from './Product.js';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router , Switch} from 'react-router-dom';
import { Route } from 'react-router';
export const Pant = () => {
const getcolor = useSelector(colorstate => colorstate.getcolor);
const getpant = val;
console.log(getcolor[0].getvalue);
console.log(getcolor.data== undefined);
const [matchColor , setMatchColor ] = useState(getcolor[0].getvalue);
const [perpage , setPerpage] = useState(10);
// const [page , setPage ] = useState(
//     val => {return getpant.length/perpage}
//     );
//  const [printingpages , setPrintingpages] = useState(
//     () => { return ( <div>
//     { for(let x =0; x < 10; x++){
//              <div>hello world</div>
//         }}
//     </div>)} 
//);
    
   // console.log(page);
//debugger;

                //Pagination
    const [ currentPage , setCurrentpage ] = useState(1);
    const [ objectsPerPage ] = useState(12);

    const firstIndex = currentPage * objectsPerPage;
    const secondIndex = firstIndex - objectsPerPage;
    const currentData = val.slice(secondIndex , firstIndex);
    console.log(currentData);
            // Change Page
    const ChangePageNumber = PageNumber => setCurrentpage(PageNumber);

            // Pagination Number System
            const Data = val.map((item, ind)=>
                item.Categary == 'pant' ? 
                item
                :
                null
            )
    const totalData = Data.length;

                // Making Array for PageNumber
            let page = [];


            // Making loop of ceil 
            for(let i =1; i<= Math.ceil(totalData / objectsPerPage ); i++){
                page.push(i);
            }

            //Pagination End
            console.log(currentData);
                const page123 = 'Product/' + currentPage;
const takePrice= (price) =>{
    console.log(val);
}
    return (
        <div className='pant'>
            <h2>Result</h2>
            <p>Price and other details may vary based on product size and color.</p>
            {currentData.map((item, ind)=>
            item.Categary == 'pant' ? 
            item.Color == getcolor[0].getvalue ?
                <div key={ind}>
                     
                    <Product  eachProduct={item}  />
                    </div> :
                getcolor[0].getvalue == 'all' ?
                 <div key={ind}>
                     {console.log(item.Categary)}
                <Product  eachProduct={item}  />
                </div> : null 
            :null
            )}
             {/* making page Number */}
             <div className='pagination'>
            {page.map(number=>(
          <li key={number}>
              
          <a className='Number' onClick={() => ChangePageNumber(number)} >
           <Link to='/Product/{number}' >
            {number}</Link> 
          </a>
        </li>
            )
            )}</div>
        </div>
    );
};