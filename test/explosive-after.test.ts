import { IExplodable, Primer, Wire, Igniter, Bomber } from '../src/explosive-testable';

describe('Explosion Test: After', () => {
  let tnt: IExplodable;
  let primer: Primer;
  let wire: Wire;
  let igniter: Igniter;
  let bomber: Bomber;

  beforeEach(() => {
    // Mocking the explode method of TNT to avoid console.warn
    tnt = {
      explode: jest.fn(() => true),
    };

    primer = new Primer();
    wire = new Wire(primer);
    igniter = new Igniter(wire);
    bomber = new Bomber(igniter);
  });

  it('primer로 TNT를 장전할 수 있어야 한다.', () => {
    const result = primer.arm(tnt);
    
    expect(result).toEqual(true);
  });

  it('primer가 장전되면 TNT도 폭파되어야 한다.', () => {
    primer.arm(tnt);
    const result = primer.detonate();

    expect(tnt.explode).toHaveBeenCalled();
    expect(result).toEqual(true);
  });

  it('wire가 점화되면 TNT도 폭파되어야 한다.', () => {
    primer.arm(tnt);
    const result = wire.ignite();

    expect(tnt.explode).toHaveBeenCalled();
    expect(result).toEqual(true);
  });

  it('점화기는 충전이 가능해야 한다.', () => {
    const result = igniter.charge();

    expect(result).toEqual(true);
  });

  it('TNT를 장전하지 않고 igniter를 작동하면 target이 폭파되지 않아야 한다.', () => {
    igniter.charge();
    const result = igniter.ignite();

    console.log(result);

    expect(result.targetTerminated).toBeFalsy();
    expect(result.statusOfIgniter).toBeFalsy();
  });

  it('TNT를 장전하고 igniter를 작동하면 target이 폭파되어야 한다.', () => {
    primer.arm(tnt);
    igniter.charge();
    const result = igniter.ignite();

    console.log(result);

    expect(result.targetTerminated).toBeTruthy();
    expect(result.statusOfIgniter).toBeFalsy();
  });

  it('폭파병이 점화기를 충전할 수 있어야 한다.', () => {
    const result = bomber.charge();

    expect(result).toEqual(true);
  });

  it('TNT를 장전하지 않고 폭파병에게 점화를 지시하면 target이 폭파되지 않아야 한다.', () => {
    bomber.charge();
    const result = bomber.ignite();

    expect(result.targetTerminated).toBeFalsy();
    expect(result.statusOfIgniter).toBeFalsy();
  });

  it('TNT를 장전하고 폭파병에게 점화를 지시하면 target이 폭파되어야 한다.', () => {
    primer.arm(tnt);
    bomber.charge();
    const result = bomber.ignite();

    expect(result.targetTerminated).toBeTruthy();
    expect(result.statusOfIgniter).toBeFalsy();
  });
});