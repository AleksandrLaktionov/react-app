import { useEffect, useState } from 'react';
import './Clock.scss';

const Clock = () => {

  const [state, setStat] = useState(new Date())

  useEffect(() => setTimeout(() => setStat(new Date()), 1000))

  return (
    <div className='clock'>
      <span id='center'></span>
      <span id='hours' style={{
        transform: `rotate(${state.getHours() * 30 - 180}deg)`
      }}></span>
      <span id='minutes' style={{
        transform: `rotate(${state.getMinutes() * 6 - 180}deg)`
      }}></span>
      <span id='seconds' style={{
        background: 'red',
        transform: `rotate(${state.getSeconds() * 6 - 180}deg)`
      }}></span>
      <span className='time__breakfast'>9</span>
      <span className='time__lunch'>12</span>
      <span className='time__afternoon-tea'>3</span>
      <span className='time__dinner'>6</span>
      <span className='time__1'></span>
      <span className='time__2'></span>
      <span className='time__4'></span>
      <span className='time__5'></span>
      <span className='time__7'></span>
      <span className='time__8'></span>
      <span className='time__10'></span>
      <span className='time__11'></span>
    </div>);
};

export default Clock;