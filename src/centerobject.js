import pant from './image/pant.jpg';
import pant1 from './image/black.jpg';
import pant2 from './image/blackpant.jpg';
import pant3 from './image/blackpant1.jpg';
import pant4 from './image/blackpant2.jpg';
import pant5 from './image/blackpant3.jpg';
import pant6 from './image/blackpant4.jpg';
import pant7 from './image/blackpant5.jpg';
import pant8 from './image/blackpant6.jpg';
import pant9 from './image/graypant.jpg';
import pant10 from './image/graypant1.jpg';
import pant11 from './image/graypant2.jpg';
import pant12 from './image/gray3.jpg';
import pant13 from './image/greenpant.jpg';
import pant14 from './image/greenpant1.jpg';
import pant15 from './image/greenpant2.jpg';
import pant16 from './image/greenpant3.jpg';
import pant17 from './image/greenpant4.jpg';
import pant18 from './image/whitepant.jpg';
import pant19 from './image/whitepant1.jpg';
import pant20 from './image/whitepant2.jpg';
import pant21 from './image/whitepant3.jpg';
import pant22 from './image/whitepant4.jpg';
import pant23 from './image/bluepant.jpg';
import pant24 from './image/bluepant1.jpg';
import pant25 from './image/bluepant2.jpg';
import pant26 from './image/bluepant3.jpg';
import pant27 from './image/bluepant4.jpg';
import pant28 from './image/redpant.jpg';
import pant29 from './image/redpant1.jpg';
import pant30 from './image/redpant2.jpg';
import pant31 from './image/redpant3.jpg';
import Product from './Product';
   export  const val = [
    {image:[pant ] , quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'black' , Categary: 'pant',saler:"new", title: "this is New Item", Content:"Amazon Essentials Men's Slim-Fit Stretch Golf Pant"},
    {image:[pant1 , pant2 , pant3] , quantity:'20' , ExtraLarge:'29$', Normal:'19$', Small:'14$', Large:'$24', Color:'black',  Categary: 'pant',saler:"new", title: "this is New Item", Content:"GRACE KARIN Womens Casual High Waist Pencil Pants with Bow-Knot Pockets for Work"},
    {image:[pant2] , quantity:'20' , ExtraLarge:'4$', Normal:'2$', Small:'1$', Large:'$3', Color:'black' , Categary: 'pant',saler:"new", title: "this is New Item", Content:"Amazon Essentials Men's Slim-Fit Casual Stretch Khaki"},
    {image:[pant3] , quantity:'2' , ExtraLarge:'40$', Normal:'20$', Small:'10$', Large:'$30',  Color:'black',  Categary: 'pant',saler:"new", title: "this is New Item", Content:"Under Armour Boys' Baseball Pant"},
    {image:[pant4] , quantity:'5' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'black',  Categary: 'pant',saler:"new", title: "this is New Item", Content:"LEE Men's Total Freedom Stretch Relaxed Fit Flat Front Pant"},
    {image:[pant5] , quantity:'30' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'black',  Categary: 'pant',saler:"new", title: "this is New Item", Content:"Champro Boys' Traditional Knicker Style Knee-Length Baseball Pants"},
    {image:[pant6] , quantity:'1' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'black',  Categary: 'pant',saler:"best", title: "in Men's Baseball Pants", Content:"Dockers Men's Slim Fit Easy Khaki Pants"},
    {image:[pant8] , quantity:'5' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25',  Color:'black',  Categary: 'pant',saler:"new", title: "this is New Item", Content:"Dockers Men's Slim Fit Easy Khaki Pants"},
    {image:[pant7] , quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'black',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant9] , quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'gray',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant10], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'gray',  Categary: 'pant', saler:"best", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant11], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'gray',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant12], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'gray',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant13], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'green',  Categary: 'pant', saler:"best", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant14], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'green',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant15], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'green',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant16], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'green',  Categary: 'pant', saler:"best", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant17], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'green',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant18], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'white',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant19], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'white',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant20], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'white',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant21], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'white',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant22], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'white',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant23], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'blue',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant24], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'blue',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant25], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'blue',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant26], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'blue',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant27], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'blue',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant28], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'red',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant29], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'red',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant30], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'red',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},
    {image:[pant31], quantity:'20' , ExtraLarge:'30$', Normal:'20$', Small:'15$', Large:'$25', Color:'red',  Categary: 'pant', saler:"new", title: "this is New Item", Content:"Haggar Men's Cool 18 Stria Hidden Expandable Waistband Plain Front Pant"},

];