import {createSlice} from "@reduxjs/toolkit";


const initialBtcnState = {
    name: '',
    items: [],
    time: '',
    isLoading: false,
    error: '',
}

const BtcnSlice = createSlice({
    name: 'btcn',
    initialState: initialBtcnState,
    reducers: {
        currencyFetching: (state) => {
            state.isLoading = true;
        },

        currencyFetchingSuccess: (state, action) => {
            state.isLoading = false;
            state.time = action.payload.time;
            state.items = action.payload.items;
            state.name = action.payload.name;

        },

        currencyFetchingError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        }

    },

})

export const btcnActions = BtcnSlice.actions;

export default BtcnSlice.reducer;