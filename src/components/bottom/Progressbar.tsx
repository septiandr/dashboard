import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Progressbar: React.FC = () => {
    const chartRef = useRef<any>(null);
    const total = 100;
    const done = 60;
    const inProgress = 10;
    const todo = 20;
    const sisa = total - done - inProgress - todo

    const findCompletionPercentage = (done: number, total: number): number => {
        if (total === 0) return 0;
        const percentage = (done / total) * 100;
        return Math.round(percentage) + "%";
    };

    const completionPercentage = findCompletionPercentage(done + inProgress + todo, total);

    useEffect(() => {
        if (chartRef.current) {
            const chart = Highcharts.chart(chartRef.current, {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: completionPercentage,
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 0,
                    style: {
                        color: '#333333',
                        fontSize: '16px'
                    }
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -30,
                            style: {
                                fontWeight: 'bold',
                                color: 'white',
                                textOutline: 'none'
                            }
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '50%'],
                        size: '110%'
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Progress',
                    innerSize: '50%',
                    data: [
                        { name: 'Done', y: done, color: '#007bff' },
                        { name: 'In Progress', y: inProgress, color: '#ffc107' },
                        { name: 'To do', y: todo, color: '#dc3545' },
                        { name: '', y: sisa, color: '#f1f1f1' },
                    ]
                }]
            });

            return () => {
                chart.destroy();
            };
        }
    }, [done, inProgress, todo, total, completionPercentage]);

    return <div ref={chartRef} style={{ height: '400px' }}></div>;
};

export default Progressbar;
