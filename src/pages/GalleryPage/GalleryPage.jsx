import { useEffect, useState } from "react";
import data from "../../data/image_list.json";
import Grid from "../../components/Grid/Grid";
import Image from "../../components/Image/Image";

function getImage() {
    return fetch("http://picsum.photos/v2/list").then((res) => res.json());
  }

const GalleryPage = (props) => {
  const [imageList, setImageList] = useState([]);
  const [errMessage, setErrorMessage] = useState();

  useEffect(() => {
    getImage()
      .then((imageData) => setImageList(imageData))
      .catch((err) => setErrorMessage("Something went wrong!"));
  }, []);

  return (
    <>
      <p>Gallery Page</p>
      {errMessage && <h1>{errMessage}</h1>}
      {!errMessage && (
        <Grid>
          {data.map(({ download_url, author, id }) => {
            return <Image src={download_url} alt={author} key={author + id} />;
          })}
        </Grid>
      )}
    </>
  );
};

export default GalleryPage;
