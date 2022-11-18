import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../styles/Ourcars.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Ourcars() {
  const [cars, setCars] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searched, setSearched] = useState(null);
  const [selected, setSelected] = useState(null);
  const [filtered, setFiltered] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: { limit: "50", page: "0" },
      headers: {
        "X-RapidAPI-Key": "1e103bc92amshe46fa7ce02d2b9dp17c5fdjsnda4b38c977b6",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCars(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  function filterData() {
    let filteredData =
      searched && selected
        ? cars.filter((user) => {
            return (
              user.model
                .toLowerCase()
                .trim()
                .includes(searched.toLowerCase()) && user.make == selected
            );
          })
        : searched
        ? cars.filter((user) => {
            return user.model
              .trim()
              .toLowerCase()
              .includes(searched.toLowerCase());
          })
        : selected
        ? cars.filter((user) => {
            return user.make == selected;
          })
        : cars;

    setFiltered(filteredData);
  }

  useEffect(() => {
    filterData();
  }, [searched]);

  useEffect(() => {
    filterData();
  }, [selected]);

  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = filtered
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((car) => {
      return (
        <Card className="carCard" key={car.id} sx={{ width: 370 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography
              className="carHeading"
              gutterBottom
              variant="h5"
              component="div">
              Car Model: {car.model}
            </Typography>
            <Typography
              className="carHeading"
              gutterBottom
              variant="h5"
              component="div">
              Manufacturer: {car.make}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Year of Release: {car.year}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">Rent The Car</Button>
          </CardActions>
        </Card>
      );
    });

  const pageCount = Math.ceil(cars.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  let newArr = [];
  cars.forEach((element) => {
    newArr.push(element.make);
  });

  let newArr2 = [];
  cars.forEach((element) => {
    newArr2.push(element.type);
  });

  let newArr3 = [];
  cars.forEach((element) => {
    newArr3.push(element.model);
  });
  const uniqueMakes = [...new Set(newArr)];
  const uniqueTypes = [...new Set(newArr2)];
  const uniqueModels = [...new Set(newArr3)];

  console.log(selected);
  console.log(searched);
  console.log(filtered);

  return (
    <>
      <h1 className="carHeading1">Find Your Favorite Car</h1>
      <div className="filterContainer">
        <FormControl
          sx={{ width: 300 }}
          className="filter"
          style={{ margin: "1rem" }}>
          <InputLabel id="demo-simple-select-label2">Makes</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Age"
            onChange={(e) => setSelected(e.target.value)}>
            {uniqueMakes.map((unique) => {
              return <MenuItem value={unique}>{unique}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl
          sx={{ width: 300 }}
          className="filter"
          style={{ margin: "1rem" }}>
          <InputLabel id="demo-simple-select-label">Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Model"
            // onChange={(e) => setSelected(e.target.value)}
          >
            {uniqueModels.map((unique) => {
              return <MenuItem value={unique}>{unique}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <TextField
          style={{ margin: "1rem" }}
          className="filter"
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          onChange={(e) => setSearched(e.target.value)}
        />
      </div>
      <div className="cardsContainer">
        {displayUsers}

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}
