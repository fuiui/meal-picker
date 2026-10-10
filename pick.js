// 1. 找到需要读取或更新的 HTML 元素。
const form = document.getElementById('meal-form');
const budgetSelect = document.getElementById('budget');
const tasteSelect = document.getElementById('taste');
const pickButton = document.getElementById('pick-button');
const result = document.getElementById('meal-result');
const count = document.getElementById('candidate-count');

// 2. 同时满足预算和口味才保留。select 的值是字符串，价格需要转为数字。
function getCandidates() {
  const budget = budgetSelect.value;
  const taste = tasteSelect.value;
  return meals.filter(function (meal) {
    const withinBudget = budget === 'any' || meal.price <= Number(budget);
    const matchesTaste = taste === 'any' || meal.taste === taste;
    return withinBudget && matchesTaste;
  });
}

// 3. 改变条件后清除旧推荐，不能继续展示不符合新条件的结果。
function resetResult() {
  const candidates = getCandidates();
  count.textContent = candidates.length + ' matching meal(s).';
  result.textContent = candidates.length === 0
    ? 'No meals match these choices. Try a higher budget or a different taste.'
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
  const card = document.createElement('article');
  const name = document.createElement('h3');
  const details = document.createElement('p');
  const description = document.createElement('p');
  name.textContent = meal.name;
  details.textContent = 'Example price: ¥' + meal.price + ' · ' + (meal.taste === 'spicy' ? 'Spicy' : 'Non-spicy');
  description.textContent = meal.description;
  // textContent 把数据当文字显示，不把它当成 HTML 执行。
  card.append(name, details, description);
  result.replaceChildren(card);
  pickButton.textContent = 'Pick again';
});

budgetSelect.addEventListener('change', resetResult);
tasteSelect.addEventListener('change', resetResult);

// 5. 初始化：明确恢复默认值；初始化成功后才启用按钮。
form.reset();
resetResult();
pickButton.disabled = false;
