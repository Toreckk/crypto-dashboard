import React from 'react';
import {AppContext} from "../App/AppProvider";
import "./CoinGrid.scss";

function CoinGrid (){
    return (
        <AppContext.Consumer>
            {({coinList})=>
                <div className="coinList-wrapper">
                        {Object.keys(coinList).map((coinKey, id)=>
                            <div key={id}>{coinKey}</div>)}
                </div>
            }
        </AppContext.Consumer>
    );
}

export default CoinGrid;