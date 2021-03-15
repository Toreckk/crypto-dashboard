import React, { useContext } from 'react';
import {AppContext} from '../App/AppProvider';
import "./ConfirmButton.scss";

function ConfirmButton() {
    return (
        <AppContext.Consumer>
            {({favorites, setFavorites, setFirstVisit, setPage, setCurrentFavorite})=>
                <div className="confirmBtn-wrapper">
                    <div className="confirmBtn" onClick={()=>{
                        setPage("dashboard");
                        setFirstVisit(false);
                        setFavorites(favorites);
                        const currentFavorite = favorites[0];
                        setCurrentFavorite(currentFavorite);

                        localStorage.setItem('cryptoDash', JSON.stringify({
                            favorites, currentFavorite
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