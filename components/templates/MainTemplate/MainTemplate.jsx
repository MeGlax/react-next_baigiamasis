import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import styles from "./MainTemplate.module.css";

const MainTemplate = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
