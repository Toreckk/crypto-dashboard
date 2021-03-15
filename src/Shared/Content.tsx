import React, { ReactNode } from 'react';
import {AppContext} from "../App/AppProvider";

interface IProps {
    children: ReactNode
}

function Content({children}:IProps){
    return (
        <AppContext.Consumer>
            {({coinList, prices, firstVisit})=>{
                if(!coinList){
                    return <div>Loading coins</div>
                }
                if(!firstVisit && prices.length<1){
                    return <div>Loading prices</div>
                }
                return <div>{children}</div>
            }}
        </AppContext.Consumer>
    );
}

export default Content;