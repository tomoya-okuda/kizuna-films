type Props = {
  display?: boolean;
  onClick?: () => void;
};

function Play({ display, onClick }: Props) {
  if (!display) {
    return null;
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        onClick={onClick}
      >
        <path fill="#1A1A1A" d="m8 17.549 10.086-5.775L8 6v11.549Z" />
      </svg>
    </>
  );
}

export default Play;
