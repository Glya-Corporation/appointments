import imgStar from '../assets/star.svg';

const GetStar = rating => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<img src={imgStar} key={i} width='100px' />);
  }
  return stars;
};

export default GetStar;
