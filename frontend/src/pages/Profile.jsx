import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAppointmentsClientThunk } from '../store/slices/client.slice'

const Profile = () => {
  const { user } = useSelector(state => state);
  const { client } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAppointmentsClientThunk(user.id));
  },[user])
  return (
    <main>
      <img src='' alt='' />
      <div>
        <p>
          {user.name} {user.surname}
        </p>
        <p>{user.number}</p>
        <p>{user.email}</p>
        <button>edit</button>
      </div>
      <h3>Historial de reservas</h3>
      <ul></ul>
    </main>
  );
};

export default Profile;
