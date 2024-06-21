import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <div className={styles.navbar}>
        <div className="logo"><a>reptar.ai</a></div>
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
    </div>
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Create Business Avatar</h1>
        <div className={styles.input}>
          <input type="text" placeholder="Insert website link" className={styles.userinput}></input>
          <button className={styles.generatebutton}>Generate Avatar</button>
        </div>
      </main>
      <footer className={styles.footer}>
  
      </footer>
    </div>
    </>
  );
}
