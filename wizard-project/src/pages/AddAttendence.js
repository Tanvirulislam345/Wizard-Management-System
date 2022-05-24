import React, { useState } from "react";
import AddAttendenceForm from "../components/attendence/AddAttendenceForm";
import SubNav2 from "../components/subNav/SubNav2";
import { ButtonMake, LayoutContiner } from "../styles/MetarialStyles";
import * as XLSX from "xlsx";
import AttendenceUploadList from "../components/attendence/AttendenceUploadList";
import { Box, Stack } from "@mui/material";
import axios from "axios";

const AddAttendence = () => {
  // on change states
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  // submit
  const [excelData, setExcelData] = useState(null);

  // handle File
  const fileType = ["application/vnd.ms-excel"];

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      // console.log(selectedFile.type);
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types xls");
        setExcelFile(null);
      }
    } else {
      console.log("plz select your file");
    }
  };

  const handleSubmit = () => {
    // const date = new Date();
    // console.log(new Intl.DateTimeFormat(["ban"]).format(date));

    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
    } else {
      setExcelData(null);
    }
  };

  const handleSendData = () => {
    const value = excelData?.map((value) => {
      if (value.InTime === 0) {
        return { ...value, Status: "absent" };
      } else if (value.InTime > 10.3) {
        return { ...value, Status: "late" };
      } else {
        return { ...value, Status: "present" };
      }
    });

    if (value !== undefined) {
      axios.post("http://localhost:9000/addattendence", value).then((res) => {
        if (res.status === 200) {
          //   navigate("/client");
        }
      });
    }
  };

  return (
    <LayoutContiner>
      <SubNav2 project="Add Attendence" />
      <Box style={{ maxWidth: "600px", width: "100%", margin: "auto" }}>
        <AddAttendenceForm
          handleFile={handleFile}
          handleSubmit={handleSubmit}
          excelFileError={excelFileError}
        />
        {excelData !== null && (
          <>
            <AttendenceUploadList rows={excelData} />
            <Stack spacing={3} direction="row">
              <ButtonMake
                size="medium"
                onClick={handleSendData}
                sx={{ ml: "auto" }}
              >
                Upload data
              </ButtonMake>
            </Stack>
          </>
        )}
      </Box>
    </LayoutContiner>
  );
};

export default AddAttendence;
