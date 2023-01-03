const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out each item of ingredients:

let i = 0; 
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that does the same thing

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

ingredients.reverse();
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}