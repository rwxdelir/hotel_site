import img1 from './../../assets/images/img1.jpg';
import img2 from './../../assets/images/img02.jpg';
import img3 from './../../assets/images/img03.jpg';
import img4 from './../../assets/images/img04.jpg';
import img5 from './../../assets/images/img05.jpg';
import img6 from './../../assets/images/img06.jpg';
import img7 from './../../assets/images/img07.jpg';
import img8 from './../../assets/images/img08.jpg';
import img9 from './../../assets/images/img09.jpg';
import img10 from './../../assets/images/img10.jpg';
import img11 from './../../assets/images/img11.jpg';
import img12 from './../../assets/images/img12.jpg';


let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]

const cards = [];
for (let i = 0; i < 183; i++) {
  let price = `${Math.floor(Math.random() * (10000 - 1000) + 1000)}`;
  let imgNumber = `${Math.floor(Math.random() * (12 - 1) + 1)}`;
  cards.push(
    {
      id: i, 
      lux: Math.floor(Math.random() * (2 - 0) + 0), 
      number: Math.floor(Math.random() * (999 - 100) + 100), 
      recalls: Math.floor(Math.random() * (200 - 0) + 0), 
      cost: price.split("", 1).join(" ") + " " + price.split("",3).join("") + "₽", 
      rating: Math.random() * (5 - 1) + 1,
      firstImg: images[Math.floor(Math.random() * (12 - 1) + 1)], 
      secondImg: images[Math.floor(Math.random() * (12 - 1) + 1)], 
      thirdImg: images[Math.floor(Math.random() * (12 - 1) + 1)], 
      fourthImg: images[Math.floor(Math.random() * (12 - 1) + 1)]
    })
}

export default cards;
