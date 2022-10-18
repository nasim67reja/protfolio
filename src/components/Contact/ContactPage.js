import styles from "./ContactPage.module.css";
import Textbox from "./Textbox";
import Form from "./Form";

const ContactPage = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <Textbox />
        </div>
        <div className={styles.formBox}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
