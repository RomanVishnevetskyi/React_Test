import {configureStore} from "@reduxjs/toolkit";
import BtcnReducer from "./btcn";


export const store=configureStore({
    reducer :{
        btc:BtcnReducer,
    }
})