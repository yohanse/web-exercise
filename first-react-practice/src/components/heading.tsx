interface Props {
  onClick: () => void;
}
function Heading({ onClick }: Props) {
  return (
    <div id="message">
      <p>My alert</p>
      <p id="close" onClick={onClick}>
        close
      </p>
    </div>
  );
}

export default Heading;
