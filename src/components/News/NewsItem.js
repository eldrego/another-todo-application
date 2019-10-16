import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ news }) => {
  return (
    <div className="col-md-3">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title text-truncate" title={news.title}>{news.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-truncate">{news.content}</h6>
          <p className="card-text text-muted small">
            {`Published at: ${news.publishedAt}`}
          </p>
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link small">
            {`Source: ${news.source.name}`}
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string,
    source: PropTypes.object,
    publishedAt: PropTypes.string,
  }).isRequired
};

export default NewsItem;
