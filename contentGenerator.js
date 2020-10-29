// const { wordCache } = require('./db.js');
// const mongoose = require('mongoose')

const wordCache = [{
    word: 'Bedevil \\ bi-ˈde-vəl \\',
    definition: 'To torment or harass',
    quote: '\"I\'m positively bedeviled with meetings et ceterea!\"',
    photoLink: 'https://pyxis.nymag.com/v1/imgs/1e9/c8b/7c421ef0a4f919b05bd15b3eaf2d5d0055-23-moira-rose-schitts-creek.rsocial.w1200.jpg',
},{
    word: 'Encumber \\ in-ˈkəm-bər \\',
    definition: 'To weigh down or burden',
      quote: '“The last time I felt this emotionally encumbered, I was playing Lady Macbeth on a Crystal Skies cruise ship during Shakespeare at Sea Week!”',
    photoLink: 'https://thespinoff.co.nz/wp-content/uploads/2019/08/Moira-s5.jpg',
  },{
    word: 'Oxidize \\ ˈäk-sə-ˌdīz \\',
    definition: 'To dehydrogenate especially by the action of oxygen',
      quote: '“Perhaps it’s this nay-saying reticence that caused your past relationships to… oxidize.”',
    photoLink: 'https://cdn.theatlantic.com/thumbor/9Lvn08oCPoTFmAxfzGNw7lSF9v8=/1664x0:5664x4000/500x500/media/img/mt/2019/03/schitts/original.jpg',
},{
    word: 'Pettifogging \\ ˈpe-​tē-​ˌfȯ-​giŋ \\',
    definition: 'Arguing over trivial things',
    quote: '“Alexis, now is not the time for pettifogging!”',
    photoLink: 'https://miro.medium.com/max/618/1*14KS161KsX3QOZtpj1tWiQ.jpeg',
},{
    word: 'Irksome \\ ˈərk-səm \\',
    definition: 'Annoying or tedious',
      quote: '“Why must you be so constantly irksome?”',
    photoLink: 'https://i.insider.com/5e8e0efb29d6d9579f6eca5b?width=1100&format=jpeg&auto=webp',
  } 
]

const randomInteger = (objectSize) => {
  return Math.floor(Math.random() * Math.floor(objectSize));
};

const wordGenerator = () => {
  const number = randomInteger(wordCache.length);
  return wordCache[number];
};

const generatedWord = wordGenerator();

const word = generatedWord.word;
const definition = generatedWord.definition;
const quote = generatedWord.quote;
const photoLink = generatedWord.photoLink;


const content = {
  word,
  definition,
  quote,
  photoLink,
};

module.exports = content;