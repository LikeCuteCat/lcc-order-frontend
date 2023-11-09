import React, { useCallback, useState, ChangeEvent } from 'react';
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

//TODO: ADD Signup logic, Signup validation
const SignUpPage: NextPage = () => {
  const [email, onChangeEmail] = useInput('');
  const [storeName, onChangeStoreName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  const onLogin = useCallback(() => {
    console.log('login button clicked!');
  }, [email, password]);

  const onChangePasswordCheck = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setPasswordCheckError(e.target.value !== password);
    },
    [password],
  );

  const onSignUp = useCallback(() => {
    console.log('signup button clicked!');
  }, []);

  return (
    <AppLayout>
      <div className="container flex flex-col content-center items-center justify-center" css={wrapperStyle}>
        <div className="text-md">가장 편한 주문</div>
        <div className="text-4xl">ICC ORDER</div>
        <Spacing size="15" />
        <input
          type="email"
          placeholder="이메일"
          onChange={onChangeEmail}
          className="input input-bordered w-full max-w-xs"
          css={inputStyle}
        />
        <Spacing size="15" />
        <input
          type="text"
          placeholder="업체명을 입력해주세요."
          onChange={onChangeStoreName}
          className="input input-bordered w-full max-w-xs"
          css={inputStyle}
        />
        <Spacing size="15" />
        <input
          type="password"
          placeholder="패스워드"
          className={`input input-bordered w-full max-w-xs ${passwordCheckError ? 'input-error' : ''} `}
          onChange={onChangePassword}
          css={inputStyle}
        />
        <Spacing size="15" />
        <input
          type="password"
          placeholder="패스워드 확인"
          className={`input input-bordered w-full max-w-xs ${passwordCheckError ? 'input-error' : ''} `}
          onChange={onChangePasswordCheck}
          css={inputStyle}
        />
        <Spacing />
        {passwordCheckError && <div className="text-rose-600 mb-2">비밀번호가 달라요!</div>}
        <button className="btn w-full max-w-xs" onClick={onSignUp}>
          회원가입 하기
        </button>
        <Spacing />
      </div>
    </AppLayout>
  );
};

export default SignUpPage;
