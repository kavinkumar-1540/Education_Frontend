import React, { useState } from "react";
import axios from "../../Axios/axios";
import CourseList from "./CourseList";
import { TextField, Button, Box, Paper } from "@mui/material";

const CourseForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [showCourseList, setShowCourseList] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/courses", { name, description, duration });
    setName("");
    setDescription("");
    setDuration("");
  };

  const handleBack=()=>{
    setShowCourseList(false)
  }

  return (
    <>
      {showCourseList ? (
        <>
          <CourseList showList={handleBack} />
        </>
      ) : (
        <Paper
          elevation={3}
          style={{
            width: "300px",
            margin: "0 auto",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <Box component="form" sx={{ mb: 3 }}>
            <h2>Add Course</h2>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              margin="normal"
              rows={2}
              multiline
            />
            <TextField
              label="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              fullWidth
              margin="normal"
            />
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Add Course
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setShowCourseList(!showCourseList)}
              >
                {showCourseList ? "Hide Course List" : "View Course List"}
              </Button>
            </div>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default CourseForm;
