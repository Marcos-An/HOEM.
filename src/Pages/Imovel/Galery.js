import React from 'react';
import SlideShow from 'react-image-show';


export default function Galery(props){
    const { imagens } = props;
    
      return (
        <SlideShow
          images={imagens.map((item) => item.Link)}
          width="100%"
          imagesWidth="100%"
          imagesHeight="450px"
          imagesHeightMobile="56vw"
          thumbnailsWidth="400px"
          thumbnailsHeight="2vw"
          arrows={true}
          indicators
          thumbnails 
          fixedImagesHeight
        />        
    );
}