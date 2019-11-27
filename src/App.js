import React, { useState, useEffect, useRef } from 'react';
import posed from 'react-pose';

let quotes = [
  {
    __html: `
    “Sesungguhnya Allah menyuruh kamu untuk menunaikan amanah kepada yang berhak menerimanya, dan (menyuruh kamu) apabila kalian menetapkan hukum di antara manusia supaya kamu menetapkannya dengan adil. Sesungguhnya Allah memberikan pengajaran yang sebaik-baiknya kepadamu. Sesungguhnya Allah adalah Maha Mendengar lagi Maha Melihat”. [An-Nisa : 58]"`
  },
  {
    __html: `“Wahai orang-orang yang beriman janganlah kamu mengkhianati Allah dan Rasul (Muhammad) dan (juga) janganlah kamu mengkhianati amanah-amanah yang dipercayakan kepadamu sedangkan kamu mengetahui” [Al-Anfal : 27]`
  },
  {
    __html: `“Kecelakaan besarlah bagi orang-orang yang curang. Yaitu orang-orang yang apabila menerima takaran dari orang lain mereka meminta dipenuhi. Dan apabila mereka menakar atau menimbang untuk orang lain, mereka mengurangi. Tidaklah oran-orang itu yakin, bahwa sesungguhnya mereka akan dibangkitkan. Pada suatu hari yang besar. Yaitu hari ketika manusia berdiri menghadap Tuhan semesta alam” [Al-Muthaffifin : 1-6]`
  }
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

    let id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-black h-screen flex justify-center items-center p-40">
      <p
        className="text-white  text-lg text-4xl p-10"
        dangerouslySetInnerHTML={quotes[count]}
      ></p>
    </div>
  );
}

export default App;
