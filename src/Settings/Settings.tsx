import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";

function Settings() {
  return (
    <Page name="settings">
      <WelcomeMessage/>
      <CoinGrid topSection = {true}/>
      <ConfirmButton/>
      <CoinGrid topSection = {false}/>
    </Page>
    
  );
}

export default Settings;
