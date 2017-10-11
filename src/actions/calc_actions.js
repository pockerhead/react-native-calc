export const SUM = (x,y)=>{
    return{
        type:'SUM',
        payload:{
            sum1:parseFloat(x),
            sum2:parseFloat(y)
        }
    }
}

export const DIFF = (x,y)=>{
    return{
        type:'DIFF',
        payload:{
            sum1:parseFloat(x),
            sum2:parseFloat(y)
        }
    }
}
export const INC = (x,y)=>{
    return{
        type:'INC',
        payload:{
            sum1:parseFloat(x),
            sum2:parseFloat(y)
        }
    }
}
export const DIV = (x,y)=>{
    return{
        type:'DIV',
        payload:{
            sum1:parseFloat(x),
            sum2:parseFloat(y)
        }
    }
}

export const INPUT = (input)=>{
    return{
        type:'INPUT',
        payload:{
            input:input
        }
    }
}
export const CLEAR = ()=>{
    return{
        type:'CLEAR',
        payload:{
            input:''
        }
    }
}
export const REPL_OP = (operator)=>{
    return{
        type:'REPL_OP',
        payload:{
            operator:operator
        }
    }

}
export const CNG_ZNK = (num)=>{
    return{
        type:'CNG_ZNK',
        payload:{
            num:num
        }
    }

}

