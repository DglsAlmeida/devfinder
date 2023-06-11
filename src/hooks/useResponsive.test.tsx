import { renderHook } from '@testing-library/react-hooks';
import { useResponsive } from './useResponsive';

describe('useResponsive', () => {
  it('isMobile should be false', () => {   
    const { result } = renderHook(() => useResponsive())

    expect(result.current.isMobile).toBe(false)
  })

  it('isMobile should be true', () => {
    global.innerWidth = 500;
    
    const { result } = renderHook(() => useResponsive())

    expect(result.current.isMobile).toBe(true)
  })
})