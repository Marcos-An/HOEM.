import React from 'react';
import { Social, RedeSocial, Facebook, Insta } from './styles';

export default function SocialShare() {
  return (
    <Social>
      <RedeSocial className="facebook">
          <Facebook className="Facebook"/>
        </RedeSocial>
        <RedeSocial className="insta">
          <Insta className="Insta"/>
        </RedeSocial>
    </Social>
  );
}
