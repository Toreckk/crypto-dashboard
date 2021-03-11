import React, { useContext } from 'react';
import {AppContext} from '../App/AppProvider';
import "./ConfirmButton.scss";

function ConfirmButton() {
    const {setPage } = useContext(AppContext);
    const {setFirstVisit } = useContext(AppContext);
    return (
        <AppContext.Consumer>
            {({favorites})=>
                <div className="confirmBtn-wrapper">
                    <div className="confirmBtn" onClick={()=>{
                        setPage("settings");
                        setFirstVisit(false);
                        localStorage.setItem('cryptoDash', JSON.stringify({
                            favorites
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