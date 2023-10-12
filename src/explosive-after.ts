export interface IExplodable {
  explode(): void;
}

export class TNT implements IExplodable {
  // TNT가 폭발한다 - 액션
  explode() {
    console.log('\x1b[31m%s\x1b[0m', 'TNT - Boom!');
    // 전역변수를 사용하는것을 통해, '부득이하게 mocking이 필요한 기능'을 표현
    tnts.pop();
    numOfTnt--;
    return true;
  }
}

export class Primer {
  private tnt?: IExplodable | null = null;

  // 폭발물을 준비한다 - 계산
  arm(tnt: IExplodable) {
    console.log('Primer - Arming');
    this.tnt = tnt;
    return true;
  }

  // 뇌관을 폭발시킨다 - 액션(계산)
  detonate() {
    console.log('\x1b[31m%s\x1b[0m', 'Primer - Detonate');
    if (this.tnt) {
      return this.tnt.explode();
    } else {
      return false;
    }
  }
}

export class Wire {
  constructor(private primer: Primer) {}

  // 전선을 폭발시킨다 - 액션(계산)
  ignite() {
    console.log('\x1b[31m%s\x1b[0m', 'Wire - Ignite');
    return this.primer.detonate();
  }
}

export class Igniter {
  private _charged = false;

  constructor(private wire: Wire) {}

  // 점화기를 준비한다 - 계산
  charge() {
    console.log('Igniter - Charged');
    this._charged = true;
    return true;
  }

  // 점화기를 폭발시킨다 - 액션(계산)
  ignite() {
    let targetTerminated = false;
    if (this._charged) {
      console.log('\x1b[31m%s\x1b[0m', 'Igniter - Ignite');
      this._charged = false;
      targetTerminated = this.wire.ignite() as boolean;
    } else {
      console.log('Nothing happened...');
    }
    return {
      targetTerminated,
      statusOfIgniter: this._charged,
    };
  }
}

export class Bomber {
  constructor(private igniter: Igniter) {}

  // 점화기를 충전한다 - 계산
  charge() {
    console.log('Bomber: Charging');
    this.igniter.charge();
    return true;
  }

  // 점화기를 작동시킨다 - 액션(계산)
  ignite() {
    console.log('Bomber: Igniting');
    return this.igniter.ignite();
  }
}

// 전역변수 - 데이터
let numOfTnt = 3;
const tnts: IExplodable[] = [];
for (let i = 0; i < numOfTnt; i++) {
  tnts.push(new TNT());
}

/**
 * 점화기를 준비하고 폭약을 폭발시킨다. - 액션
 */
export function chargeAndExplode2() {
  // Create TNT and arm the primer
  const tnt = tnts[0];
  const primer = new Primer();
  primer.arm(tnt);

  const igniter = new Igniter(new Wire(primer));
  const bomber = new Bomber(igniter);

  bomber.charge();
  return bomber.ignite();
}

const resultOfExplosion2 = chargeAndExplode2();

console.log('target terminated:', resultOfExplosion2.targetTerminated);
console.log('status of igniter:', resultOfExplosion2.statusOfIgniter)
console.log('num of tnt left:', tnts.length)