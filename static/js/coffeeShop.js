"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};
//Add items to cart, coming from table

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};
//is calling an empty cart, cart total=0.00 and empty items

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2)); //cartTotal.html = html doc. total= incrementing
  //price per 1 every time. toFixed= method that convert a number in the digits(0-20), 
  // this case 2 digits(2)
};
//increment cart total everytime an item is added to the cart

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;
//amountSold=variable we are looking for, coffeeSold is a variable
//Number( put info we want ) = convert a value into a number
  $('#coffee-sold-counter').html(coffeeSold);
};
//getting the info jQuery.html and our new function adding coffee

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};

// (progressVal, statusMsg) arguments we are looking for
// adding the progressVal a value 'value', taking 2 args
//order status.htm file(get this other arg from the top = statusMsg, defining this
//args.)
//1. define what we want from the function =>{
  // where we want this. how we will get it;
  //define next one

//
// Add your event handlers below.
//
$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});
//button.on action, calling the function
