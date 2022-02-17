/* 첫번째 react-native-chart-kit
import React from 'react';
import { View, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { MyBarChart, MyLineChart } from './components/MyCharts';

const App = () => {
    return (
        <View>
            <Text>Bezier Line Chart</Text>
            <LineChart
                data={{
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                    ],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                            ],
                        },
                    ],
                }}
                width={Dimensions.get('window').width} // from react-native
                height={220}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
            <MyLineChart />
            <MyBarChart />
        </View>
    );
};

export default App;
*/
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { ECharts } from 'react-native-echarts-wrapper';

export default class App extends Component {
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'bar',
            },
        ],
    };

    additionalCode = `
        chart.on('click', function(param) {
            var obj = {
            type: 'event_clicked',
            data: param.data
            };

            sendData(JSON.stringify(obj));
        });
    `;

    onData = param => {
        const obj = JSON.parse(param);

        if (obj.type === 'event_clicked') {
            alert(`탭한 그래프의 값 : ${obj.data}`);
        }
    };

    onRef = ref => {
        if (ref) {
            this.chart = ref;
        }
    };

    onButtonClearPressed = () => {
        this.chart.clear();
    };

    render() {
        return (
            <SafeAreaView style={styles.chartContainer}>
                <Button title="Taeng Kim" onPress={this.onButtonClearPressed} />

                <ECharts
                    ref={this.onRef}
                    option={this.option}
                    additionalCode={this.additionalCode}
                    onData={this.onData}
                    onLoadEnd={() => {
                        this.chart.setBackgroundColor('rgba(93, 169, 81, 0.1)');
                    }}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    chartContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
