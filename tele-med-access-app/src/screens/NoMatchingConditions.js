import UpRight from '../../src/assets/svgs/arrow-up-right.svg'
import React, { useNavigate } from "react";
import PrimaryButton from "../components/Button/PrimaryButton";

const NoMatchingConditions = ({ chatResponse }) => {
  const navigate = useNavigate();
  const articles = chatResponse.report?.articles || [];

  return (
    <>
      {articles.map((article) => (
        <section>
          <a href={article.urls.web}>
            <aside>
              <h2>{article.name}</h2>
              <image src={UpRight} alt="up-right" width="15" />
            </aside>
            <p>{article.snippet}</p>
          </a>
        </section>
      ))}
      <PrimaryButton onClick={() => navigate("/condition")} disabled={false}>
        Start over
      </PrimaryButton>
    </>
  );
};

export default NoMatchingConditions;
