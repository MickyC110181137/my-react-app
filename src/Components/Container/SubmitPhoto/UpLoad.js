import React, { useEffect, useState } from "react";
import Png from "./1x.png";
import axios from "axios";
// import { callUploadPhoto, callGetAlbum } from "../../../api/api";

export default function Upload() {
  const [imgUrl, setImgUrl] = useState("");
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    const getImage = async () => {
      const image3 = await axios({
        method: "GET",
        url: "https://api.imgur.com/3/album/KMmOgBr",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_NOT_SECRET_CODE,
        },
      });
      setAlbum(image3.data.data.images);
    };
    getImage();
  }, [imgUrl]);

  console.log(
    " process.env.REACT_APP_NOT_SECRET_CODE>>",
    process.env.REACT_APP_NOT_SECRET_CODE
  );
  const onFileUpload = async (event) => {
    const data = new FormData();
    const image = event.target.files[0];
    data.append("image", image);

    data.append("album", "KMmOgBr");
    data.append("title", image);
    console.log("Bearer " + process.env.REACT_APP_NOT_SECRET_CODE);

    const res = await axios({
      method: "POST",
      url: "https://api.imgur.com/3/image",
      data,
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_NOT_SECRET_CODE,
      },
    });
    console.log(res);
    setImgUrl(res.data.data.link);
  };
  return (
    <form id="form1" runat="server">
      <div className="gridalbum">
        <div className="flex">
          {album.map((album1) => {
            return (
              <img
                key={album1.id}
                src={album1.link}
                width={100}
                height={100}
              ></img>
            );
          })}
        </div>
        <input
          id="uploadfile"
          type={"file"}
          style={{ display: "none" }}
          onChange={onFileUpload}
        />
        <label className="label001" htmlFor="uploadfile" type="button1">
          <img src={imgUrl || Png} width={60}></img>
        </label>
      </div>
    </form>
  );
}
