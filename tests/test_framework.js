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
  },
  arrayToBe: (assertion) => {
    for(var i=0;i<assertion.length;i++){
      if(expectation[i] !== assertion[i]){
        console.error('fail')
        return false
      }
    }
    console.log('pass')
    return true
    }
  }
)
export {
  describe,
  it,
  expect,
  matchers
}
