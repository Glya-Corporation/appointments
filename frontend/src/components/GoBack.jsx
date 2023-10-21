import { useNavigate } from 'react-router-dom';
import arrowBackAlt from '../assets/arrow_back_alt.svg';

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div className='goback-container'>
      <img src={arrowBackAlt} alt='icono' onClick={() => navigate(-1)} />
    </div>
  );
};

export default GoBack;
