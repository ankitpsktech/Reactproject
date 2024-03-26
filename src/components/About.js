import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/NoteContext1';

const About = () => {
  // Access state and function from the context
  const { state, update } = useContext(NoteContext);

  useEffect(() => {
    update();
  }, []);

  return (
    <div className='App'>
      <h4>About Psk Technologies<br/> {state.name} ---- {state.year}</h4>
    </div>
  );
}

export default About;
