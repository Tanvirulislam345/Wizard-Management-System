import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Modal from "@mui/material/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Grid, Stack } from "@mui/material";
import {
  BigButtonMake,
  ButtonMake,
  TextFieldMake,
  TextFieldMake2,
} from "../../styles/MetarialStyles";
import { useAuth } from "../../Context/ContextProvieder";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1A202E",
  borderRadius: "10px",
  //   boxShadow: 90,
  p: 4,
};

export default function ProjectChat({ Role, DoneWork, ProjectId }) {
  const [status, setStatus] = React.useState(true);
  const [values, setValues] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = React.useState({ File: "nothig" });

  const handleSubmit = () => {
    const newData = {
      ...data,
      Role,
      DoneWork,
      ProjectId,
    };
    console.log(newData);

    const formData = new FormData();
    for (const key in newData) {
      formData.append(key, newData[key]);
    }

    if (data !== null) {
      if (data.File == "nothig") {
        axios
          .post(
            "http://localhost:9000/addcomments",
            newData
          )
          .then((res) => {
            if (res.status === 200) {
              setStatus(!status);
            }
          });
      } else {
        axios
          .post(
            "http://localhost:9000/addcommentsFile",
            formData
          )
          .then((res) => {
            if (res.status === 200) {
              setStatus(!status);
            }
          });
      }
    } else {
      alert("please write somethings");
    }
  };

  React.useEffect(() => {
    axios
      .get(
        `http://localhost:9000/comments/${ProjectId}`
      )
      .then((res) => {
        const data = res.data;
        setValues(data.filter((value) => value.DoneWork === DoneWork));
      });
  }, [status]);

  return (
    <div>
      <Button onClick={handleOpen}>
        <VisibilityIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={12}>
              <Box style={{ maxHeight: "370px", overflow: "auto" }}>
                {values?.map((value, index) => (
                  <div key={index}>
                    {value.Comment && (
                      <p
                        style={{
                          padding: "10px",
                          borderRadius: "10px",
                          backgroundColor:
                            value.Role !== "admin" ? "#8F939C" : "#4B4F5A",
                          color: "white",
                        }}
                      >
                        {value.Comment}
                      </p>
                    )}

                    {value?.File !== "nothig" && (
                      <BigButtonMake startIcon={<CloudDownloadIcon />}>
                        <a
                          href={value.File}
                          style={{ textDecoration: "none", color: "Black" }}
                        >
                          Download Files
                        </a>
                      </BigButtonMake>
                    )}
                  </div>
                ))}
              </Box>
            </Grid>
            {Role !== "client" && (
              <Grid item xs={12}>
                <TextFieldMake
                  fullWidth
                  type="file"
                  focused
                  variant="outlined"
                  label="Files"
                  name="File"
                  onChange={(event) =>
                    setData({
                      ...data,
                      [event.target.name]: event.target.files[0],
                    })
                  }
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextFieldMake
                fullWidth
                variant="outlined"
                multiline
                rows="3"
                name="Comment"
                placeholder="Enter your comments"
                onChange={(event) =>
                  setData({
                    ...data,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={3} direction="row" sx={{ mt: 3 }}>
                <ButtonMake
                  size="medium"
                  type="submit"
                  onClick={handleSubmit}
                  onClose={handleClose}
                >
                  Post
                </ButtonMake>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
