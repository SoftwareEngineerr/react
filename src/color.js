const colorintialvalue = [{id:'123', getvalue:'all'}];
const color = (colorstate=colorintialvalue, action)=>{
    switch(action.type){
        case  'black':
//         const { id , getvalue } = action.palyload;
          if(colorstate.length>0){
                return [ action.payloads];
            }
            // else{
            //   return colorstate[0]=[action.payloads]
            // }
            case 'gray' :
                if(colorstate.length>0){
                    return[ action.payloads ];
                }
            case 'all' :
                if(colorstate.length>0){
                    return [action.payloads];
                }
            case 'green' :
                if(colorstate.length>0){
                    return [action.payloads ];
                }
            case 'white' :
                if(colorstate.length>0){
                    return[ action.payloads ];
                } 
            case 'blue' :
                if(colorstate.length>0){
                    return[ action.payloads ];
                }
            case 'red' :
                if(colorstate.length>0){
                    return [ action.payloads ];
                }
         default : return colorstate;
    }
}
export default color;