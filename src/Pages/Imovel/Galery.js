import React from 'react';
import SlideShow from 'react-image-show';
import MediaQuery from 'react-responsive';

export default function Galery(props) {
  const { imagens } = props;

  return (
    <>
      <MediaQuery maxDeviceWidth={700}>
        <SlideShow
          images={imagens.map(item => item.Link)}
          width="920px"
          imagesWidth="100%"
          imagesHeight="600px"
          imagesHeightMobile="450px"
          thumbnailsWidth="400px"
          thumbnailsHeight="1vw"
          arrows={true}
          indicators
          thumbnails
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1200}>
        <SlideShow
          images={imagens.map(item => item.Link)}
          width="920px"
          imagesWidth="100%"
          imagesHeight="600px"
          imagesHeightMobile="450px"
          thumbnailsWidth="400px"
          thumbnailsHeight="1vw"
          arrows={true}
          fixedImagesHeight={true}
          indicators
          thumbnails
        />
      </MediaQuery>
    </>
  );
}
