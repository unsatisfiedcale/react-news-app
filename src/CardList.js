import React from "react";

function CardList(props) {
  return (
    <div className="container">
      {props.news.map((article, index) => (
        <div className="card" key={index}>
          <img
            src={article.urlToImage}
            alt={article.title}
            className="card__image"
          />
          <div className="card__body">
            <span className="tag tag-red">Gündem</span>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
          </div>
          <div className="card__footer">
            <div class="url">
              <a href={article.url}>Haber Kaynağına Git!</a>

              <div class="publishedAt">
                <small>{article.publishedAt}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
