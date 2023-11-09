import React, { FC, useMemo } from 'react';
import { css } from '@emotion/react';

type Props = {
  size?: string;
};

const Spacing: FC<Props> = ({ size = '10' }) => {
  const componentStyle = useMemo(() => {
    return css`
      height: ${size}px;
    `;
  }, [size]);

  return <div css={componentStyle}></div>;
};

export default Spacing;
