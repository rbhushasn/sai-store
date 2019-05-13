export default function(state=null,action){

    const{payload} = action;
   
    switch(action.type){
   
    case 'BOOK_Details':{
      return payload
    }
    
    case 'UPDATE_BOOK':{
      return null;
   }
        default:
        return state;
   }
   
   }