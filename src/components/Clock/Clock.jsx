import { useEffect, useState } from 'react';
import './Clock.scss';

const Clock = () => {

  const [state, setStat] = useState(new Date())

  useEffect(() => setInterval(() => setStat(new Date()), 1000))

  return (
    <div className='clock'>
      <span id='hours' style={{
        transform: `rotate(${state.getHours() * 30}deg)`
      }}></span>
      <span id='minutes' style={{
        transform: `rotate(${state.getMinutes() * 6}deg)`
      }}></span>
      <span id='seconds' style={{
        background: 'red',
        transform: `rotate(${state.getSeconds() * 6}deg)`
      }}></span>
    </div>);
};

export default Clock;
