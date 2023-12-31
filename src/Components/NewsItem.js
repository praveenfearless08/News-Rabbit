import React from "react";

const NewsItem = (props) => {
    let {title, description, imageUrl,newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card">
        <div style={{
          display : 'flex',
          justifyContent : 'flex-end',
          position : 'absolute',
          right : 0}}>
        <span className="badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>

        </div>
          <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/img/2023/01/24/1600x900/breaking_news_jan_24_1674521545190_1674521545491_1674521545491.jpeg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>

            <a rel="noreferrer"  href={newsUrl} target="_blank"className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
