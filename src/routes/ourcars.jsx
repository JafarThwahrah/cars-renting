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
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Ourcars() {
  const [cars, setCars] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searched, setSearched] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [filtered, setFiltered] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  let params = useParams();
  const imagesArr = [
    "https://file.kelleybluebookimages.com/kbb/base/house/2008/2008-Buick-Enclave-FrontSide_BSENC081_505x375.jpg?interpolation=high-quality&downsize=303:*",
    "https://www.northamericanmotoring.com/forums/attachments/minis-and-minis-for-sale/114330d1439761362-2006-mini-cooper-s-convertible-for-sale-20141126_141834.jpg",
    "https://www.cnet.com/a/img/resize/d74e4704d7553e09cf1cfbc704cf89ff9273bebb/hub/2018/08/29/77ce2ede-0967-4fc3-991d-98998a4345d6/2019-volvo-xc90-t6-inscription-53.jpg?auto=webp&width=768",
    "https://file.kelleybluebookimages.com/kbb/base/house/1999/1999-Ford-Taurus-FrontSide_FOTAUSED991_505x313.jpg",
    "https://media.ed.edmunds-media.com/volvo/xc60/2020/oem/2020_volvo_xc60_4dr-suv_t8-polestar-engineered_fq_oem_1_600.jpg",
    "https://i.pinimg.com/originals/3d/71/b8/3d71b81793c4d8b772a40ebc47f85d2f.jpg",
    "https://media.ed.edmunds-media.com/gmc/sierra-1500/2016/oem/2016_gmc_sierra-1500_crew-cab-pickup_denali_fq_oem_1_600.jpg",
    "https://s1.cdn.autoevolution.com/images/gallery/GMCCanyonCrewCab-2879_1.jpg",
    "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/Subaru-Outback-2016-%284%29.jpg",
    "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/dp/images/uploads/outlander_newwide.jpg",
    "https://live.staticflickr.com/65535/49892600207_e63216a902_b.jpg",
    "https://media.ed.edmunds-media.com/nissan/pathfinder/2014/oem/2014_nissan_pathfinder_4dr-suv_platinum_fq_oem_1_1600.jpg",
    "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/14q2/584476/2014-honda-civic-si-sedan-test-review-car-and-driver-photo-597226-s-original.jpg?crop=0.846xw:0.693xh;0.0689xw,0.181xh&resize=1200:*",
    "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/dp/albums/album-684/lg/Subaru-Outback-3.6R-1_.jpg",
    "https://file.kelleybluebookimages.com/kbb/base/house/2009/2009-Lincoln-Navigator%20L-FrontSide_LTNAV091_505x375.jpg",
  ];
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://car-data.p.rapidapi.com/cars",
      params: { limit: "15", page: "0" },
      headers: {
        "X-RapidAPI-Key": "1e103bc92amshe46fa7ce02d2b9dp17c5fdjsnda4b38c977b6",
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const carsData = response.data;
        for (let i = 0; i < carsData.length; i++) {
          carsData[i].image = imagesArr[i];
          carsData[i].price = 10 + i * 1.5;
        }
        setCars(carsData);
        setFiltered(carsData);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (params.sucess == "ordered") {
      setOpen(true);
    }
  }, []);

  function filterData() {
    let filteredData =
      searched && selected && selectedModel
        ? cars.filter((user) => {
            return (
              user.model
                .toLowerCase()
                .trim()
                .includes(searched.toLowerCase()) &&
              user.make == selected &&
              selectedModel == user.model
            );
          })
        : selectedModel && selected
        ? cars.filter((user) => {
            return user.make == selected && selectedModel == user.model;
          })
        : searched && selectedModel
        ? cars.filter((user) => {
            return (
              user.model
                .toLowerCase()
                .trim()
                .includes(searched.toLowerCase()) && selectedModel == user.model
            );
          })
        : searched && selected
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
        : selectedModel
        ? cars.filter((user) => {
            return user.model == selectedModel;
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

  useEffect(() => {
    filterData();
  }, [selectedModel]);

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
            image={car.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              className="carHeadingModel"
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
            <Typography
              className="carHeading"
              gutterBottom
              variant="h6"
              component="div">
              Renting Price: {car.price} JOD
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Year of Release: {car.year}
            </Typography>
          </CardContent>
          <CardActions>
            <Link style={{ textDecoration: "none" }} to={"/checkout/" + car.id}>
              <Button variant="contained">Rent The Car</Button>
            </Link>
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
  // const uniqueTypes = [...new Set(newArr2)];
  const uniqueModels = [...new Set(newArr3)];

  console.log(cars);

  console.log(filtered);

  return (
    <>
      <h1 style={{ color: "#1976d2" }} className="carHeading1">
        Find Your Favorite Car
      </h1>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thanks for using our Website!
        </Alert>
      </Snackbar>

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
            onChange={(e) => setSelectedModel(e.target.value)}>
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

        <Button
          className="showAllBtn"
          style={{ height: "55px", margin: "1rem" }}
          onClick={(e) => {
            setFiltered(cars);
            setSelected(null);
            setSearched(null);
            setSelectedModel(null);
          }}
          variant="contained">
          Reset Filter
        </Button>
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
