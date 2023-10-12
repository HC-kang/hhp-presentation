import { chargeAndExplode } from '../src/explosive';

describe('Explosion Test: Before', () => {
  it('모든 준비가 완료되면 목표가 폭파된다.', () => {
    const result = chargeAndExplode();
    expect(result.targetTerminated).toBe(true);
    expect(result.statusOfIgniter).toBe(false);
    expect(result.numOfTntLeft).toBe(2);
  });
});

