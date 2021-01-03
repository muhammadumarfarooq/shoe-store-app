import React from 'react';
import './styles/product-text-box.scss';
interface Props {
  slug: string
  name: string
  detail: string
  review: number
  price: number
}

const BlogSingleTextBox: React.FC<Props> = (props) => {
  const { slug, name, detail, review, price } = props;
  return (
    <div className="product--text-box">
      <div className="text-wrapper">
        <p className="product--title" color="indigo-color">{name}</p>
        <div className="date-time-box">
          <p className="date-time-box--text">{review}</p>
          <div className="date-time-box--dot"/>
          <p className="date-time-box--text">{price}</p>
        </div>
        <p className="product--detail w-300" color="indigo-color">{detail}</p>
      </div>
      <a href={`/product/${slug}`} className="product-btn">
        Read More
      </a>
    </div>
  );
};

BlogSingleTextBox.propTypes = {};

export default BlogSingleTextBox;
