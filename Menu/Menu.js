/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  for (let i = 0; i < array.length; i++){
    let listItem[i]= document.createElement('li')
    let listItem[i].textContent = array[i]
  }
  
*/
const menuNav = document.querySelector('.header')
menuNav.appendChild(createMenu(menuItems))
function createMenu (array){
  const menu = document.createElement('div');
  const menuList = document.createElement('ul');
  for(let i = 0; i < array.length; i++){
    let listItem = document.createElement('li');
     listItem.textContent = array[i];
     menuList.appendChild(listItem); 
  }
  array.forEach(item => {
    let listItem = document.createElement('li');
    menuList.appendChild(listItem);
    listItem.textContent += item;
  })
  // array.map(element => {
  //   let listItem = ' '

  // })
  
  // Setup structure of elements
  menu.appendChild(menuList);
  
  // Set class names
  menu.classList.add('menu');
  //Set text content

  // button events
  let menuBtn = document.querySelector('img')
  console.log(menuBtn)
  menuBtn.addEventListener('click', event =>{
    menu.classList.toggle('menu--open');
    console.log('menu clicked')
  })
return menu;
}
