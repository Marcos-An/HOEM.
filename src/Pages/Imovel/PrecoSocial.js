import React from 'react';
import { Social, Preco, VendaAluguel } from './styles';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

export default function Precos(props) {
  const {itemVenda, itemAluguel} = props;
  return (
    <>
      <Social>
        {itemVenda > 0 ? (
          <VendaAluguel>
            Venda:
            <Preco>{`${itemVenda.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}`}</Preco>
          </VendaAluguel>
        ) : null}
        {itemAluguel > 0 ? (
          <VendaAluguel>
            Aluguel:
            <Preco>
              {`${itemAluguel.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}`}
            </Preco>
          </VendaAluguel>
        ) : null}

        <div style={{ display: `flex`, alignContent: `center`}}>
            <FacebookShareButton url={''} style={{ marginRight: 10, marginLeft: 10 }}>
              <FacebookIcon size={28} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton url={''} style={{ marginRight: 10 }}>
              <WhatsappIcon size={28} round={true} />
            </WhatsappShareButton>
            <EmailShareButton url={''}>
              <EmailIcon size={28} round={true} />
            </EmailShareButton>
        </div>
      </Social>
    </>
  );
}
