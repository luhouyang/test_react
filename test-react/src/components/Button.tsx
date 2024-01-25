interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';   // only set to these
  onClick: () => void;
}

const Button = ({ children, color='primary', onClick }: Props) => {
  return (
    <button
      typeof="button"
      className={"btn btn-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
