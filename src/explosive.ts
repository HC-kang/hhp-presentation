let isCharged = false;

/**
 * 점화기를 준비하고 폭약을 폭발시킨다. - 액션
 */
export function chargeAndExplode() {
  // Create TNT and arm the primer
  let tnt = 3;
  console.log('Primer - Arming');

  console.log('Bomber: Charging');

  console.log('Igniter - Charged');

  console.log('Bomber: Igniting');

  // Charge the igniter
  isCharged = true;

  let targetTerminated = false;

  if (isCharged) {
    console.log('\x1b[31m%s\x1b[0m', 'Igniter - Ignite');

    console.log('\x1b[31m%s\x1b[0m', 'Wire - Ignite');

    console.log('\x1b[31m%s\x1b[0m', 'Primer - Detonate');
    if (tnt--) {
      console.log('\x1b[31m%s\x1b[0m', 'TNT - Boom!');
    }
    isCharged = false;
    targetTerminated = true;
  } else {
    console.log('Nothing happened...');
  }

  return {
    targetTerminated,
    statusOfIgniter: isCharged,
    numOfTntLeft: tnt,
  };
}

// Execute the function
const resultOfExplosion = chargeAndExplode();

console.log('target terminated:', resultOfExplosion.targetTerminated);
console.log('status of igniter:', resultOfExplosion.statusOfIgniter);
console.log('num of tnt left:', resultOfExplosion.numOfTntLeft);
