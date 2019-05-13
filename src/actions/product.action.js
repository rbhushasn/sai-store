import {ajaxHelper} from '../helper/index';

export {
    fetchAllProducts,
    addNewProduct,
    updateProducts,
    deleteProduct

}
 
function fetchAllProducts(){
    console.log("fetch");
    return (dispatch) =>{
        let getData= ajaxHelper({type: "GET",contentType: "application/json", dataType:"json", url:"Books"})
        getData.then((res)=>{
          if( res.d.length>0){
           var  data = res.d;
            console.log("fetch data : ",data);
                dispatch(success(data))
            }
        }).catch((err)=>{
          console.log("error : ",err)
        })
    } 

    function success(data){
        return{
            type : 'PRODUCT_FETCH',
            payload : data
        }
    }
}
function addNewProduct(product) {
    return (dispatch) => {
        let data={
            title:product.title,
            description:product.description, 
            author:product.author
        }
       let getData= ajaxHelper({type: "POST",contentType: "application/json", dataType:"json",data:data, url:"Books"})
        getData.then((res)=>{
          console.log("res : ",res)
          if(res.d.lenth>0){
            return {
                type: 'ADD_PRODUCT',
                payload: res.d
            };
          }
        }).catch((err)=>{
          console.log("error : ",err)
        })
    }
}
function updateProducts(product) {
    return (dispatch) => {
        let data={
            book_id:product.id,
            title:product.title,
            description:product.description, 
            author:product.author
        }
       let getData= ajaxHelper({type: "PUT",contentType: "application/json", dataType:"json",data:data, url:"Books"})
        getData.then((res)=>{
          console.log("res : ",res)
          if(res.d.lenth>0){
            return {
                type: 'Update_PRODUCT',
                payload: res.d
            };
          }
        }).catch((err)=>{
          console.log("error : ",err)
        })
    }
}
function deleteProduct(product) {
    return (dispatch) => {
        let data={
            book_id:product.book_id
        }
       let postData= ajaxHelper({type: "Delete",contentType: "application/json", dataType:"json",data:data, url:"Books"})
        postData.then((res)=>{
          console.log("res : ",res)
          if(res.d.lenth>0){
            return {
                type: 'Delete_PRODUCT',
                payload: res.d
            };
          }
        }).catch((err)=>{
          console.log("error : ",err)
        })
    }
}

