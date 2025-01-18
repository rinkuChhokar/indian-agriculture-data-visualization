import React from 'react';
import { Table } from '@mantine/core';

interface CropData {
  year: number;
  cropMax: string;
  cropMin: string;
}

const CropTable: React.FC<{ data: CropData[] }> = ({ data }) => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Year</Table.Th>
          <Table.Th>Crop with Maximum Production</Table.Th>
          <Table.Th>Crop with Minimum Production</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {data.map((row) => (
          <Table.Tr key={row.year}>
            <Table.Td>{row.year}</Table.Td>
            <Table.Td>{row.cropMax}</Table.Td>
            <Table.Td>{row.cropMin}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default CropTable;
