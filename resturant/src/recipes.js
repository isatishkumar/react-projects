import React from 'react';
import bruschetta from './images/bruchetta.svg'
import salad from './images/greek salad.jpg'
import desert from './images/lemon dessert.jpg'

const recipes = [
    { 
      id: 1,
      title: "Greek salad",
      price: 12.99,
      image: salad,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      id: 2,
      title: "Bruchetta",
      price: 5.99,
      image: bruschetta,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: 4.78,
      image: desert,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  
  ];
  
  export default recipes;
  
  