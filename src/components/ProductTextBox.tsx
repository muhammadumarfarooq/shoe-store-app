import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
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
        <Link to={`/product/${slug}`} className="product--title" color="indigo-color">{name}</Link>
        <div className="date-time-box">
          <div className="product--rating">
            <Rating name="half-rating-read" defaultValue={review} precision={0.5} readOnly/>
          </div>
          <p className="date-time-box--text">${price}</p>
        </div>
        <p className="product--detail w-300" color="indigo-color">{detail}</p>
      </div>
      {/*<a href={`/product/${slug}`} className="product-btn">*/}
      {/*  Read More*/}
      {/*</a>*/}
    </div>
  )
    ;
};

BlogSingleTextBox.propTypes = {};

export default BlogSingleTextBox;
