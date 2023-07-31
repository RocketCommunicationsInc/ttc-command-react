import Chart from "react-apexcharts";
import "./LineChart.css";

type PropTypes = {
  chartData: number[];
};

const LineChart = ({ chartData }: PropTypes) => {
  var options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      width: [2, 2],
    },
    xaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: [
      {
        show: false,
      },
    ],
    tooltip: {
      enabled: false,
    },
  };

  const series = [
    {
      data: chartData,
    },
  ];

  return (
    <div className="line-chart">
      <Chart type="line" options={options} series={series} height="100%" />
    </div>
  );
};

export default LineChart;
