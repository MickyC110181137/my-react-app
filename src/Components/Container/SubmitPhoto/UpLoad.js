import React, { useState } from "react";
import Png from "./1x.png";
import axios from "axios";
// import { callUploadPhoto, callGetAlbum } from "../../../api/api";

export default function Upload() {
  const [imgUrl, setImgUrl] = useState("");
  console.log(
    " process.env.REACT_APP_NOT_SECRET_CODE>>",
    process.env.REACT_APP_NOT_SECRET_CODE
  );
  const onFileUpload = async (event) => {
    const data = new FormData();
    const image = event.target.files[0];
    data.append("image", image);

    data.append("aldum", "KMmOgBr");
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
    <main>
      <form id="form1" runat="server">
        <div className="row">
          <input
            id="uploadfile"
            type={"file"}
            style={{ display: "none" }}
            onChange={onFileUpload}
          />
          <label htmlFor="uploadfile" type="button1">
            <img src={imgUrl || Png}></img>
          </label>
        </div>
      </form>
    </main>
  );
}
