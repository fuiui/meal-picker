// 推荐页和清单页共用同一个函数。headingTag 用于保持正确的标题层级。
function createMealCard(meal, headingTag) {
  const card = document.createElement('article');
  const image = document.createElement('img');
  const name = document.createElement(headingTag);
  const details = document.createElement('p');
  const description = document.createElement('p');
  image.src = meal.image;
  image.alt = meal.imageAlt;
  image.width = 280;
  image.height = 180;
  name.textContent = meal.name;
  details.textContent = 'Example price: ¥' + meal.price + ' · ' + (meal.taste === 'spicy' ? 'Spicy' : 'Non-spicy');
  description.textContent = meal.description;
  // 用纯文字赋值，不把食物数据当 HTML 执行。
  card.append(name, image, details, description);
  return card;
}
