import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface FinancialData {
  month: string;
  expenses: number;
  income: number;
}

interface ChartProps {
  data: FinancialData[];
}

const ChartComponent: React.FC<ChartProps> = ({ data }) => {
    const months = data.map((item) => item.month.slice(0, 3));  
    const expenses = data.map((item) => item.expenses);
    const income = data.map((item) => item.income);

  const chartData = {
    labels: months,
    datasets: [
        {
            label: "Income",
            backgroundColor: "#535dea",
            data: income,
        },
        {
            label: "Expenses",
            data: expenses,
            backgroundColor: "#c6c9fc",
        },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false // Menghilangkan legenda di atas chart
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return "$" + value;
          }
        },
        grid: {
          display: false // Menghilangkan kotak-kotak pada background chart
        }
      }
    }
  };
  return <Bar data={chartData} options={chartOptions} />;
};

export default ChartComponent;