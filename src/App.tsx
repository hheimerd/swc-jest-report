import React from 'react';

function Comp({ anything }: { anything?: number }) {
  return <>{anything}</>;
}

let i = 0;

const t = true && {
  renderFn: () => (
      i++
  ),
}

t.renderFn();

const test1 = () => <Comp anything={4} />;
const test2 = () => <Comp />;
const test3 = () => {
  return <Comp anything={4} />;
};
const test4 = function () { return <Comp anything={4} />; };

function App() {
  return null;
}

export default App;
