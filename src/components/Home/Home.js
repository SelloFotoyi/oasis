import React, {useEffect, useState} from 'react';

const Home = () => {
  const typerWords = ['typers', 'veterans', 'journalists'];
  const [dynamicText, setDynamicText] = useState('');

  const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  };

  //Type method
  TypeWriter.prototype.type = function () {
    //current index of word
    const currentIndex = this.wordIndex % this.words.length;
    //get full text of current word
    const fulltxt = this.words[currentIndex];

    //check if deleting
    if (this.isDeleting) {
      //Remove a character
      this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
      //add a character
      this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //set initial type speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //check if the word is complete
    if (!this.isDeleting && this.txt === fulltxt) {
      //make pause at end of word
      typeSpeed = this.wait;
      //set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      //move to the next word
      this.wordIndex++;
      //pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  };

  const init = () => {
    const txtElement = document.querySelector('.splash__dynamic');
    new TypeWriter(txtElement, typerWords, 3000);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <main className='home'>
      <section className='splash'>
        <h1 className='splash__title'> Typewriter Oasis</h1>
        <h3 className='splash__title-sub'>
          For <span className='splash__dynamic'></span>
        </h3>
      </section>
      <section className='collection'>
        <h2 className='collection__title'>Our Collection</h2>
        <div className='collection__grid'>
          <div className='collection__grid__item'>
            <span>Olivetti</span>
            <img src='/home-grid/olivetti.jpg' alt='olivetti' />
          </div>
          <div className='collection__grid__item'>
            <span>Hermes</span>
            <img src='/home-grid/hermes.jpg' alt='hermes' />
          </div>
          <div className='collection__grid__item'>
            <span>Royal</span>
            <img src='/home-grid/royal.jpg' alt='royal' />
          </div>
          <div className='collection__grid__item'>
            <span>Underwood</span>
            <img src='/home-grid/underwood.jpg' alt='underwood' />
          </div>
          <div className='collection__grid__item'>
            <span>Smith Corona</span>
            <img src='/home-grid/smith-corona.jpg' alt='smith corona' />
          </div>
          <div className='collection__grid__item'>
            <span>Olympia</span>
            <img src='/home-grid/Olympia.jpg' alt='olympia' />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
