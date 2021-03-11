import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import {Search} from "./Search"

function Settings() {
  return (
    <Page name="settings">
      <WelcomeMessage/>
      <CoinGrid topSection = {true}/>
      <ConfirmButton/>
      <Search/>
      <CoinGrid topSection = {false}/>
    </Page>
    
  );
}

export default Settings;
