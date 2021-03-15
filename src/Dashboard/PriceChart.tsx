import {HighchartConfig} from "./HighchartsConfig";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import { AppContext } from "../App/AppProvider";
import HighcartsTheme from "./HighchartsTheme";
import "./PriceChart.scss";

//@ts-ignore
Highcharts.setOptions(HighcartsTheme);

export const PriceChart = () => {
    return (
        <AppContext.Consumer>
            {({historical, setChartSelect})=> 

                <div className="tile">
                    <select className = "chart-selector" defaultValue={"months"} onChange={ e => setChartSelect(e.target.value)}>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                    </select>
                    {
                        historical ? 
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={HighchartConfig(historical)}/> 
                                : <div> Loading Historical data</div>
                            
                    
                    }
                    
                </div>          
            }
            
        </AppContext.Consumer>
    );
}
