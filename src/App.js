import React, { useState, useEffect, useRef } from 'react';

import logo from './logo.svg';
let quotes = [
  "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
  'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
];
function App() {
  const [count, setCount] = useState(0);
  const savedCallback = useRef();

  function callback() {
    setCount(count + 1);
    if (count === quotes.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);


  return (
    <div className="bg-black h-screen flex justify-center items-center p-40">
      <div className="text-white  text-lg text-3xl">
        {count}
        {quotes[count]}
      </div>
    </div>
  );
}

export default App;
