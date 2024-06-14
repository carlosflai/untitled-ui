import * as React from 'react';
import { SVGProps } from 'react';
const ArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="transparent" fillOpacity={0.01} d="M17 17H7V7" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 7 7 17m0 0h10M7 17V7"
    />
  </svg>
);
export default ArrowDownLeft;
