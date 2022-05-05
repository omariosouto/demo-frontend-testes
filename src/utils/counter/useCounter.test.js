import { renderHook, act } from '../test/react-testing-library';
import useCounter from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter())

  act(() => {
    result.current.increment();
  })

  expect(result.current.count).toBe(1)
})