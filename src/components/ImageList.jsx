import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect } from "react";
import axios from "axios";
import "../styles/imageList.css";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function TitlebarImageList() {
  const [cars, setCars] = useState();

  const imagesArr = [
    "https://file.kelleybluebookimages.com/kbb/base/house/2008/2008-Buick-Enclave-FrontSide_BSENC081_505x375.jpg?interpolation=high-quality&downsize=303:*",
    "https://www.northamericanmotoring.com/forums/attachments/minis-and-minis-for-sale/114330d1439761362-2006-mini-cooper-s-convertible-for-sale-20141126_141834.jpg",
    "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562247322/autoexpress/2019/02/248340_refreshed_volvo_xc90_inscription_t8_twin_engine_in_birch_light_metallic.jpg",
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
      params: { limit: "9", page: "0" },
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

  console.log(cars);
  return (
    <div style={{ marginTop: "6rem" }}>
      <h2 className="HeaderImg">Find our Most Requested Models</h2>
      <div className="imageList-container">
        <ImageList sx={{ width: 1275, height: 1000 }}>
          <ImageListItem key="Subheader" cols={3}>
            <ListSubheader component="div"></ListSubheader>
          </ImageListItem>
          {cars?.map((item) => (
            <Link to={"/checkout/" + item.id} style={{ margin: "0" }}>
              <ImageListItem key={item.image}>
                <img
                  style={{ height: "320px", width: "420px" }}
                  src={`${item.image}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 1.3x`}
                  alt={item.model}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.model}
                  subtitle={item.year}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.make}`}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
];
