const initialData = {
    list : [null]
};
// //shift()
// var array = ['samsi','wassi'];
// array.shift();
// var boj = {name:'sami',Age:'16'};
// boj.fname = 'abubdul';
const AddItemReducer = (state=initialData, action)=>{
        switch(action.type){
            case  'Add_item':
                debugger;
                console.log(state);
            const { id , data } = action.palyload;

            return{
                ...state,
                data : [
                        ...state.list,
                         {
                             id: id,
                             data : data
                         }
                 ]
            
        }
            default : return state;
            console.log(state.data);
        }
}
export default AddItemReducer;