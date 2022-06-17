import React from "react";
import { useParams } from "react-router-dom";

function SingleImage() {
  const params = useParams();
  const data = [
    {
      id: 1,
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zSINB8kT5uBArawlQljdl6WIk7F.jpg",
      description: "one",
    },
    {
      id: 2,
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zSINB8kT5uBArawlQljdl6WIk7F.jpg",
      description: "two",
    },
    {
      id: 3,
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zSINB8kT5uBArawlQljdl6WIk7F.jpg",
      description: "three",
    },
  ];
  console.log(params.id);
  return (
    <div>
      <div>
        <img
          style={{ width: 300, height: 300, objectFit: "cover" }}
          src={data[params.id - 1].image}
          alt=""
        />
        <div>{data[params.id - 1].description}</div>
      </div>
    </div>
  );
}

export default SingleImage;
