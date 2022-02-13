// Функция для получения случайного числа в заданно диапазоне
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  };
  if (max < min) {
    [min, max] = [max, min]
  };
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция определения длины строки
const stringCount = (string, sign) => {
  return text.length <= sign ? true : false;
}
console.log(getRandomInt(1,30));
console.log(getRandomInt(1,30));
