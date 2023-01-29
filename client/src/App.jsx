function App() {
  const foo = (n = 0) => {
    let count = n;
    return function (y) {
      count++;
      count += y;
      console.log(count);
    };
  };

  let addTen = foo();
  let addTenn = foo(5);
  addTen(1);
  addTen(1);
  addTenn(22);

  return <div className="App">123</div>;
}

export default App;
