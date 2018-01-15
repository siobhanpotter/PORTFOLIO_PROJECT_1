const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');

const Project      = require('../models/project');

const projectData = [{
  Name: 'Bob Dylan',
  image: 'http://img.wennermedia.com/featured-promo-782/bob-dylan-ff51a1fc-5814-4717-8e71-9a49271fb47a.jpg',
  topSongs: 'Blowing in the wind, Hurricane, Dont think twice its alright',
  about: 'Bob Dylan (/ˈdɪlən/; born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, musician, author and painter, who has been an influential figure in popular music and culture for more than five decades. Much of his most celebrated work dates from the 1960s, when he became a reluctant "voice of a generation"[2], which became anthems for the Civil Rights Movement and anti-war movement. Leaving behind his initial base in the American folk music revival, his six-minute single "Like a Rolling Stone", recorded in 1965, enlarged the range of popular music.',
  genre: 'Folk'
}, {
  Name: 'Jimi Hendrix',
  image: 'https://www.thenational.ae/image/policy:1.238072:1499337498/image/jpeg.jpg?f=16x9&w=1024&$p$f$w=2589da4',
  topSongs: 'Hey Joe, All Along the Watchtower, The Wind Cries Mary',
  about: 'James Marshall "Jimi" Hendrix (born Johnny Allen Hendrix; November 27, 1942 – September 18, 1970) was an American rock guitarist, singer, and songwriter. Although his mainstream career spanned only four years, he is widely regarded as one of the most influential electric guitarists in the history of popular music, and one of the most celebrated musicians of the 20th century. The Rock and Roll Hall of Fame describes him as "arguably the greatest instrumentalist in the history of rock music".[1]',
  genre: 'Rock'
}, {
  name: 'Joan Baez',
  image: 'http://meccalecca.com/wp-content/uploads/2016/05/joan-baez-sixties.jpg',
  topSongs: 'Diamonds & Rust, The Night the Drove Old Dixie Down, Silver Dagger',
  about: 'Joan Chandos Baez (/baɪz/;[1] born January 9, 1941) is an American folk singer, songwriter, musician, and activist[2] whose contemporary folk music often includes songs of protest or social justice,[3] Baez has performed publicly for over 59 years, releasing over 30 albums. Fluent in Spanish and English, she has also recorded songs in at least six other languages. She is regarded as a folk singer, although her music has diversified since the counterculture days of the 1960s and now encompasses everything from folk rock and pop to country and gospel music.',
  genre: 'Folk'
}, {
  name: 'The Velvet Underground',
  image: 'https://s3.amazonaws.com/vf-images/wp-content/uploads/2017/03/Velvet-Underground-Nico1.png',
  topSongs: 'Heroin, Rock & Roll, Venus in Furs',
  about: 'The Velvet Underground was an American rock band formed in 1964 in New York City by singer/guitarist Lou Reed, multi-instrumentalist John Cale, guitarist Sterling Morrison, and drummer Angus MacLise (replaced by Moe Tucker in 1965). The band\'s integration of rock and the avant-garde achieved little commercial success during their existence,[5] but they are now recognized as one of the most influential bands in rock, underground, experimental, and alternative music.[6] The provocative subject matter, musical experimentation, and often nihilistic attitudes explored in the band\'s work would prove influential in the development of punk rock and new wave music.[5]',
  genre: 'Rock'
}, {
  name: 'Simon & Garfunkel',
  image: 'http://img.wennermedia.com/social/rs-156387-20120910-simon-garfunkel-624x420-1347289064.jpg',
  topSongs: 'Mrs. Robinson, The Sound of Silence, Bridge over Troubled Water',
  about: 'Simon & Garfunkel were an American folk rock duo consisting of singer-songwriter Paul Simon and singer Art Garfunkel. They were one of the best-selling music groups of the 1960s and became counterculture icons of the decade\'s social revolution, alongside projects such as the Beatles, the Beach Boys, and Bob Dylan. Their biggest hits—including "The Sound of Silence" (1964), "Mrs. Robinson" (1968), "The Boxer" (1969), and "Bridge over Troubled Water" (1970)—reached number one on singles charts worldwide.',
  genre: 'Folk'
}, {
  name: 'Led Zeppelin',
  image: 'http://img.wennermedia.com/social/led-zeppelin-iv-album-release-review-35c87652-3510-4318-9145-25a24db837f5.jpg',
  topSongs: 'When the Levee Breaks, Whola Lotta Love, Dazed and Confused',
  about: 'Led Zeppelin were an English rock band formed in London in 1968. The group consisted of guitarist Jimmy Page, singer Robert Plant, bassist and keyboardist John Paul Jones, and drummer John Bonham. The band\'s heavy, guitar-driven sound has led them to be cited as one of the progenitors of heavy metal. Their style drew from a wide variety of influences, including blues, psychedelia, and folk music.',
  genre: 'Rock'
}];


mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Project.create(projectData))
  .then(projects => console.log(`${projects.length} projects created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
