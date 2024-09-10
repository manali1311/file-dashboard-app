import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Sample data object based on the form fields
const ExportToExcel = ({ formData }) => {
  const [fileData, setFileData] = useState([]);

  const handleExport = () => {
    const workbook = XLSX.utils.book_new();

    const worksheetData = [
      ["School Name", formData.schoolName],
      [
        "Principal Name",
        formData.principalName,
        "Vice Principal Name",
        formData.vicePrincipalName,
      ],
      ["Standard", formData.standard],
      ["Division", formData.divison],

      // Headers
      ["Subject", "Monday", "Tuesday", "Wednesday"],
      [
        formData.sub1,
        formData.lecTime1_1,
        formData.lecTime1_2,
        formData.lecTime1_3,
      ],
      [
        formData.sub2,
        formData.lecTime2_1,
        formData.lecTime2_2,
        formData.lecTime2_3,
      ],
      [
        formData.sub3,
        formData.lecTime3_1,
        formData.lecTime3_2,
        formData.lecTime3_3,
      ],
      [
        formData.sub4,
        formData.lecTime4_1,
        formData.lecTime4_2,
        formData.lecTime4_3,
      ],
    ];

    // Create worksheet
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    //Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    //Save excel file
    XLSX.writeFile(workbook, "SchoolData.xlsx", {
      bookType: "xlsx",
      type: "binary",
    });

    setFileData(worksheetData);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    console.log(fileData);

    // Add excel table to PDF
    doc.autoTable({
      head: [Object.keys(fileData)],
      body: fileData.map((row) => Object.values(row)),
    });

    doc.save("SchoolData.pdf");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}>
      <Button variant="contained" onClick={handleExport}>
        Save to Excel
      </Button>

      <Button
        variant="contained"
        onClick={generatePDF}
        disabled={!fileData.length}
      >
        Export to PDF
      </Button>
    </Box>
  );
};

export default ExportToExcel;
