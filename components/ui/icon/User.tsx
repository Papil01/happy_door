import { FC } from "react";

interface Props {
  className?: string;
}
const User: FC<Props> = ({ className = "" }) => (
  <svg
    width="54"
    height="54"
    fill="none"
    viewBox="0 0 54 54"
    className={className}
  >
    <path
      d="M27 .333C12.544.333.333 12.544.333 27 .333 41.456 12.544 53.667 27 53.667c14.456 0 26.667-12.211 26.667-26.667C53.667 12.544 41.456.333 27 .333Zm0 13.334c4.605 0 8 3.392 8 8 0 4.608-3.395 8-8 8-4.603 0-8-3.392-8-8 0-4.608 3.397-8 8-8ZM13.384 39.725c2.392-3.52 6.381-5.866 10.95-5.866h5.333c4.57 0 8.557 2.346 10.949 5.866-3.408 3.648-8.243 5.942-13.616 5.942-5.373 0-10.208-2.294-13.616-5.942Z"
      fill="currentColor"
    />
  </svg>
);
export default User;
