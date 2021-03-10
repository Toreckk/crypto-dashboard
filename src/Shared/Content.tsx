import React, { ReactNode } from 'react';
import {AppContext} from "../App/AppProvider";

interface IProps {
    children: ReactNode
}

function Content({children}:IProps){
    return (
        <AppContext.Consumer>
            {({coinList})=>{
                if(!coinList){
                    return <div>Loading coins</div>
                }
                return <div>{children}</div>
            }}
        </AppContext.Consumer>
    );
}

export default Content;