import axios from 'axios';

const photoName = [
  {
    path: "https://www.generatormix.com/images/anime-character/shikamaru-nara.jpg",
  },
  {
    path: "https://www.generatormix.com/images/anime-character/monkey-d.-luffy.jpg",
  },
  {
    path: "https://www.generatormix.com/images/anime-character/katuski-bakugo.jpg",
  },
  {
    path: "https://www.generatormix.com/images/anime-character/orochimaru.jpg",
  },
  {
    path: "https://www.generatormix.com/images/anime-character/himura-kenshin.jpg",
  },
  {
    path: "https://www.generatormix.com/images/anime-character/yatogami.jpg",
  },
];
export const generateProfilePict = ()=>{
  const index = Math.floor(Math.random() * photoName.length);
  return photoName[index].path;
}