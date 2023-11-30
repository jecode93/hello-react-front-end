import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  if (error) {
    return (
      <>
        <h2>Something went wront</h2>
        <p>{error}</p>
      </>
    );
  }

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <h1>Greeting from the API</h1>
      <h3>{ greeting }</h3>
    </>
  );
};

export default Greeting;
