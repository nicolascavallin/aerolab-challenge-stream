import * as React from "react";
import { memo, SVGProps } from "react";

const AerolabLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm2.766-18.96 3.081 5.268a.078.078 0 0 1-.01.091l-4.479 4.987-1.838 2.046c-.497.555-1.113 1.068-2.23 1.068-1.296 0-1.933-.788-2.495-1.483-.619-.766-1.203-1.49-2.715-1.514a.08.08 0 0 1-.08-.078v-.847a.08.08 0 0 1 .082-.08c2.002.027 2.836 1.06 3.509 1.892.57.706.93 1.105 1.698 1.105.685 0 1.045-.257 1.47-.73l.253-.282-1.73-8.347a.079.079 0 0 1 .038-.084l5.337-3.041a.08.08 0 0 1 .11.029Z"
      fill={props.fill}
    />
  </svg>
);

const Memo = memo(AerolabLogo);
export default Memo;
