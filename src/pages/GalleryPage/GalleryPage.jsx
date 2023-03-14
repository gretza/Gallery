import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import PictureCard from "../../components/PictureCard/PictureCard";
import Topic from "../../components/Topic/Topic";
import styles from "./GalleryPage.module.css"

const GalleryPage = (props) => {
  const [art, setArt] = useState();
  const [errMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);


  const getImage = (url) => {
    return fetch(url, {
      headers: {
        "X-Xapp-Token":
          "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IiIsInN1YmplY3RfYXBwbGljYXRpb24iOiI2NDBhMmZiZjllYzMyMDAwMGJiNzY0OTUiLCJleHAiOjE2Nzg5OTM5ODMsImlhdCI6MTY3ODM4OTE4MywiYXVkIjoiNjQwYTJmYmY5ZWMzMjAwMDBiYjc2NDk1IiwiaXNzIjoiR3Jhdml0eSIsImp0aSI6IjY0MGEyZmJmOWY5YjQxMDAwZTQ2MDAxMSJ9._bQAfHFEPYWjhcnuofzhwG_tLq3xjPRGJgSzrljVFG4",
      },
    })
      .then((res) => res.json())
      .then((artData) => setArt(artData));
  }

  useEffect(() => {
    getImage("https://api.artsy.net/api/artworks?total_count=1&size=15")
      .catch((err) => setErrorMessage("Something went wrong!"));
  }, []);

  const nextPage = () => {
    setIsLoading(true);
    getImage(art._links.next?.href)
    .finally(() => {setIsLoading(false)})
  };

  return (
    <>
      <Topic
        title="Collection"
        description="Reflecting a broad range of styles and ideas, the collection introduces viewers to the main processes and developments in art of the last 60 years. The collection is continually supplemented with new and relevant works of Lithuanian art."
      />
      {errMessage && <h1>{errMessage}</h1>}
      {!errMessage && (isLoading ? <h1 className={styles.loader}>Loading...</h1> :
        <>
          <Grid>
            {art?._embedded.artworks.map((artwork) => {
              return (
                <PictureCard
                  src={artwork._links.image.href.replace(
                    "{image_version}",
                    "large"
                  )}
                  alt={artwork.title}
                  key={artwork.title + artwork.id}
                  title={artwork.title}
                />
              );
            })}
          </Grid>
          <div className={styles.buttonContainer}>
          <Button label="NEXT" onClick={nextPage}/>
          </div>
        </>
      )}
    </>
  );
};

export default GalleryPage;
