export const AddItem = (data) =>{
    
    return {
        type : 'Add_item',
         palyload : {
             id : new Date().getTime().toString(),
             data : data
         }
    }
}
export const RemoveItem = () =>{
    return {
        type : 'Remove_item'
    }
}
export const ClearItem = () =>{
    return {
        type : "Clear_item"
    }
} 
export const all = (getvalue) => {
    return{
        type : 'all' ,
        payloads : {
            id : new Date().getTime().toString(),
            getvalue : getvalue
        }
    }
}
export const black = (getvalue) => {
    console.log('this is black color');
    console.log(getvalue);
    debugger;
    return {
        type : 'black',
        payloads : {
            id : new Date().getTime().toString(),
            getvalue : getvalue
        }
    }
}
export const gray = (getvalue) =>{
    return {
        type : 'gray',
        payloads : {
            id : new Date().getTime().toString(),
            getvalue : getvalue
        }
    }
}
export const green = (getvalue) =>{
    return{
        type : 'green',
        payloads : {
            id : new Date().getTime().toString(),
            getvalue : getvalue
        }
    }
}
export const  white= (getvalue) =>{
    debugger;
    return{
        type : 'white',
        payloads : {
            id : new Date().getTime().toString() ,
            getvalue : getvalue
        }
    }
}
export const blue = (getvalue) =>{
    return{
        type : 'blue',
        payloads : {
            id : new Date().getTime().toString(),
            getvalue : getvalue
        }
    }
}
export const red = (getvalue) => {
    debugger;
    return{
        type : 'red',
        payloads : {
            id : new Date().getTime().toString(),
            getvalue : getvalue
        }
    }
}