import bell from '../assets/bell.svg';
import alfa from '../assets/alfa.svg';

const NotificationBar = () => {
  return (
    <div className='notification-bar body'>
      <div className='notification-bar-bell'>
        <span>0</span>
        <img src={bell} alt='icon bell' />
      </div>
      <img className='notification-bar-alfa' src={alfa} alt='icon alfa' />
    </div>
  );
};

export default NotificationBar;
