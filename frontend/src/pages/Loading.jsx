import LogoLoading from '../assets/loanding.svg';
import alfa from '../assets/alfa.png';

const Loading = () => {
  return (
    <main className='body body-loading'>
      <img src={alfa} alt='log alfa' />
      <img className='loading' src={LogoLoading} alt='icon loading' />
    </main>
  );
};

export default Loading;
