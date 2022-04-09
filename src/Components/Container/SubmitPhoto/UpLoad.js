import React from "react";
import Png from "./1x.png";

export default function Upload() {
  // const [imgUrl, setImgUrl] = useState("");
  const onFileUpload = async (event) => {
    const data = new FormData();
    const image = event.target.files[0];
    data.append("image", image);

    data.append("aldum", "vOVkBWw");
    data.append("title", image);
    // const res = await callUploadPhoto(data);
    // setImgUrl(res.data.data.link);
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
            <img src={Png}></img>
          </label>
        </div>
      </form>
    </main>
  );
}
