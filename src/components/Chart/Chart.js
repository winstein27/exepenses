import styles from './Chart.module.css';

import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );
    const maxValue = Math.max(...dataPointsValues);

    return (
        <div className={styles.chart}>
            {props.dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        label={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxValue}
                    />
                );
            })}
        </div>
    );
};

export default Chart;
