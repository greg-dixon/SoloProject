const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gdixon:by7HzvMRqb6QJvm@cluster0.cyfcx.mongodb.net/Solo?retryWrites=true&w=majority', { useNewUrlParser: true })

const db = mongoose.connection;
db.on('error', () => { console.log("There's an error with mongoose") });
db.once('open', function() {
  console.log("You're connected to Mongoose")
});

const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
    definition: {
    type: String,
    required: true,
  },
    quote: {
    type: String,
    required: true,
  },
    photoLink: {
    type: String,
    required: true,
  },
})

const Word = mongoose.model('Word', wordSchema)


const bedevil = new Word({
    word: 'Bedevil \\ bi-ˈde-vəl \\',
    definition: 'To torment or harass',
    quote: '\"I\'m positively bedeviled with meetings et ceterea!\"',
    photoLink: 'https://pyxis.nymag.com/v1/imgs/1e9/c8b/7c421ef0a4f919b05bd15b3eaf2d5d0055-23-moira-rose-schitts-creek.rsocial.w1200.jpg',
})

const encumber = new Word({
    word: 'Encumber \\ in-ˈkəm-bər \\',
    definition: 'To weigh down or burden',
      quote: '“The last time I felt this emotionally encumbered, I was playing Lady Macbeth on a Crystal Skies cruise ship during Shakespeare at Sea Week!”',
    photoLink: 'https://thespinoff.co.nz/wp-content/uploads/2019/08/Moira-s5.jpg',
  })

const oxidize = new Word({
    word: 'Oxidize \\ ˈäk-sə-ˌdīz \\',
    definition: 'To dehydrogenate especially by the action of oxygen',
      quote: '“Perhaps it’s this nay-saying reticence that caused your past relationships to… oxidize.”',
    photoLink: 'https://cdn.theatlantic.com/thumbor/9Lvn08oCPoTFmAxfzGNw7lSF9v8=/1664x0:5664x4000/500x500/media/img/mt/2019/03/schitts/original.jpg',
})

const pettifogging = new Word({
    word: 'Pettifogging \\ ˈpe-​tē-​ˌfȯ-​giŋ \\',
    definition: 'Arguing over trivial things',
    quote: '“Alexis, now is not the time for pettifogging!”',
    photoLink: 'https://miro.medium.com/max/618/1*14KS161KsX3QOZtpj1tWiQ.jpeg',
});

const irksome = new Word( {
    word: 'Irksome \\ ˈərk-səm \\',
    definition: 'Annoying or tedious',
      quote: '“Why must you be so constantly irksome?”',
    photoLink: 'https://i.insider.com/5e8e0efb29d6d9579f6eca5b?width=1100&format=jpeg&auto=webp',
  } 
)


const wordCache = [bedevil, encumber, oxidize, pettifogging, irksome];


module.exports = { Word, wordCache };

// wordCache.forEach(el => el.save((function(err,result){ 
//     if (err){ 
//         console.log(err); 
//     } 
//     else{ 
//         console.log(result) 
//     } 
// }) ))

// const counter = Word.count();
// console.log(counter)
// const random = Math.floor(Math.random() * counter)
//  console.log(random)

// const count = () => {
//     Word.count(function (err, count) {
//         counter = count
//         console.log(counter)
//     })
// }

// const find = Word.findOne({ word: bedevil }).exec((err, result) => {
//   console.log(result);
//   return result;
// }
// )

const wordGenerator = () => {
    // Word.count().exec(function (err, count) {
    //    
    //     console.log(random)
    //     Word.findOne().skip(random).exec(
    //         function (err, result) {
    //             console.log(result)
    //             return result;
    //         })
    // })
}

// const generatedWord = wordGenerator();

// const word = generatedWord.word;
// const definition = generatedWord.definition;
// const quote = generatedWord.quote;
// const photoLink = generatedWord.photoLink;





 
  // {
  //   word: 'Irksome \\ ˈərk-səm \\',
  //   definition: 'Annoying or tedious',
  //     quote: '“Why must you be so constantly irksome?”',
  //   photoLink: 'https://i1.wp.com/metro.co.uk/wp-content/uploads/2020/07/PRI_153616594.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1',
  // },

  // https://daytimeconfidential.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTcwOTAyMTI5MjI4MTI5NTk0/catherine-ohara-moira-rose.png


// module.exports = wordCache;
