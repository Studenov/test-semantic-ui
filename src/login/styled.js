import styled from 'styled-components';
import { Button, Form, Header } from 'semantic-ui-react';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  min-width: 310px;
  max-width: 600px;
  margin: 1em;
`;
export const ComponentButton = styled(Button)`
  width: ${props => props.btn === 'social' ? '195px' : '80px'};
  margin: ${props => props.btn === 'social' ? '0 5px 10px 5px !important' : '0 0 10px 0 !important'};
`;
export const ComponentField = styled(Form.Field)`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.block ? 'center' : 'left'};
`;
export const ComponentHeader = styled(Header)`
  text-align: center;
`;
export const SocialBlock = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 430px) and (min-width: 320px) {
    align-items: center;
    flex-direction: column;
  }
`;