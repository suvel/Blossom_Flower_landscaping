import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import useCountUp from './useCountUp.js';

function CountUpProbe({ target }) {
  const [value, ref] = useCountUp(target, { duration: 2000 });
  return <div ref={ref}>{value}</div>;
}

describe('useCountUp', () => {
  beforeEach(() => {
    class FakeIntersectionObserver {
      constructor(callback) {
        this.callback = callback;
      }

      observe() {
        this.callback([{ isIntersecting: true }]);
      }

      disconnect() {}
    }
    vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver);

    let now = 0;
    vi.stubGlobal('performance', { now: () => now });
    vi.stubGlobal('requestAnimationFrame', (cb) => {
      now += 2000;
      cb(now);
      return 0;
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('counts up to the target once the element is in view', () => {
    render(<CountUpProbe target={38} />);
    expect(screen.getByText('38')).toBeInTheDocument();
  });

  it('starts at 0 before the target is reached', () => {
    vi.stubGlobal('IntersectionObserver', class {
      observe() {}

      disconnect() {}
    });
    render(<CountUpProbe target={52} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
