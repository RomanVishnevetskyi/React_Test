import React from 'react';
import './Btn.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import 'antd/dist/antd.css';
import {Card, Spin} from "antd";
import classes from "./Btn.module.css";
import {fetchBtcData} from "../../store/btc-actions";

const Btn = () => {
    const {items, name, isLoading, error, time} = useSelector(state => state.btc)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBtcData())
        const timerID = setInterval(() => {
            dispatch(fetchBtcData())
        }, 10000);

        return () => {
            clearInterval(timerID)
        }

    }, [])

    if (isLoading) {
        return <div className={classes.spiner}>
            <Spin size={"large"}/>
        </div>
    }


    return (
        <div className={classes.btn}>
            <h3>{name}</h3>
            {error && <h2>{error}</h2>}
            <div className={classes.card}>
                {items.map(item => {
                    return <Card key={item.code} headStyle={{background: 'rgba(0,127,242,1)'}}
                                 title={item.description}
                                 style={{width: "33.33%"}}
                                 bodyStyle={{background: "rgba(255,243,10,0.9867297260701156)"}}>
                        <p>Bitcoin/{item.code}: <span>{item.rate_float.toFixed(3)}</span></p>
                        <p>Time updated: <span>{time}</span></p>
                    </Card>
                })}
            </div>

        </div>
    );
};

export default Btn;
