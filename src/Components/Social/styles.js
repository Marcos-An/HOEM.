import styled from 'styled-components';

export const Social = styled.div`
  display: flex;

  .facebook:hover .Facebook {
    background-image: url("../../Assets/facebook2.svg");
  }
  .facebook:hover {
    background-color: #3b579d;
  }


  .insta:hover .Insta {
    background-image: url("../../Assets/instagram2.svg");
  }
  .insta:hover {
    background-color: #f783ac;
  }
`;
export const RedeSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  width: 42px;
  border-radius: 4px;
  background-color: #fff;
  margin: 0px 10px 0px 0px;
  box-shadow: 0 3px 10px 2px rgba(0,0,0,.1);
`;
export const Facebook = styled.div`
  height: 12px;
  width: 12px;
  background-image: url("../../Assets/facebook.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Insta = styled.div`
  height: 12px;
  width: 12px;
  background-image: url("../../Assets/instagram.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
 