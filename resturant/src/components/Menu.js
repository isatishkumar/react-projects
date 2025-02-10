import React from "react"
import recipes from '../recipes'
import Swal from 'sweetalert2'


const name = (props) => {

    const handleOrder = function() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!!!",
                text: "Your order has been placed.",
                icon: "success"
              });
            }
          });
    }
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This weeks Specials!!</h2>
        <button>Order Online</button>
      </div>
      <div className='cards'>
       {
        recipes.map(
            recipe => <div className='menu-items' key={recipe.id}>
                <img src={recipe.image} alt=''/>
                <div className='menu-content'>
                    <div className='heading'>
                        <h5>{recipe.title}</h5>
                        <p>{recipe.price}</p>
                    </div>
                    <p>{recipe.description}</p>
                    <button className='orderbtn' onClick={handleOrder}>Order Now</button>
                </div>
             </div>
        )
       } 
      </div>
    </div>
    

  )
};

export default name;
