type Props = {
  display?: boolean;
  onClick?: () => void;
};

function Pause({ display, onClick }: Props) {
  if (!display) {
    return null;
  }

  return (
    <>
      {display && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          onClick={onClick}
        >
          <path
            fill="#1A1A1A"
            fillRule="evenodd"
            d="M10 6H7v12h3V6Zm7 0h-3v12h3V6Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
}

export default Pause;
