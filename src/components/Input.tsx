import "./styles.scss";

const Input = () => (
  <section className="input">
    <div className="form-label">Текст:</div>
    <textarea
      className="form-control input-text"
      placeholder="Введите текст сюда"
    />
  </section>
);

export default Input;
