import "./styles.scss";

interface IText {
  text: string;
}

const Output = ({ text }: IText) => {
  return (
    <section className="output">
      <p className="mb-1">Вывод:</p>
      <article id="style-1">
        <p className="output-text">{text}</p>
      </article>
    </section>
  );
};

export default Output;
