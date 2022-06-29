import styles from "./ContactPage.module.css";
import Form from "./Form";
const ContactPage = () => {
  return (
    <section className={styles.contact}>
      <div className="container grid grid-2-cols">
        <div className={styles.textBox}>for text box</div>
        <div className={styles.formBox}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
