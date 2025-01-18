import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface AverageYieldData {
  crop: string;
  averageYield: number;
}

const CropBarChart: React.FC<{ cropData: AverageYieldData[] }> = ({ cropData }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const options = {
        xAxis: {
          type: 'category',
          data: cropData.map(item => item.crop),
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: cropData.map(item => item.averageYield),
            type: 'bar',
          },
        ],
      };
      chart.setOption(options);
    }
  }, [cropData]);

  return <div ref={chartRef} style={{ width: '100%', height: 400 }}></div>;
};

export default CropBarChart;
