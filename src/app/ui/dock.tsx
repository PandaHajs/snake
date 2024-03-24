import style from "./styles/dock.module.scss";

export default function Dock() {
  return (
    <div className={style.dock}>
      <h2>Game Controls</h2>
      <p>Use the arrow keys or WASD to move the snake.</p>
      <p>Everytime you eat, the snake speeds up just a little.</p>
    </div>
  );
}
