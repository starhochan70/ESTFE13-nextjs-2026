import styles from "./create.module.css";

export default function Layout({ children }) {
  console.log("Create 레이아웃 작동");
  return (
    <form>
      <h2 className={styles.title}>Create Page</h2>
      {children}
    </form>
  );
}
