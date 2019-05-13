export default function product(state={products:[]},action){
 

    switch (action.type){
        
            case 'PRODUCT_FETCH':
            return {...state,products:action.payload};


            case 'Add_Product':
            return {...state,products:action.payload};

            case 'Update_Product':
            
            return {...state,products:action.payload};
            
            case 'Delete_Product':
            
            return {...state,products:action.payload};

           

        default :
        return state;
        

    }
}