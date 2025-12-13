export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12" />
      <path d="M7 12a5 5 0 0 1 5-5" />
      <path d="M12 17a5 5 0 0 0 5-5" />
      <path d="M12 2v10" />
    </svg>
  );
  