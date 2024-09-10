import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Box, IconButton, Grid2, Card } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { readExcelFile } from "../../utils/ExcelUtils";
import { setFormData, updateFormField } from "../../redux/form/FormSlice";
import ExportToExcel from "./ExportToExcel";

const FormEditor = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.data);

  const [editField, setEditField] = useState({
    schoolName: "",
    principalName: "",
    vicePrincipalName: "",
    standard: "",
    divison: "",
    sub1: "",
    lecTime1_1: "",
    lecTime1_2: "",
    lecTime1_3: "",
    sub2: "",
    lecTime2_1: "",
    lecTime2_2: "",
    lecTime2_3: "",
    sub3: "",
    lecTime3_1: "",
    lecTime3_2: "",
    lecTime3_3: "",
    sub4: "",
    lecTime4_1: "",
    lecTime4_2: "",
    lecTime4_3: "",
  });

  // to handle file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const data = await readExcelFile(file);
      dispatch(setFormData(data));
    }
  };

  // dispatching action on field change
  const handleFieldChange = (index, field, value) => {
    dispatch(updateFormField({ index, field, value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditField({ ...editField, [name]: value });
  };

  return (
    <Box>
      <IconButton component="label">
        <UploadFileIcon />
        <input
          accept=".xls,.xlsx"
          type="file"
          hidden
          onChange={handleFileUpload}
        />
      </IconButton>

      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: 1000,
          mx: "auto",
          p: 2,
          gap: 2,
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 12 }}>
            <TextField
              label="School Name"
              name="schoolName"
              value={editField?.schoolName || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              label="Principal Name"
              name="principalName"
              value={editField?.principalName || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>

          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              label="Vice Principal Name"
              name="vicePrincipalName"
              value={editField?.vicePrincipalName || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              label="Standard"
              name="standard"
              value={editField?.standard || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>

          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              label="Divison"
              name="divison"
              value={editField?.divison || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField value="Subject" fullWidth disabled />
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField value="Monday" fullWidth disabled />
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField value="Tuesday" fullWidth disabled />
          </Grid2>{" "}
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField value="Wednesday" fullWidth disabled />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="Subject1"
              name="sub1"
              value={editField?.sub1 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime1-1"
              name="lecTime1_1"
              value={editField?.lecTime1_1 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime1-2"
              name="lecTime1_2"
              value={editField?.lecTime1_2 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>{" "}
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime1-1"
              name="lecTime1_3"
              value={editField?.lecTime1_3 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="Subject2"
              name="sub2"
              value={editField?.sub2 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime2-1"
              name="lecTime2_1"
              value={editField?.lecTime2_1 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime2-2"
              name="lecTime2_2"
              value={editField?.lecTime2_2 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>{" "}
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime2-1"
              name="lecTime2_3"
              value={editField?.lecTime2_3 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="Subject3"
              name="sub3"
              value={editField?.sub3 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime3-1"
              name="lecTime3_1"
              value={editField?.lecTime3_1 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime3-2"
              name="lecTime3_2"
              value={editField?.lecTime3_2 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>{" "}
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime3-1"
              name="lecTime3_3"
              value={editField?.lecTime3_3 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="Subject4"
              name="sub4"
              value={editField?.sub4 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime4-1"
              name="lecTime4_1"
              value={editField?.lecTime4_1 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime4-2"
              name="lecTime4_2"
              value={editField?.lecTime4_2 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>{" "}
          <Grid2 size={{ sm: 3, xs: 12 }}>
            <TextField
              label="lecTime4-3"
              name="lecTime4_3"
              value={editField?.lecTime4_3 || ""}
              fullWidth
              onChange={handleChange}
            />
          </Grid2>
        </Grid2>
      </Card>

      <ExportToExcel formData={editField} />

      {formData.map((row, index) => (
        <Box key={index} sx={{ display: "flex", gap: 2, mb: 2 }}>
          {Object.keys(row).map((field) => (
            <TextField
              key={field}
              value={row[field]}
              onChange={(e) => handleFieldChange(index, field, e.target.value)}
              fullWidth
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default FormEditor;
