// Define types for clarity
interface RawData {
    "Country": string;
    "Year": string;
    "Crop Name": string;
    "Crop Production (UOM:t(Tonnes))": string | number;
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number;
    "Area Under Cultivation (UOM:Ha(Hectares))": string | number;
}

interface CroptData {
    year: number;
    cropMax: string;
    cropMin: string;
}

interface AverageYieldData {
    crop: string;
    averageYield: number;
}

// Preprocess function
const processAgricultureData = (rawData: RawData[]) => {
    const yearlyData: CroptData[] = [];
    const cropTotals: { [key: string]: number[] } = {}; // Store total yields for each crop

    rawData.forEach(row => {
        const year = parseInt(row.Year.split(",")[1].trim());  // Extract year from "Financial Year (Apr - Mar), 1950"
        const crop = row["Crop Name"];
        const production = row["Crop Production (UOM:t(Tonnes))"] ? parseFloat(row["Crop Production (UOM:t(Tonnes))"] as string) : 0;
        const cropYield = row["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] ? parseFloat(row["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] as string) : 0;


        // Collect data for max/min crop production per year
        if (!cropTotals[crop]) cropTotals[crop] = [];
        cropTotals[crop].push(cropYield);

        const maxMinCrop = yearlyData.find(data => data.year === year);
        if (!maxMinCrop) {
            yearlyData.push({ year, cropMax: crop, cropMin: crop });
        } else {
            if (production > cropTotals[maxMinCrop.cropMax].reduce((a, b) => a + b, 0)) {
                maxMinCrop.cropMax = crop;
            }

            if (production < cropTotals[maxMinCrop.cropMin].reduce((a, b) => a + b, 0)) {
                maxMinCrop.cropMin = crop;
            }
        }
    });


    // Compute average yield per crop for bar chart
    const averageYields: AverageYieldData[] = Object.keys(cropTotals).map(crop => ({
        crop, averageYield: cropTotals[crop].reduce((acc, val) => acc + val, 0) / cropTotals[crop].length
    }));

    return { yearlyData, averageYields };
}

export { processAgricultureData }