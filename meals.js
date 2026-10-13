// 示例菜单，不是真实餐厅报价。口味由本项目定义，不作为过敏或饮食安全建议。
// 数组保存全部食物；每个对象保存一道食物的属性。
const meals = [
  { id: 'egg-rice', name: 'Egg fried rice', price: 12, taste: 'non-spicy', description: 'Rice stir-fried with egg and vegetables.' },
  { id: 'tomato-noodles', name: 'Tomato egg noodles', price: 15, taste: 'non-spicy', description: 'Noodles in a tomato broth with soft egg.' },
  { id: 'dumplings', name: 'Vegetable dumplings', price: 14, taste: 'non-spicy', description: 'Steamed dumplings with a vegetable filling.' },
  { id: 'mushroom-rice', name: 'Mushroom rice', price: 16, taste: 'non-spicy', description: 'A warm rice bowl topped with mushrooms.' },
  { id: 'chicken-rice', name: 'Chicken rice bowl', price: 20, taste: 'non-spicy', description: 'Chicken and greens served over steamed rice.' },
  { id: 'beef-noodles', name: 'Beef noodle soup', price: 25, taste: 'non-spicy', description: 'A bowl of noodles with beef and a mild broth.' },
  { id: 'salmon-rice', name: 'Salmon rice bowl', price: 32, taste: 'non-spicy', description: 'Salmon with rice and mixed vegetables.' },
  { id: 'mapo-rice', name: 'Mapo tofu rice', price: 18, taste: 'spicy', description: 'Tofu in a spicy sauce, served with rice.' },
  { id: 'chilli-chicken', name: 'Chilli chicken set', price: 28, taste: 'spicy', description: 'Chilli-seasoned chicken with rice and greens.' },
  { id: 'hotpot', name: 'Mini hotpot', price: 30, taste: 'spicy', description: 'A small spicy broth with mixed vegetables and tofu.' },
  { id: 'spicy-fish', name: 'Spicy fish set', price: 35, taste: 'spicy', description: 'Fish in a chilli broth with a side of rice.' },
  { id: 'dry-pot', name: 'Dry pot vegetables', price: 29, taste: 'spicy', description: 'Mixed vegetables tossed in a spicy dry-pot sauce.' }
];

// 四张本地类型示意图复用于相应菜品，并非每道菜的真实照片。
// 单独指定不同于默认饭碗的图片，避免重复写十二次相同路径。
const mealIllustrations = {
  'tomato-noodles': 'noodles',
  'beef-noodles': 'noodles',
  'dumplings': 'dumplings',
  'hotpot': 'hotpot',
  'dry-pot': 'hotpot',
  'spicy-fish': 'hotpot'
};
const illustrationLabels = {
  rice: 'Rice-bowl type illustration, not a photograph of this dish.',
  noodles: 'Noodle-bowl type illustration, not a photograph of this dish.',
  dumplings: 'Dumpling type illustration, not a photograph of this dish.',
  hotpot: 'Mixed-pot type illustration, not a photograph of this dish.'
};
meals.forEach(function (meal) {
  const type = mealIllustrations[meal.id] || 'rice';
  meal.image = 'images/' + type + '.svg';
  meal.imageAlt = illustrationLabels[type];
});
