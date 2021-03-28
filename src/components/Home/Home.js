import React, {useEffect, useState} from 'react';

const Home = () => {
  const typerWords = ['classic logophiles', 'collectors', 'veteran typists'];
  const [userEmail, setUserEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

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
    let typeSpeed = 150;
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
    document.title = 'Home | Typescript Oasis';
    init();
  }, []);

  return (
    <main className='home'>
      <section className='splash'>
        <h1 className='splash__title'> Typewriter Oasis</h1>
        <h3 className='splash__title-sub'>
          <span>For</span> <span className='splash__dynamic'></span>
        </h3>
        <div className='splash__overlay'></div>
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
      <section className='home-history'>
        <div className='home-history__header'>
          <span>
            {' '}
            <h1>History of typewriters|</h1>
          </span>

          <img src='/home-header/1.jpg' alt='history-header-img' />
        </div>
        <div className='home-history__info'>
          <p>
            A typewriter is a mechanical or electromechanical machine for typing
            characters similar to those produced by a printer's movable type.
            Typically, a typewriter has an array of keys, and each one causes a
            different single character to be produced on the paper, by means of
            a ribbon with dried ink struck against the paper by a type element
            similar to the sorts used in movable type letterpress printing.
          </p>
          <p>
            On some typewriters, a separate type element (called a typebar)
            corresponds to each key; others use a single type element (such as a
            typeball or disc) with a different portion of it used for each
            character. At the end of the nineteenth century, the term typewriter
            was also applied to a person who used a typing machine.
          </p>
          <p>
            The first commercial typewriters were introduced in 1874, but did
            not become common in offices until after the mid-1880s. The
            typewriter quickly became an indispensable tool for practically all
            writing other than personal handwritten correspondence. It was
            widely used by professional writers, in offices, business
            correspondence in private homes, and by students preparing term
            papers.
          </p>
          <p>
            Typewriters were a standard fixture in most offices up to the 1980s.
            Thereafter, they began to be largely supplanted by computers.
            Nevertheless, typewriters remain common in some parts of the world,
            are required for a few specific applications, and are popular in
            certain subcultures. In many Indian cities and towns, typewriters
            are still used, especially in roadside and legal offices due to a
            lack of continuous, reliable electricity. The QWERTY keyboard
            layout, developed for typewriters, remains the standard for computer
            keyboards.
          </p>
          <span className='home-history__info__source'>
            <i>Source: Wikipedia</i>
          </span>
        </div>
      </section>
      <section className='home-subscribe'>
        <div className='home-subscribe__header'>
          <span>
            {' '}
            <h1>Subscribe to our newsletter|</h1>
            {isSubscribed ? (
              <h3 className='home-subscribe__header__thanks'>
                Thank you, and welcome to The Typewriter Oasis!
              </h3>
            ) : (
              <form
                className='home-subscribe__header__form'
                onSubmit={onFormSubmit}
              >
                <input
                  type='text'
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder='user@email.com'
                  className='email-input'
                  required
                />
                <button>Subscribe</button>
              </form>
            )}
          </span>
          <img src='/home-header/2.jpg' alt='history-header-img' />
        </div>
      </section>
    </main>
  );
};

export default Home;
