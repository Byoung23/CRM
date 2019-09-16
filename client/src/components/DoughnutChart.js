import React from 'react';
import { Doughnut } from "react-chartjs-2";
import 'chartjs-plugin-lineheight-annotation';

function DoughnutChart(props) {
    // console.log(props)
    if (props.doughnutData !== undefined) {
        return (
            <Doughnut
                options={{
                    responsive: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    legend: {
                        labels: {
                            fontColor: "black",
                            defaultFontFamily: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'"
                        }
                    },
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem, data) {
                                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += Math.round(tooltipItem.yLabel * 100) / 100;
                                return label;
                            }
                        }
                    }
                }}
                data={props.doughnutData}
            />
        )
    } else {
        return (
            <div />
        )
    }
}
export default DoughnutChart;