# Indian Agriculture Data Visualization

This project visualizes Indian agriculture data using a table and a bar chart. It processes raw data to extract meaningful insights, such as the crops with the maximum and minimum production each year and the average yield of crops between 1950 and 2020.

## Features

1. **Yearly Crop Production Table**:

   - Displays the crop with the maximum and minimum production for each year.
   - Built using Mantine's Table component.

2. **Average Yield Bar Chart**:

   - Plots the average yield of crops over the years (1950–2020).
   - Implemented using Apache ECharts.

3. **Data Processing**:
   - Handles missing values by treating them as `0`.
   - Processes raw JSON data to compute insights efficiently.

---

## Tech Stack

- **Frontend**: React, TypeScript
- **Visualization**: Apache ECharts
- **Component Library**: Mantine
- **Build Tool**: Vite

---

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rinkuChhokar/indian-agriculture-data-visualization.git
   cd indian-agriculture-data-visualization

   yarn install
   ```

2. **Install dependencies**:

```bash
yarn install
```

2. **Run the development server**:

```bash
yarn dev
```
