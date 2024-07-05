import ArticleContainer from "./index";
import Heading from "../Heading";
import getTriageInfo from "../../utils/getTriageInfo";

const Articles = ({ articles = [], onClick }) => {
  return (
    <>
      {articles.map(({ name, content }, index) => (
        <ArticleContainer
          className={getTriageInfo(content.triage.triage).type}
          onClick={() => onClick(index)}
          key={name}
        >
          <section>
            <h4>{index + 1}</h4>
            <div>
              <Heading as="h2" kind="report">
                {name}
              </Heading>
              <p>{content.triage.triage_message}</p>
            </div>
          </section>
        </ArticleContainer>
      ))}
    </>
  );
};

export default Articles;
