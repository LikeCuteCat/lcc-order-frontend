import { FC } from 'react';
import { css } from '@emotion/react';

const testCss = css``;

const IncomeState: FC = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow w-full" css={testCss}>
      <div className="stat">
        <div className="stat-title">오늘 매출</div>
        <div className="stat-value">300만원</div>
        <div className="stat-desc">...</div>
      </div>

      <div className="stat">
        <div className="stat-title">다녀간 손님 수</div>
        <div className="stat-value">200명</div>
        <div className="stat-desc">...</div>
      </div>

      <div className="stat">
        <div className="stat-title">남은 테이블 수</div>
        <div className="stat-value">2</div>
        <div className="stat-desc">...</div>
      </div>
    </div>
  );
};

export default IncomeState;
