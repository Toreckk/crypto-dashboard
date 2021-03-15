import { historicalType } from "../Types/Types";


export const HighchartConfig = (historical: historicalType[]) => {
    return {
        yAxis:{
            title:{
                text: 'Price ($)'
            }
        },
        xAxis: {type: 'datetime'},
        series: historical
      };
}