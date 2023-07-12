type Props = {
  text: string;
};

function Comment({ text }: Props) {
  return (
    <div className="flex justify-center items-center gap-2">
      <span>\</span>
      <h4>{text}</h4>
      <span>/</span>
    </div>
  );
}

export default Comment;
