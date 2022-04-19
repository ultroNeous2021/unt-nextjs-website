import styles from "@/styles/components/QuoteComponent.module.css";
const QuoteComponent = (props) => {
  return (
    <div className={styles.Quotecontainer}>
      {/* <div className={styles.Quote}>
      </div> */}
      <div className={styles.QuotedescriptionArea}>
        <span className={styles.Quotesymbol}>“</span>
        <p className={styles.Quotedescription}>{props.descreption}</p>
      </div>
    </div>
  );
};
export default QuoteComponent;
