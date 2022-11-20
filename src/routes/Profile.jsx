import { Paper } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import "../styles/Profile.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const Model = localStorage.getItem("Model");
const Price = localStorage.getItem("Price");
const Make = localStorage.getItem("Make");
const Year = localStorage.getItem("Year");
const rows = [createData(1, Model, Make, Year, Price)];

function Profile() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
    googleLogout();
    navigate("/");
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!loginData) {
      navigate("/login");
    }
  }, [loginData]);

  return (
    <div>
      <div className="allcontainer">
        <div className="userImgAndInfo">
          <Paper elevation={3} className="Paper">
            <div className="imgSection">
              <img
                className="img"
                src="https://e7.pngegg.com/pngimages/1004/160/png-clipart-computer-icons-user-profile-social-web-others-blue-social-media.png"
                alt="img"
              />
              <h5>Name: Jafar Thwahrah</h5>
              <div className="btnsContainer">
                <Button
                  style={{ margin: "1rem", padding: ".5rem" }}
                  className="btn"
                  variant="outlined"
                  href="#outlined-buttons">
                  Edit
                </Button>
                <Button
                  onClick={handleLogout}
                  style={{ margin: "1rem", padding: ".5rem" }}
                  className="btn"
                  variant="outlined"
                  color="error">
                  Logout
                </Button>
              </div>
            </div>
          </Paper>

          <Paper className="Paper" elevation={3}>
            <h3 className="HeaderSammary">User Info</h3>
            <div className="sammaryPriceTable">
              <div className="rentPrice">
                <h5 className="hdItem">Full Name :</h5>
                <h5 className="hdItem"> Jafar Thwahrah</h5>
              </div>
              <div className="deliveryFees">
                <h5 className="hdItem">Birthday :</h5>
                <h5 className="hdItem">10/10/1910</h5>
              </div>

              <div className="totalPrice">
                <h5 className="hdItem">favorite Model :</h5>
                <h5 className="hdItem"> BMW</h5>
              </div>
            </div>
          </Paper>
        </div>

        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 850 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>#</StyledTableCell>
                  <StyledTableCell align="right">Car Model</StyledTableCell>
                  <StyledTableCell align="right">Make</StyledTableCell>
                  <StyledTableCell align="right">
                    Year of release
                  </StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.protein} JOD
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Profile;
