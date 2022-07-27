import {btcnActions} from "./btcn";



export const fetchBtcData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://api.coindesk.com/v1/bpi/currentprice.json'
            );

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            dispatch(btcnActions.currencyFetching());
            const btcData = await fetchData();
            dispatch(
                btcnActions.currencyFetchingSuccess({
                    items: Object.values(btcData.bpi),
                    time: btcData.time.updated,
                    name: btcData.chartName,
                })
            );
        } catch (error) {
            dispatch(btcnActions.currencyFetchingError(error.message))
            console.log(error.message)
        }
    };
};
