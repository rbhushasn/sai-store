export default function(state=null,action){

  const{payload} = action;
 
  switch(action.type){
 
  case 'EDIT_BOOK':{
    return payload
  }
  
  case 'UPDATE_BOOK':{
    return null;
 }
      default:
      return state;
 }
 
 }