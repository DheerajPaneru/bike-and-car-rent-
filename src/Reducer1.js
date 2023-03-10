const a={
    cart:[],
    total:""
}
export const cartreducer=(state=a,action)=>{
    switch(action.type){

        case "ADD":
        const single=state.cart.findIndex((c)=>c.id==action.value.id)
        if(single>=0){
            state.cart[single].qnty=state.cart[single].qnty+1
return{
    ...state,cart:[...state.cart]
}
        }

        else{
            const admor={...action.value,qnty:1}
            return{
                ...state,cart:[...state.cart,admor]
            }
        }
            case "del":
                if(action.value.qnty>=2)
                {
                action.value.qnty=action.value.qnty-1
                return{
                    ...state,cart:[...state.cart]
                }
                }
                else{
                console.log(action.value.id,"huipm")
const data=state.cart.filter((c)=>c.id!==action.value.id)
                
                return{
                    ...state,cart:data
                }
            }
            case "del1":
      const data=state.cart.filter((c)=>c.id!==action.value.id)
                
                return{
                    ...state,cart:data
                }
        
           
            
            default :
           return state
    }
}