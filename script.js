function calculatePrice() {
  let price = 100; // Начальная цена

  // Получение значений из выпадающих списков
  let education = parseFloat(document.getElementById("education").value);
  let networth = parseFloat(document.getElementById("networth").value);
  let caste = parseInt(document.getElementById("caste").value);

  // Рассчитываем цену с учетом образования и богатства
  price *= education * networth;

  // Добавляем цену за касту
  price += caste;

  // Обработка умений
  let skills = document.querySelectorAll(".skill");
  skills.forEach(skill => {
    if (skill.checked) {
      price += parseInt(skill.value);
    }
  });

  // Обработка возраста
  let age = document.querySelectorAll("input[name='age']:checked");
  price *= parseFloat(age[0].value);

  // Обработка репутации
  let reputation = document.querySelectorAll(".reputation");
  reputation.forEach(rep => {
    if (rep.checked) {
      price *= parseFloat(rep.value);
    }
  });

  // Обработка негативной репутации
  let flatReputation = document.querySelectorAll(".reputation-flat");
  flatReputation.forEach(rep => {
    if (rep.checked) {
      price += parseInt(rep.value);
    }
  });

  // Отображение результата
  document.getElementById("result").textContent = "Final Price: $" + price.toFixed(2);
}
