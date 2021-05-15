export const prepareWords = (numberOfWords, wordsLength) => {
  let requiredWords = [];

  words.map(w => {
    if (w.length === +wordsLength) {
      requiredWords.push(w);
    }
  });

  if (requiredWords.length < numberOfWords) {
    return requiredWords;
  }

  let kekWords = getRandomArrayElements(requiredWords, numberOfWords);

  return kekWords;
};

const getRandomArrayElements = (arr, count) => {
  let shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;

  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }

  return shuffled.slice(min);
};

const words = [
  "Человек",
  "год",
  "время",
  "дело",
  "жизнь",
  "день",
  "рука",
  "раз",
  "работа",
  "слово",
  "место",
  "лицо",
  "друг",
  "глаз",
  "вопрос",
  "дом",
  "сторона",
  "страна",
  "мир",
  "случай",
  "голова",
  "ребенок",
  "сила",
  "конец",
  "вид",
  "система",
  "часть",
  "город",
  "отношение",
  "женщина",
  "деньги",
  "земля",
  "машина",
  "вода",
  "отец",
  "проблема",
  "час",
  "право",
  "нога",
  "решение",
  "дверь",
  "образ",
  "история",
  "власть",
  "закон",
  "война",
  "бог",
  "голос",
  "тысяча",
  "книга",
  "возможность",
  "результат",
  "ночь",
  "стол",
  "имя",
  "область",
  "статья",
  "число",
  "компания",
  "народ",
  "жена",
  "группа",
  "развитие",
  "процесс",
  "суд",
  "условие",
  "средство",
  "начало",
  "свет",
  "пора",
  "путь",
  "душа",
  "уровень",
  "форма",
  "связь",
  "минута",
  "улица",
  "вечер",
  "качество",
  "мысль",
  "дорога",
  "мать",
  "действие",
  "месяц",
  "государство",
  "язык",
  "любовь",
  "взгляд",
  "мама",
  "век",
  "школа",
  "цель",
  "общество",
  "деятельнось",
  "организация",
  "президент",
  "комната",
];
