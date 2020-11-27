import styles from "./scroll.module.css";

function Scroll() {
  return (
    <div className={styles.scroll}>
       {/*eslint-disable-next-line*/}
      <a>
        <span></span>
      </a>
      <div className={styles.label}>Scroll</div>
    </div>
  );
}

export default Scroll;
