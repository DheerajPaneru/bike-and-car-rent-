import React from 'react'

 export const Reducer = (state,action) => {
  
    
    switch(action.type){

        case "stime":
            return{
                ...state,
                stime:action.value
            };
            case "detail":
                return{
                    ...state,
                    userd:action.value
                };
            
            case "etime":
                return{
                    ...state,
                    etime:action.value
                };
                case "din":
                return{
                    ...state,
                    din:action.value
                };
                case "hour":
                return{
                    ...state,
                    hour:action.value
                };

                case "address":
                    return{
                        ...state,
                        address:action.value
                    };
                    case "edate":
                        return{
                            ...state,
                            edate:action.value
                        };
        case "lth":
            return {
                ...state,
                sort:action.payload
            };
            case "htl":
                return {
                    ...state,
                    sort:action.payload
                };
                case "size":
                    return {
                        ...state,
                        brand:action.check?[...state.brand,action.value]:state.brand.length>0?state.brand.filter((c)=>c!=action.value):[]
                    };
                    case "engine":
                
                        return {
                            
                            ...state,
                            engine:action.check?[...state.engine,action.value]:state.engine.length>0?state.engine.filter((c)=>c!=action.value):[]
                        };
                        case "bandc":
            
                            return {
                                
                                ...state,
                                on:action.check?[...state.on,action.value]:state.on.length>0?state.on.filter((c)=>c!=action.value):[]
                            };
                           case "seat":
                            return{
                                ...state,
                            seat:action.check?[...state.seat,parseInt(action.value)]:state.seat.length>0?state.seat.filter((c)=>c!=action.value):[]
                            }
            default:
                return state
        }
    }
