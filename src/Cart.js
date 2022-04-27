import React from 'react';
import {  useDispatch , useSelector } from 'react-redux';
//import AddItemReducer  from './Reducer';
export const Cart = () =>{
    const myState = useSelector(state => state.AddItemReducer);
//    const color = useSelector(colorstate => colorstate);
    console.log(myState.data[1].data.image , 'hell owrld');
    return(
        <div className='Cart'>
                hello worlds
                 {/* {
                     
                    myState == myState ?
                        alert(myState.data[1].data.price)
                    :
                 <div>there is no data</div>
                
                } */}
        </div>
    )
}