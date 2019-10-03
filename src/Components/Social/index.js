import React from 'react';
import { Social } from '../../Pages/Imovel/styles';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

export default function SocialShare() {
  return (
    <Social>
      <div style={{ display: `flex` }}>
        <FacebookShareButton url={''} style={{ marginRight: 7 }}>
          <FacebookIcon size={28} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url={''} style={{ marginRight: 7 }}>
          <WhatsappIcon size={28} round={true} />
        </WhatsappShareButton>
        <EmailShareButton url={''}>
          <EmailIcon size={28} round={true} />
        </EmailShareButton>
      </div>
    </Social>
  );
}
