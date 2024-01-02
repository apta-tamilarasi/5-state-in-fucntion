import data from '../../Product.json'


export const initialState={
    name:'tamil',
    arr:data.product

}

export const Reducer=(state,action)=>{

    if(action.type==='updatename'){
        console.log(action)
        return {...state, name:action.payload}
    }

    if(action.type==='updatearr'){
        console.log(action)
        return {...state, arr:action.payload}
    }
 

}