import React, { useContext } from 'react';
import {AppContext} from '../App/AppProvider';
import "./ConfirmButton.scss";

function ConfirmButton() {
    return (
        <AppContext.Consumer>
            {({favorites, setFavorites, setFirstVisit, setPage})=>
                <div className="confirmBtn-wrapper">
                    <div className="confirmBtn" onClick={()=>{
                        setPage("dashboard");
                        setFirstVisit(false);
                        localStorage.setItem('cryptoDash', JSON.stringify({
                            favorites
                        }))
                        setFavorites(favorites);
                    }}>
                        Confirm Favorites
                    </div>
                </div>   
            }
        </AppContext.Consumer>
    );
}

export default ConfirmButton;