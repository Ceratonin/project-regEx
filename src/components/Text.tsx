import "./styles.scss";

const Text = () => (
  <section className="text">
    <div className="form-label">Текст:</div>
    <textarea
      className="form-control"
      placeholder="Введите текст сюда"
    />
  </section>
);

export default Text;
