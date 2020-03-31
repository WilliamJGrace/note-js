const describe = (message, fn) => {
  console.log(message);
  fn();
}
const it = (message, fn) => describe('   ' + message, fn)
const expect = (expectation) => matchers(expectation)
const matchers = (expectation) => ({
  toBe: (assertion) => {
    if (expectation === assertion) {
      console.log('pass');
      return true
    } else {
      console.error('fail')
      return false
    }
  }
})
export {
  describe,
  it,
  expect,
  matchers
}
