import "./styles.scss";

const Expression = () => (
  <section className="expression">
    <div className="input-group">
      <div className="input-group-prepend expressionStyle">
        <span
          className="input-group-text"
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          id="basic-addon1"
        >
          Выражение:
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Введите регулярное выражение сюда"
      />
    </div>
  </section>
);

export default Expression;
