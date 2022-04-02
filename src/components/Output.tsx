import "./styles.scss";
import "./outputStyles.scss";

const Output = ({ arrOfMatches, text }: any) => {
  arrOfMatches.forEach((regArr: any) => {
    const [reg, lastIndex] = regArr;
    const word = text.substring(reg.index, lastIndex);
    console.log(word, reg.index, lastIndex);
  });

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
