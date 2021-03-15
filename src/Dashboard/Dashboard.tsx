import React from 'react';
import Page from "../Shared/Page";
import { PriceGrid } from './PriceGrid';
import {CoinSpotlight} from "./CoinSpotlight";
import { PriceChart } from './PriceChart';
import "./Dashboard.scss";


export function DashBoard() {

  return (
    <Page name="dashboard">
      <PriceGrid/>
      <div className="chart-grid">
        <CoinSpotlight/>
        <PriceChart/>
      </div>
      
    </Page>
    
  );
};