/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Icon, Form, Divider } from 'semantic-ui-react';

import * as Styled from './styled';

export const Login = () => (
  <Styled.Wrapper>
    <Styled.Container>
      <Form>
        <Styled.ComponentHeader as='h2'>
          Login
        </Styled.ComponentHeader >
        <Styled.ComponentField>
          <label>E-Mail Address</label>
          <input placeholder='type in your email' required type='email' name='email' />
        </Styled.ComponentField>
        <Styled.ComponentField>
          <label>Password</label>
          <input placeholder='type in your password' required type='password' name='password' />
        </Styled.ComponentField>
        <Styled.ComponentField block='submit'>
          <Styled.ComponentButton color='orange' type='submit'>
            Login
          </Styled.ComponentButton>
          <a href='#'>
            Reset your password
          </a>
        </Styled.ComponentField>
        <Divider horizontal>
          OR
        </Divider>
      </Form>
      <Styled.SocialBlock>
        <Styled.ComponentButton color='facebook' btn='social'>
          <Icon name='facebook' />
          Login with Facebook
        </Styled.ComponentButton>
        <Styled.ComponentButton color='google plus' btn='social'>
          <Icon name='google' />
          Login with Google
        </Styled.ComponentButton>
      </Styled.SocialBlock>
    </Styled.Container>
  </Styled.Wrapper>
);