import * as React from 'react';
import { SVGProps } from 'react';
const CodeCircle01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="m14.25 13.7 2.7-2.7-2.7-2.7m-4.5 0L7.05 11l2.7 2.7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14.25 13.7 2.7-2.7-2.7-2.7m-4.5 0L7.05 11l2.7 2.7M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default CodeCircle01;
