function checkAge(age) {
  if (age >= 18) return "Совершеннолетний";
  else return "Несовершеннолетний";
}

function getDayName(dayNum) {
  switch (dayNum) {
    case 1: return "Понедельник";
    case 2: return "Вторник";
    case 3: return "Среда";
    case 4: return "Четверг";
    case 5: return "Пятница";
    case 6: return "Суббота";
    case 7: return "Воскресенье";
    default: return "Неизвестный день";
  }
}

function demoForLoop() {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    if (i === 4) continue;
    if (i === 8) break;
    result.push(i);
  }
  return result;
}

function demoWhile() {
  let counter = 3, output = [];
  while (counter > 0) {
    output.push(counter);
    counter--;
  }
  return output;
}

function demoDoWhile() {
  let num = 10, steps = 0;
  do {
    steps++;
    num = Math.floor(num / 2);
  } while (num > 0);
  return steps;
}

// Ждем загрузки страницы
window.onload = function() {
  const outputDiv = document.getElementById("output");
  
  if (outputDiv) {
    outputDiv.innerHTML = 
      "<h2>Результаты:</h2>" +
      "<p><b>if/else (16 лет):</b> " + checkAge(16) + "</p>" +
      "<p><b>switch (день 3):</b> " + getDayName(3) + "</p>" +
      "<p><b>for + break/continue:</b> [" + demoForLoop().join(", ") + "]</p>" +
      "<p><b>while:</b> [" + demoWhile().join(", ") + "]</p>" +
      "<p><b>do...while:</b> шагов = " + demoDoWhile() + "</p>";
    
    console.log("Вывод на страницу выполнен");
  } else {
    console.error("Элемент output не найден!");
  }
};