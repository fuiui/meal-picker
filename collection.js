// 先筛选，再生成卡片；与推荐页使用同一份菜单数据。
const mealList = document.getElementById('meal-list');
const browseForm = document.getElementById('browse-form');
const browseCategory = document.getElementById('browse-category');
const browseOccasion = document.getElementById('browse-occasion');
function renderCollection() {
  const visibleMeals = meals.filter(function (meal) {
    return (browseCategory.value === 'any' || meal.category === browseCategory.value)
      && (browseOccasion.value === 'any' || meal.occasions.includes(browseOccasion.value));
  });
  mealList.replaceChildren();
  visibleMeals.forEach(function (meal) {
    mealList.append(createMealCard(meal, 'h2'));
  });
  document.getElementById('collection-count').textContent = visibleMeals.length
    ? visibleMeals.length + ' of ' + meals.length + ' meals'
    : 'No meals match these choices. Try another food type or mealtime, or show all meals.';
}
browseForm.addEventListener('submit', function (event) { event.preventDefault(); });
browseCategory.addEventListener('change', renderCollection);
browseOccasion.addEventListener('change', renderCollection);
document.getElementById('reset-browse').addEventListener('click', function () {
  browseForm.reset();
  renderCollection();
});
browseForm.reset();
renderCollection();
