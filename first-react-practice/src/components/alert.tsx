interface Props{
    onClick: () => void;
}

function Alert({ onClick }: Props) {
  return <button onClick = {onClick}>click me</button>;
}

export default Alert;