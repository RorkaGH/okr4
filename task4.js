const items = [
  { category: 'Красный', value: 11 },
  { category: 'Зелёный', value: 22 },
  { category: 'Красный', value: 33 },
  { category: 'Белый', value: 44 },
  { category: 'Зелёный', value: 55 }
];

const res = {};

for (const item of items) {
  if (res[item.category]) {
    res[item.category] += item.value;
  } else {
    res[item.category] = item.value;
  }
}

console.log(res);

