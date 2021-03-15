import {HighchartConfig} from "./HighchartsConfig";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { AppContext } from "../App/AppProvider";
import "./PriceChart.scss";

export const PriceChart = () => {
    return (
        <AppContext.Consumer>
            {({currentFavorite})=> 
                <div className="tile">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={HighchartConfig()}
                    />
                </div>          
            }
            
        </AppContext.Consumer>
    );
}
