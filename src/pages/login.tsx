import React, { useCallback } from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';

import AppLayout from '../components/layout/AppLayout';
import useInput from '../hooks/useInput';
import Spacing from '../components/layout/Spacing';

const wrapperStyle = css`
  width: 100%;
  height: 80vh;
`;

const inputStyle = css`
  border-radius: 0.25rem;
`;

//TODO: ADD login logic, login validation
const LoginPage: NextPage = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onLogin = useCallback(() => {
    console.log('login button clicked!');
  }, [email, password]);

  return (
    <AppLayout>
      <div className="container flex flex-col content-center items-center justify-center" css={wrapperStyle}>
        <div className="text-md">가장 편한 주문</div>
        <div className="text-4xl">ICC ORDER</div>
        <Spacing size="20" />
        <input
          type="email"
          placeholder="Email"
          onChange={onChangeEmail}
          className="input input-bordered w-full max-w-xs"
          css={inputStyle}
        />
        <Spacing size="20" />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          onChange={onChangePassword}
          css={inputStyle}
        />
        <Spacing />
        <button className="btn w-full max-w-xs" onClick={onLogin}>
          로그인 하기
        </button>
        <Spacing />
        <div className="text">
          아직 계정이 없으신가요?
          <a href="/signup" className="text-primary">
            {' '}
            회원가입하기
          </a>
        </div>
      </div>
    </AppLayout>
  );
};

export default LoginPage;
