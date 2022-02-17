import React from 'react';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
        },
    ],
};

export const MyLineChart = () => {
    return (
        <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
        />
    );
};

export const MyBarChart = () => {
    return (
        <BarChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
        />
    );
};

//export default MyLineChart;
