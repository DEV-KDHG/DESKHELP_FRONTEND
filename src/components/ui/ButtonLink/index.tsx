import style from "./ButtonLink.module.css";
interface Props {
  url?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
}

const ButtonLink = ({ url, name }: Props) => {
  return (
    <div className={style.footer_message}>
      <button onClick={url}>{name}</button>
    </div>
  );
};

export default ButtonLink;
