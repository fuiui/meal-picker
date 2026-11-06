// 示例菜单与价格。餐次是建议，不是用餐时间限制。
const meals = [
  { id: 'egg-rice', name: 'Egg fried rice', price: 12, taste: 'non-spicy', category: 'rice', occasions: ['lunch', 'dinner'], description: 'Rice stir-fried with egg and vegetables.' },
  { id: 'tomato-noodles', name: 'Tomato egg noodles', price: 15, taste: 'non-spicy', category: 'noodles', occasions: ['lunch', 'dinner'], description: 'Noodles in a tomato broth with soft egg.' },
  { id: 'dumplings', name: 'Vegetable dumplings', price: 14, taste: 'non-spicy', category: 'dumplings', occasions: ['lunch', 'dinner'], description: 'Steamed dumplings with a vegetable filling.' },
  { id: 'mushroom-rice', name: 'Mushroom rice', price: 16, taste: 'non-spicy', category: 'rice', occasions: ['lunch', 'dinner'], description: 'A warm rice bowl topped with mushrooms.' },
  { id: 'chicken-rice', name: 'Chicken rice bowl', price: 20, taste: 'non-spicy', category: 'rice', occasions: ['lunch', 'dinner'], description: 'Chicken and greens served over steamed rice.' },
  { id: 'beef-noodles', name: 'Beef noodle soup', price: 25, taste: 'non-spicy', category: 'noodles', occasions: ['lunch', 'dinner'], description: 'A bowl of noodles with beef and a mild broth.' },
  { id: 'salmon-rice', name: 'Salmon rice bowl', price: 32, taste: 'non-spicy', category: 'rice', occasions: ['lunch', 'dinner'], description: 'Salmon with rice and mixed vegetables.' },
  { id: 'mapo-rice', name: 'Mapo tofu rice', price: 18, taste: 'spicy', category: 'rice', occasions: ['lunch', 'dinner'], description: 'Tofu in a spicy sauce, served with rice.' },
  { id: 'chilli-chicken', name: 'Chilli chicken set', price: 28, taste: 'spicy', category: 'rice', occasions: ['lunch', 'dinner'], description: 'Chilli-seasoned chicken with rice and greens.' },
  { id: 'hotpot', name: 'Mini hotpot', price: 30, taste: 'spicy', category: 'hotpot', occasions: ['lunch', 'dinner'], description: 'A small spicy broth with mixed vegetables and tofu.' },
  { id: 'spicy-fish', name: 'Spicy fish set', price: 35, taste: 'spicy', category: 'hotpot', occasions: ['lunch', 'dinner'], description: 'Fish in a chilli broth with a side of rice.' },
  { id: 'dry-pot', name: 'Dry pot vegetables', price: 29, taste: 'spicy', category: 'hotpot', occasions: ['lunch', 'dinner'], description: 'Mixed vegetables tossed in a spicy dry-pot sauce.' },
  { id: 'congee', name: 'Chicken congee', price: 10, taste: 'non-spicy', category: 'rice', occasions: ['breakfast'], description: 'Soft rice porridge with shredded chicken and spring onion.' },
  { id: 'oatmeal', name: 'Banana oatmeal', price: 12, taste: 'non-spicy', category: 'light', occasions: ['breakfast'], description: 'Warm oats topped with banana slices and seeds.' },
  { id: 'yogurt', name: 'Yogurt fruit bowl', price: 16, taste: 'non-spicy', category: 'light', occasions: ['breakfast'], description: 'Yogurt with berries, banana and a little granola.' },
  { id: 'sandwich', name: 'Egg sandwich', price: 15, taste: 'non-spicy', category: 'bakery', occasions: ['breakfast', 'lunch'], description: 'Egg, tomato and lettuce between slices of toast.' },
  { id: 'buns', name: 'Steamed vegetable buns', price: 8, taste: 'non-spicy', category: 'dumplings', occasions: ['breakfast'], description: 'Two fluffy buns filled with chopped vegetables.' },
  { id: 'wontons', name: 'Wonton soup', price: 14, taste: 'non-spicy', category: 'dumplings', occasions: ['breakfast', 'lunch', 'dinner'], description: 'Small filled wontons in a clear broth with greens.' },
  { id: 'sesame-noodles', name: 'Sesame chilli noodles', price: 13, taste: 'spicy', category: 'noodles', occasions: ['lunch', 'dinner'], description: 'Noodles tossed with sesame sauce and chilli oil.' },
  { id: 'stir-noodles', name: 'Vegetable stir-fried noodles', price: 16, taste: 'non-spicy', category: 'noodles', occasions: ['lunch', 'dinner'], description: 'Noodles stir-fried with carrots, greens and mushrooms.' },
  { id: 'salad', name: 'Chickpea salad', price: 22, taste: 'non-spicy', category: 'light', occasions: ['lunch', 'dinner'], description: 'Chickpeas, cucumber, tomato and mixed leaves.' },
  { id: 'wrap', name: 'Spicy chicken wrap', price: 20, taste: 'spicy', category: 'bakery', occasions: ['lunch', 'dinner'], description: 'Chicken, lettuce and chilli sauce in a toasted wrap.' },
  { id: 'toast', name: 'Peanut butter toast', price: 9, taste: 'non-spicy', category: 'bakery', occasions: ['breakfast'], description: 'Toast with peanut butter and banana slices.' },
  { id: 'pumpkin-soup', name: 'Pumpkin soup', price: 18, taste: 'non-spicy', category: 'light', occasions: ['lunch', 'dinner'], description: 'A warm pumpkin soup with seeds and a side of bread.' }
];
const categoryLabels = { rice: 'Rice & congee', noodles: 'Noodles', dumplings: 'Dumplings & buns', hotpot: 'Hotpot & mixed pots', light: 'Light meals', bakery: 'Bread & wraps' };
const occasionLabels = { breakfast: 'Breakfast', lunch: 'Lunch', dinner: 'Dinner' };
meals.forEach(function (meal) {
  meal.image = 'images/meals/' + meal.id + '.svg';
  meal.imageAlt = 'Illustration of ' + meal.name.toLowerCase() + ', not a restaurant photograph.';
});
