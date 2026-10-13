// forEach 遍历菜单，每道食物生成一张卡片。数据与推荐页完全一致。
const mealList = document.getElementById('meal-list');
meals.forEach(function (meal) {
  mealList.append(createMealCard(meal, 'h2'));
});
