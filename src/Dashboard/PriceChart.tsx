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
