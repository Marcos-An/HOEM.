import React, { Component } from 'react';
import {Social } from './styles';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';


export default function SocialShare(){
  return(
    <Social>
      <div style={{display:`flex`}}>
        <FacebookShareButton url={''} style={{marginRight: 5}}>
          <FacebookIcon size={28} round={true}/>
        </FacebookShareButton>
        <WhatsappShareButton url={''}  style={{marginRight: 5}}>
          <WhatsappIcon size={28} round={true}/>
        </WhatsappShareButton>
      </div>
    </Social>
  );
}