// 1. 找到需要读取或更新的 HTML 元素。
const form = document.getElementById('meal-form');
const budgetSelect = document.getElementById('budget');
const tasteSelect = document.getElementById('taste');
const categorySelect = document.getElementById('category');
const occasionSelect = document.getElementById('occasion');
const pickButton = document.getElementById('pick-button');
const result = document.getElementById('meal-result');
const count = document.getElementById('candidate-count');

// 2. 同时满足四个筛选条件才保留。select 的值是字符串，价格需要转为数字。
function getCandidates() {
  const budget = budgetSelect.value;
  const taste = tasteSelect.value;
  return meals.filter(function (meal) {
    const withinBudget = budget === 'any' || meal.price <= Number(budget);
    const matchesTaste = taste === 'any' || meal.taste === taste;
    const matchesCategory = categorySelect.value === 'any' || meal.category === categorySelect.value;
    const matchesOccasion = occasionSelect.value === 'any' || meal.occasions.includes(occasionSelect.value);
    return withinBudget && matchesTaste && matchesCategory && matchesOccasion;
  });
}

// 3. 改变条件后清除旧推荐，不能继续展示不符合新条件的结果。
function resetResult() {
  const candidates = getCandidates();
  count.textContent = candidates.length + ' matching meal(s).';
  result.textContent = candidates.length === 0
    ? 'No meals match these choices. Try any food type or mealtime, or reset the filters.'
    : 'Choose Pick a meal to get a suggestion.';
  pickButton.textContent = 'Pick a meal';
}

// 4. submit 事件同时支持鼠标、触屏和键盘提交。
form.addEventListener('submit', function (event) {
  event.preventDefault(); // 不发送表单或刷新网页，结果直接显示在本页。
  const candidates = getCandidates();
  if (candidates.length === 0) {
    resetResult();
    return; // 没有候选就结束，避免从空数组里取数据。
  }

  // Math.random() 小于 1，向下取整后得到 0 到 length - 1 的下标。
  const index = Math.floor(Math.random() * candidates.length);
  const meal = candidates[index];
  // 结果区标题是 h2，所以每道菜用 h3；清单页复用函数但用 h2。
  const card = createMealCard(meal, 'h3');
  result.replaceChildren(card);
  pickButton.textContent = 'Pick again';
});

budgetSelect.addEventListener('change', resetResult);
tasteSelect.addEventListener('change', resetResult);
categorySelect.addEventListener('change', resetResult);
occasionSelect.addEventListener('change', resetResult);
document.getElementById('reset-filters').addEventListener('click', function () {
  form.reset();
  resetResult();
});

// 5. 初始化：明确恢复默认值；初始化成功后才启用按钮。
form.reset();
resetResult();
pickButton.disabled = false;
