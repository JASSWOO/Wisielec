import './Popus.css';

interface PopupProps {
  message: string;
}

const Popup: React.FC<PopupProps> = ({ message }) => {
  return <p>{message}</p>;
};

export default Popup;
