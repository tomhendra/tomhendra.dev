import { JSX } from "preact";

export function LucideMonitorCheck(props: JSX.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="m9 10l2 2l4-4"></path>
        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
        <path d="M12 17v4m-4 0h8"></path>
      </g>
    </svg>
  );
}
export default LucideMonitorCheck;
