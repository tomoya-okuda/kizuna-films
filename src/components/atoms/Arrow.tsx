import React from 'react';

type Props = {
  color: string;
};

function Arrow({ color }: Props) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none">
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m3 4 3 3-3 3"
        />
      </svg>
    </>
  );
}

export default Arrow;
