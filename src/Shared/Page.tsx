import React, { ReactNode } from 'react';
import {AppContext} from "../App/AppProvider";

interface IProps {
    name: String,
    children: ReactNode
}


const Page = ({name, children}: IProps) => {
    return <AppContext.Consumer>
        {({page})=>{
            if(page !== name)  return null;
            return <div>{children}</div>
        }}
    </AppContext.Consumer>
}

export default Page;