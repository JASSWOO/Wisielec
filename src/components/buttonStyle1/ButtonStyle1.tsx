import './ButtonStyle1.css';

interface ButtonStyle1Props {
  className: string;
}

const ButtonStyle1: React.FC<ButtonStyle1Props> = ({ className }, { children }) => {
  return <div className={' ButtonStyle1 ' + className}>{children}</div>;
};

export default ButtonStyle1;
