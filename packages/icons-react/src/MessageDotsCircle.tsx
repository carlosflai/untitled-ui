import * as React from 'react';
import { SVGProps } from 'react';
const MessageDotsCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="M21 12c0 4.9706-4.0294 9-9 9-1.1971 0-2.3397-.2337-3.3845-.6581-.2-.0812-.3-.1218-.3808-.1399a.9087.9087 0 0 0-.2186-.0242c-.0828 0-.173.015-.3534.0451l-3.558.593c-.3725.0621-.5588.0931-.6935.0353a.4997.4997 0 0 1-.2624-.2624c-.0578-.1347-.0268-.321.0353-.6936l.593-3.5578c.03-.1805.0451-.2707.0451-.3535a.9075.9075 0 0 0-.0242-.2186c-.0181-.0808-.0587-.1808-.14-.3808C3.2338 14.3397 3 13.1971 3 12c0-4.9706 4.0294-9 9-9s9 4.0294 9 9Z"
    />
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="M8 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 12.5 12Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 17 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 12h.01M12 12h.01m4.49 0h.01M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9c0 1.1971.2337 2.3397.658 3.3845.0813.2.1219.3.14.3808a.9075.9075 0 0 1 .0242.2186c0 .0828-.015.173-.045.3535l-.593 3.5578c-.0622.3726-.0932.5589-.0354.6936a.4997.4997 0 0 0 .2624.2624c.1347.0578.321.0268.6936-.0353l3.5579-.593c.1804-.0301.2706-.0451.3534-.0451.081 0 .1396.0065.2186.0242.0808.0181.1808.0587.3808.1399C9.6603 20.7663 10.8029 21 12 21Zm-4-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 12.5 12Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 17 12Z"
    />
  </svg>
);
export default MessageDotsCircle;
