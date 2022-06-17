import React from "react";
import { Link } from "react-router-dom";

function Image() {
  const data = [
    {
      id: 1,
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zSINB8kT5uBArawlQljdl6WIk7F.jpg",
    },
    {
      id: 2,
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zSINB8kT5uBArawlQljdl6WIk7F.jpg",
    },
    {
      id: 3,
      image:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zSINB8kT5uBArawlQljdl6WIk7F.jpg",
    },
  ];
  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: "flex", gap: 10 }}>
        {data.map((item) => (
          <Link to={"/images/" + item.id} key={item.id}>
            <img
              style={{ width: 300, height: 300, objectFit: "cover" }}
              src={item.image}
              alt=""
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Image;
