import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "../styles/Checkout.css";
import PaymentForm from "../components/PaymentForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cars, setCars] = useState();
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  let params = useParams();
  const navigate = useNavigate();

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
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const oneCar = cars?.filter((ele) => {
    return ele.id == params.name;
  });

  function handleClickCheckout(oneCar) {
    localStorage.setItem("Model", JSON.stringify(oneCar[0].model));
    localStorage.setItem("Year", JSON.stringify(oneCar[0].year));
    localStorage.setItem("Make", JSON.stringify(oneCar[0].make));

    localStorage.setItem("Price", JSON.stringify(oneCar[0].price + 5));
    navigate("/ourcars/ordered");

    //   localStorage.setItem(
    //     "buyer",
    //     JSON.stringify(oneCar[0].price + 5)
    //   );
  }
  if (!loginData) {
    navigate("/login");
  }

  //   console.log()

  return (
    <div>
      {oneCar?.map((ele) => {
        return (
          <>
            <div>
              <h2 className="HeaderCheckout">Checkout</h2>
            </div>
            <Box className="ContainerCheckout">
              <div>
                <PaymentForm />
                <Button
                  onClick={() => handleClickCheckout(oneCar)}
                  style={{ margin: "1rem" }}
                  type="submit"
                  className="btnCheckout"
                  variant="contained">
                  Check Out
                </Button>
              </div>

              <Paper style={{ height: "400px" }} elevation={3}>
                <h3 className="HeaderSammary">Sammary</h3>
                <h5 style={{ textAlign: "center" }}>Car Model:{ele.model}</h5>
                <div className="sammaryPriceTable">
                  <div className="rentPrice">
                    <h5>Rent Price:</h5>
                    <h5>{ele.price} JOD</h5>
                  </div>
                  <div className="deliveryFees">
                    <h5>Delivery Fees:</h5>
                    <h5>5 JOD</h5>
                  </div>

                  <div className="totalPrice">
                    <h5>Total Price:</h5>
                    <h5>{ele.price + 5} JOD</h5>
                  </div>
                </div>
              </Paper>
            </Box>
          </>
        );
      })}
    </div>
  );
}

export default Checkout;
