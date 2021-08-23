import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { Container } from "react-bootstrap";
import './style.css';

// Esto no está funcionando...algo de los SerializedStyles
// type overrideStyles = {
//   display: string;
//   justifyContent: string;
//   alignItems: string;
//   margin: string;
//   borderColor: string;
// }
// Can be a string as well. Need to ensure each key-value pair ends with ;

const override: any  = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  borderColor: 'green',
};

const Loading: React.FC = (): JSX.Element =>{
  return(
    <Container className="loader__size">
      <BounceLoader color="green" css={override} size={250} />;
    </Container>
  )
}

export default Loading;
