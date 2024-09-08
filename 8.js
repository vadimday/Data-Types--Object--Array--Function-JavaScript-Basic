function User(
  fullName,
  age,
  gender,
  email,
  country,
  salary,
  position,
  department
) {
  this.fullName = fullName;
  this.age = age;
  this.gender = gender;
  this.email = email;
  this.country = country;
  this.salary = salary;
  this.position = position;
  this.department = department;
}

const users = [
  new User(
    "Иван Иванов",
    28,
    "мужчина",
    "ivan@example.com",
    "Россия",
    75000,
    "Разработчик",
    "ИТ"
  ),
  new User(
    "Анна Петрова",
    24,
    "женщина",
    "anna@example.com",
    "Россия",
    60000,
    "Дизайнер",
    "Креатив"
  ),
  new User(
    "Дмитрий Смирнов",
    35,
    "мужчина",
    "dmitry@example.com",
    "Россия",
    85000,
    "Менеджер",
    "Управление"
  ),
  new User(
    "Екатерина Сидорова",
    27,
    "женщина",
    "ekaterina@example.com",
    "Беларусь",
    65000,
    "Аналитик",
    "Маркетинг"
  ),
  new User(
    "Алексей Кузнецов",
    31,
    "мужчина",
    "alexey@example.com",
    "Казахстан",
    70000,
    "Инженер",
    "Технологии"
  ),
  new User(
    "Марина Крылова",
    29,
    "женщина",
    "marina@example.com",
    "Украина",
    58000,
    "Контент-менеджер",
    "Маркетинг"
  ),
  new User(
    "Николай Николаев",
    40,
    "мужчина",
    "nikolay@example.com",
    "Россия",
    90000,
    "Директор",
    "Управление"
  ),
  new User(
    "Вера Соколова",
    26,
    "женщина",
    "vera@example.com",
    "Россия",
    72000,
    "Разработчик",
    "ИТ"
  ),
  new User(
    "Ольга Федорова",
    33,
    "женщина",
    "olga@example.com",
    "Россия",
    65000,
    "HR-специалист",
    "Кадры"
  ),
  new User(
    "Михаил Васильев",
    37,
    "мужчина",
    "mikhail@example.com",
    "Россия",
    80000,
    "Арт-директор",
    "Креатив"
  ),
];

console.log(users);
