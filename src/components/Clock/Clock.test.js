import { render } from '@testing-library/react';
import Clock from './Clock'

test('render clock', () => {
  const { asFragment } = render(<Clock />)
})