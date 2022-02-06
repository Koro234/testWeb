const users = [{"id":1,"username":"user1","surname":"Мозгов","firstName":"Антон","secondName":""},{"id":2,"username":"user2","surname":"Тонких","firstName":"Антон","secondName":""},{"id":3,"username":"user3","surname":"Тонких","firstName":"Григорий","secondName":""},{"id":4,"username":"user4","surname":"Васильев","firstName":"Влад","secondName":""},{"id":5,"username":"user5","surname":"Быстров","firstName":"Григорий","secondName":""},{"id":6,"username":"user6","surname":"Смагин","firstName":"Дмитрий","secondName":""},{"id":7,"username":"user7","surname":"Мозгов","firstName":"Александр","secondName":""},{"id":8,"username":"user8","surname":"Кузнецов","firstName":"Альберт","secondName":""},{"id":9,"username":"user9","surname":"Петров","firstName":"Борис","secondName":""},{"id":10,"username":"user10","surname":"Васильев","firstName":"Дмитрий","secondName":""},{"id":11,"username":"user11","surname":"Мозгов","firstName":"Дмитрий","secondName":""},{"id":12,"username":"user12","surname":"Быстров","firstName":"Иван","secondName":""},{"id":13,"username":"user13","surname":"Петренко","firstName":"Борис","secondName":""},{"id":14,"username":"user14","surname":"Некрасов","firstName":"Денис","secondName":""},{"id":15,"username":"user15","surname":"Петров","firstName":"Александр","secondName":""},{"id":16,"username":"user16","surname":"Добрый","firstName":"Борис","secondName":""},{"id":17,"username":"user17","surname":"Быстров","firstName":"Борис","secondName":""},{"id":18,"username":"user18","surname":"Васильев","firstName":"Александр","secondName":""},{"id":19,"username":"user19","surname":"Кузнецов","firstName":"Алексей","secondName":""},{"id":20,"username":"user20","surname":"Мозгов","firstName":"Альберт","secondName":""},{"id":21,"username":"user21","surname":"Кожин","firstName":"Сергей","secondName":""},{"id":22,"username":"user22","surname":"Васильев","firstName":"Альберт","secondName":""},{"id":23,"username":"user23","surname":"Мозгов","firstName":"Алексей","secondName":""},{"id":24,"username":"user24","surname":"Быстров","firstName":"Олег","secondName":""},{"id":25,"username":"user25","surname":"Петров","firstName":"Денис","secondName":""}];
const tasks = [{"id":"65b9242b-1976-458a-801e-67a614c59d76","subject":"Анализ","description":"","creationAuthor":1,"executor":1,"creationDate":"2022-01-22","planStartDate":"2022-01-22","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"7ebc65b3-98d9-422f-ba7f-9615bd214068","subject":"Планирование","description":"","creationAuthor":1,"executor":1,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"44d22c4d-03cf-4fa9-9e4b-39353b68325a","subject":"Проектирование","description":"","creationAuthor":1,"executor":2,"creationDate":"2022-01-22","planStartDate":"2022-01-25","planEndDate":"2022-01-26","endDate":"2022-01-22","status":1,"order":1},{"id":"a0d7abc4-9b22-43f8-bf5a-1881ec3afa86","subject":"Разработка","description":"","creationAuthor":1,"executor":3,"creationDate":"2022-01-22","planStartDate":"2022-01-25","planEndDate":"2022-01-28","endDate":"2022-01-22","status":1,"order":1},{"id":"bbc69d23-3feb-450a-a6ce-7293c45d012f","subject":"Тестирование","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-27","planEndDate":"2022-01-28","endDate":"2022-01-22","status":1,"order":1},{"id":"3f63f1fe-c374-40d3-8dbe-ca0a71889aea","subject":"Заместитель","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"68bde071-8417-40de-818d-f821c3d30f20","subject":"Наблюдатель","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"280ad70e-0b54-4d8c-964e-9bb3b2573c28","subject":"Декоратор","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"8404aecd-94d1-48ff-a354-23cd39c57837","subject":"Фасад","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},
{"id":"33b5471e-02b8-49f5-b4e4-909c208b0c84","subject":"Адаптер","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"f8fad7f5-47f2-42bf-86dd-0a1c6201e612","subject":"Строитель","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"8da4b76f-97f9-4e6f-a186-0555a44b6daa","subject":"Мост","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"be6212ce-f33d-4be7-b900-00b8f2d22948","subject":"Команда","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"152908c3-4580-4da9-8ad6-a3e027bb079a","subject":"Итератор","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"296221a1-22ad-43bc-af38-90519ae4b167","subject":"Посредник","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"56cb0a46-b78c-461b-b6e8-6db8c0a97d85","subject":"Прототип","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"3cc17886-1e0c-48f6-b69c-6d8e617739b1","subject":"Компоновщик","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"755c0445-b083-4c96-bbed-3e5647ba33db","subject":"Снимок","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},
{"id":"89c606d3-7d7f-4e20-9051-6c911943ceae","subject":"Состояние","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"c414118b-a08e-4419-8a24-5fc0680ba1f2","subject":"Стратегия","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"b4156a9c-2d4f-4f58-9e2c-d9a86b412d36","subject":"Одиночка","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"c5c47775-f161-43c7-92f9-bdde07c083ba","subject":"Легковес","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"e2ac1dd2-62a6-4754-bf74-1c3a21eae2a4","subject":"Посетитель","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"e0989c77-70e1-4015-beef-7b21cba1538d","subject":"Фабричный метод","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"28f49ccb-7280-4058-867e-e987409d937e","subject":"Абстрактная фабрика","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1},{"id":"ce1c551a-17f8-4ca5-9cea-6c02a8fe620e","subject":"Цепочка обязанностей","description":"","creationAuthor":1,"executor":null,"creationDate":"2022-01-22","planStartDate":"2022-01-24","planEndDate":"2022-01-25","endDate":"2022-01-22","status":1,"order":1}];

// fetch('https://varankin_dev.elma365.ru/api/extensions/2a38760e-083a-4dd0-aebc-78b570bfd3c7/script/users')
//     .then(response => {
//         if (response.status >= 200 && response.status < 300)
//         {
//             return Promise.resolve(response);
//         }
//         else
//         {
//             return Promise.reject(new Error(response.statusText));
//         }
//     })
//     .then(response => response.json())
//     .then(data => console.log('data', data))
//     .catch(error => console.error('error', error));


// fetch('https://varankin_dev.elma365.ru/api/extensions/2a38760e-083a-4dd0-aebc-78b570bfd3c7/script/tasks')
//     .then(response => {
//         if (response.status >= 200 && response.status < 300)
//         {
//             return Promise.resolve(response);
//         }
//         else
//         {
//             return Promise.reject(new Error(response.statusText));
//         }
//     })
//     .then(response => response.json())
//     .then(data => console.log('data', data))
//     .catch(error => console.error('error', error));

// класс пользователя
class User { 
    constructor(User) {
        this.id = User.id;
        this.username = User.username;
        this.firstName = User.firstName;
        this.secondName = User.secondName;
        this.surname = User.surname;
    }
    id;
    username;
    firstName;
    secondName;
    surname;
    htmlElement;
}
// класс задачи
class Task {
    constructor(Task) {
        this.id = Task.id;
        this.order = Task.order;
        this.planStartDate = Task.planStartDate;
        this.planEndDate = Task.planEndDate;
        this.status = Task.status;
        this.creationAuthor = Task.creationAuthor;
        this.executor = Task.executor;
        this.subject = Task.subject;
        this.description = Task.description;
        this.creationDate = Task.creationDate;
        this.endDate = Task.endDate;
    }
    id;
    order;
    planStartDate;
    planEndDate;
    status;
    creationAuthor;
    executor;
    subject;
    description;
    creationDate;
    endDate;
    user;
    htmlElement;
}

const mainContainer = document.getElementById('mainContainer');
const mainBacklog = document.getElementById('mainBacklog');
const nowDate = document.getElementById('nowDate');
const numbersDays = document.getElementsByClassName('number-day');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

let now = new Date();
let leftDate = new Date();
let rightDate = new Date();
let navWeek = 0;
const userArray = [];
const tasksOnDesc = [];
const taskOnBacklog = [];
// открытие приложения
function Load() {
    UpdateDatesLine();
    users.forEach(f => CreateUserContainer(new User(f)));
    tasks.forEach(f => SortTasks(new Task(f)));
}
// создание контейнеров для users
function CreateUserContainer(User) {
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');
    userContainer.id = User.id;
    userContainer.ondragover = allowDrop;
    mainContainer.appendChild(userContainer);
    const userName = document.createElement('div');
    userName.classList.add('user-name');
    userName.innerText = `${User.firstName} ${User.secondName} ${User.surname}`;
    userContainer.appendChild(userName);
    for (var i = 0; i < 7; i++)
    {
        let dayElement = document.createElement('div');
        dayElement.classList.add('day');
        userContainer.append(dayElement);
    }
    const events = document.createElement('div');
    events.classList.add('events');
    userContainer.appendChild(events);
    User.htmlElement = userContainer;
    userArray.push(User);
}
//
function SortTasks(Task) {
    if (Task.executor)
    {
        userArray.forEach(f => {
            if (f.id === Task.executor)
            {
                CreateTaskOnDesk(f, Task)
                tasksOnDesc.push(Task);
            }
        });
    }
    else
    {
        taskOnBacklog.push(Task);
        CreateTaskOnBacklog(Task);
    }
}
//
function CreateTaskOnDesk(User, Task) {
    console.log(Task);
    Task.user = User;
    var startDate = new Date(Task.planStartDate);
    var endDate = new Date(Task.planEndDate);
    var startDay = startDate.getDay();
    startDay = startDay === 0 ? 7 : (startDay);
    var endDay = endDate.getDay();
    endDay = endDay === 0 ? 7 : (endDay);
    if (startDate < endDate) 
    {
        if ((startDate >= leftDate && startDate <= rightDate) && (endDate >= leftDate && endDate <= rightDate))
        {
            var span = endDay - startDay + 1;
            var event = ConstructorTaskElement(Task, startDay, span);
            event.classList.add('event-start', 'event-end');
            Task.htmlElement = event;
            User.htmlElement.lastChild.appendChild(event);
        }
        else if (startDate >= leftDate && startDate <= rightDate && endDate >= rightDate)
        {
            var span = 8 - startDay;
            var event = ConstructorTaskElement(Task, startDay, span);
            event.classList.add('event-start');
            Task.htmlElement = event;
            User.htmlElement.lastChild.appendChild(event);
        }
        else if (endDate >= leftDate && endDate <= rightDate && startDate <= leftDate)
        {
            var span = endDay;
            var event = ConstructorTaskElement(Task, 1, span);
            event.classList.add('event-end');
            Task.htmlElement = event;
            User.htmlElement.lastChild.appendChild(event);
        }
        else if (startDate <= leftDate && endDate >= rightDate)
        {
            var event = ConstructorTaskElement(Task, 1, 7);
            Task.htmlElement = event;
            User.htmlElement.lastChild.appendChild(event);
        }
    }
}
// 
function ConstructorTaskElement(Task, start, spane) {
    var event = document.createElement('div');
    event.classList.add('event');
    event.id = Task.id;
    event.setAttribute('event-start', start);
    event.setAttribute('event-span', spane);
    event.innerText = Task.subject;
    return event;
}
//
function CreateTaskOnBacklog(Task) {
    var backlogContainer = document.createElement('div');
    backlogContainer.classList.add('task');
    backlogContainer.draggable = true;
    backlogContainer.id = Task.id;
    backlogContainer.textContent = Task.subject;
    backlogContainer.ondragstart = drag;
    mainBacklog.appendChild(backlogContainer);
    Task.htmlElement = backlogContainer;
}
//
function allowDrop(e) {
    e.preventDefault();
}
//
function drag(e) {
    e.dataTransfer.setData('id', e.target.id);
}
// работа с датами (вверх)
function UpdateDatesLine() {
    var weekDay = now.getDay();
    weekDay = weekDay === 0 ? 6 : (weekDay-1);
    let formatForHead = new Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "long"
    });
    let formatForDays = new Intl.DateTimeFormat("ru", {
        day: "numeric",
        month: "numeric"
    });
    for (var i = 0; i < 7; i++)
    {
        var numberDay = numbersDays[i];
        var tempDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - (weekDay - i) + 7 * navWeek);
        if (i === 0)
        {
            leftDate = tempDate;
        }
        if (i === 3)
        {
            nowDate.innerText = `${formatForHead.format(tempDate)}`; 
        }
        if (i === 6)
        {
            rightDate = tempDate;
        }
        numberDay.innerText = formatForDays.format(tempDate);
    }
}
// изменение навигации
function changeNav(num) {
    navWeek += num;
    UpdateDatesLine();
    userArray.forEach(f => f.htmlElement.lastChild.innerHTML = '');
    tasksOnDesc.forEach(f => CreateTaskOnDesk(f.user, f));
}
leftButton.onclick = function(){changeNav(-1)};
rightButton.onclick = function(){changeNav(1)};

Load();