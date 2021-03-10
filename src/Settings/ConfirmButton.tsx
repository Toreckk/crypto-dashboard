import React, { useContext } from 'react';
import {AppContext} from '../App/AppProvider';
import "./ConfirmButton.scss";

function ConfirmButton() {
    const {setPage } = useContext(AppContext);
    const {setFirstVisit } = useContext(AppContext);
    return (
        <AppContext.Consumer>
            {()=>
                <div className="confirmBtn-wrapper">
                    <div className="confirmBtn" onClick={()=>{
                        setPage("dashboard");
                        setFirstVisit(false);
                        localStorage.setItem('cryptoDash', JSON.stringify({
                            test: 'hello'
                        }))
                    }}>
                        Confirm Favorites
                    </div>
                </div>   
            }
        </AppContext.Consumer>
            );
}

export default ConfirmButton;