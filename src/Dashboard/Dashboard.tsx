import React from 'react';
import Page from "../Shared/Page";
import { PriceGrid } from './PriceGrid';
import {CoinSpotlight} from "./CoinSpotlight";
import "./Dashboard.scss";

export function DashBoard() {

  return (
    <Page name="dashboard">
      <PriceGrid/>
      <div className="chart-grid">
        <CoinSpotlight/>
        <div>Chart</div>
      </div>
      
    </Page>
    
  );
};