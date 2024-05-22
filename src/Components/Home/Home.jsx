import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Grid,
} from "@mui/material";
import BackgroundImage from "../Assets/homebanner.jpg";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../Navbar/Navbar";

const Home = () => {
 

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 899);


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 899);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          background: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Navbar/>
        <Container>
          <Grid container>
            <Grid item xs={12} style={{ display: "flex", gap: "24px" }}>
              <Grid item xs={12} sm={7} md={7} mt={isMobileView ? 0 : 30}>
                <Grid style={{ position: "relative" }}>
                  <TypeAnimation
                    sequence={[
                      "Welcome to Your Learning Journey.",
                      100,
                      "Explore a Variety of Courses.",
                      100,
                      "Join Live Classes & Webinars.",
                      100,
                      "Track Your Progress & Achievements.",
                      100,
                      "Get Certified in Your Field.",
                      100,
                      "Connect with Peers & Instructors.",
                      100,
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{
                      fontSize: isMobileView ? "30px" : "40px",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                    repeat={Infinity}
                  />
                  <Typography
                    id="text-40-700-47-Zen"
                    variant="h6"
                    style={{
                      color: "white",
                      textAlign: "left",
                    }}
                  ></Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* <Paper
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translate(-50%, 50%)",
                width: "80%",
                maxWidth: "900px",
                borderRadius: "24px",
                background: "#262626E5",
                boxShadow: "0px 7px 22.4px 0px #00000021",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingBottom: "2rem",
                paddingTop: "10px",
              }}
            >
              <form style={{ width: "100%" }}>
                <Typography
                  id="text-13-400-23-Zen"
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  TRIP DETAILS
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        placeholder="Your Name"
                        variant="outlined"
                        InputProps={{
                          style: {
                            borderRadius: "2rem",
                            background: "#fff",
                            height: "48px",
                          },
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton size="small">
                                <PersonIcon style={{ color: "#000" }} />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "transparent",
                            },
                            "&:hover fieldset": {
                              borderColor: "transparent",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "transparent",
                            },
                          },
                        }}
                        style={{ width: "100%" }}
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        error={Boolean(formErrors.name)}
                        helperText={formErrors.name}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        placeholder="Mobile Number"
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "transparent",
                            },
                            "&:hover fieldset": {
                              borderColor: "transparent",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "transparent",
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            borderRadius: "2rem",
                            background: "#fff",
                            height: "48px",
                          },
                          startAdornment: (
                            <>
                              <InputAdornment position="start">
                                <IconButton size="small">
                                  <PhoneIcon style={{ color: "#000" }} />
                                </IconButton>
                                <Box
                                  sx={{
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    display: "inline-flex", // Set display to inline-flex
                                    alignItems: "center",
                                    color: "#000",
                                  }}
                                  onClick={handleCodeClick}
                                >
                                  {countryCode}{" "}
                                  <Box
                                    sx={{ paddingTop: "6px", color: "#000" }}
                                  >
                                    <KeyboardArrowDownIcon />
                                  </Box>
                                </Box>
                              </InputAdornment>
                              <Divider
                                orientation="vertical"
                                flexItem
                                style={{
                                  marginRight: "10px",
                                  height: "35px",
                                  background: "#000",
                                  marginTop: "7px",
                                }}
                              />
                            </>
                          ),
                        }}
                        style={{ width: "100%" }}
                        InputLabelProps={{ shrink: true }}
                        name="contact"
                        value={contact}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        error={Boolean(formErrors.contact)}
                        helperText={formErrors.contact}
                      />
                    </Box>
                  </Grid>
                  <Menu
                    anchorEl={anchorCodeEl}
                    open={Boolean(anchorCodeEl)}
                    onClose={closeCode}
                  >
                    {countryCodes.map((code) => (
                      <MenuItem
                        key={code}
                        onClick={() => handleCountryCodeSelect(code)}
                      >
                        {code}
                      </MenuItem>
                    ))}
                  </Menu>
                  <Grid item xs={12} sm={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <TextField
                        placeholder="No of Passengers"
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "transparent",
                            },
                            "&:hover fieldset": {
                              borderColor: "transparent",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "transparent",
                            },
                          },
                        }}
                        InputProps={{
                          style: {
                            borderRadius: "2rem",
                            background: "#fff",
                            height: "48px",
                          },
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton size="small">
                                <PeopleIcon style={{ color: "#000" }} />
                              </IconButton>
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                size="small"
                                onClick={() => handlePassengerChange("remove")}
                              >
                                <RemoveIcon />
                              </IconButton>
                              <IconButton
                                size="small"
                                onClick={() => handlePassengerChange("add")}
                              >
                                <AddIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        style={{ width: "100%" }}
                        InputLabelProps={{ shrink: true }}
                        name="passengers"
                        value={passengers}
                        onChange={handleInputChange}
                        onBlur={handleInputChange}
                        error={Boolean(formErrors.passengers)}
                        helperText={formErrors.passengers}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </form>
              <Button
                variant="contained"
                type="submit"
                style={{
                  position: "absolute",
                  bottom: "-20px", // Adjust as needed
                  left: "50%", // Center horizontally
                  transform: "translateX(-50%)", // Center horizontally
                  borderRadius: "2rem",
                  width: "100%",
                  maxWidth: "200px", // Adjust as needed
                  background: "#00AFFF",
                }}
                onClick={handleFormSubmit}
              >
                Book Now
              </Button>
            </Paper> */}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Home;
