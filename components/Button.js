import style from "../styles/Button.module.css";

export default function Button({ text, onClick }) {
  return (
    <div className={style.button} onClick={onClick}>
      {text}
    </div>
  );
}
