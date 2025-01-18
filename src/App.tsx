import React, { useEffect, useState } from "react";
import CropTable from "./Components/CropTable";
import CropBarChart from "./Components/CropBarChart";
import { Container } from "@mantine/core";
import { processAgricultureData } from "./utils/processAgricultureData";
import allDataset from "../Manufac_India_Agro_Dataset.json";

type Props = {};

const App: React.FC = () => {
  const [data, setData] = useState<{ yearlyData: any[]; averageYields: any[] }>(
    { yearlyData: [], averageYields: [] }
  );

  useEffect(() => {
    // Fetch and process the data
    const rawData = allDataset;
    const processedData = processAgricultureData(rawData);
    setData(processedData);
  }, []);

  return (
    <Container>
      <h1>Indian Agriculture Data Visualization</h1>
      <CropTable data={data.yearlyData} />
      <CropBarChart cropData={data.averageYields} />
    </Container>
  );
};
export default App;
