/* canlender.js */
// create Calender
function createCalendar(lang = 'cn') {
  const table = createTable(lang);
  const colgroup = createColgroup();
  const thead = createThead(lang);
  const tbody = createTbody();
  table.appendChild(colgroup);
  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);
}
// create <table> <caption>
function createTable(lang = 'cn') {
  const table = document.createElement('table');
  const caption = document.createElement('caption');
  const strong = document.createElement('strong');
  strong.innerText = Month.getCurrentMonth(lang);
  // caption.style.textAlign = 'center';
  table.classList.add('cal');
  caption.appendChild(strong);
  caption.appendChild(TextNode(' ' + Now.getFullYear()));
  table.appendChild(caption);
  return table;
}
// create <colgroup>
function createColgroup() {
  const colgroup = document.createElement('colgroup');
  for (let index = 0; index < Week.length; index++) {
    const col = document.createElement('col');
    const Day = Week.getAbbrDay(index).toLowerCase();
    col.classList.add('cal' + Day);
    if (Day == 'sun' || Day == 'sat') {
      col.classList.add('cal-weekend')
    } else {
      col.classList.add('cal-weekday')
    }
    colgroup.appendChild(col);
  }
  return colgroup;
}
// create <thead>
function createThead(lang = 'cn') {
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  for (let index = 0; index < Week.length; index++) {
    const th = document.createElement('th');
    th.scope = 'col';
    th.innerText = Week.getAbbrDay(index, lang);
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  return thead;
}
/* create <td> */
function createTd() {
  const td = document.createElement('td');
  return td;
}
function createA(day = '') {
  const a = document.createElement('a');
  a.href = '#';
  a.innerText = day;
  return a;
}
function createActiveTd(day = '') {
  const td = createTd();
  const a = createA(day);
  td.appendChild(a);
  return td;
}
function createInactiveTd(day = '') {
  const td = createTd();
  td.classList.add('cal-inactive');
  td.innerText = day;
  return td;
}
/* create <tbody> */
function createFirstRow(tbody) {
  const tr = document.createElement('tr');
  let currentMonth = Now.getMonth();
  let lastMonth = (currentMonth - 1 + 12) % 12;
  const firstDayPosition = Now.getDay() - Now.getDate() % 7 + 1;
  for (let index = 0; index < firstDayPosition; index++) {
    let lastMonthDate = DaysInMonth[lastMonth] - Now.getDay() + index;
    td = createInactiveTd(lastMonthDate);
    tr.appendChild(td);
  }
  for (let index = 0; index < Week.length - firstDayPosition; index++) {
    td = createActiveTd(index + 1);
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
function createTbody() {
  const tbody = document.createElement('tbody');
  // First Line
  createFirstRow(tbody);
  // Middle Body
  const dayBegin = parseInt(tbody.firstChild.lastChild.innerText, 10);
  for (let index = dayBegin, count = 0, tr; index < DaysInMonth[Now.getMonth()]; index++) {
    if ((index - dayBegin) % 7 == 0) {
      tr = document.createElement('tr');
      tbody.appendChild(tr);
    }
    td = createActiveTd(index + 1);
    tr.appendChild(td);
  }
  // Last Line
  createLastRow(tbody);
  // HighLight Today
  const today = tbody.getElementsByTagName('a')[Now.getDate() - 1];
  today.parentNode.classList.add('cal-current')
  return tbody;
}
function createLastRow(tbody) {
  const tr = tbody.lastChild;
  const lastRowLength = tr.children.length;
  for (let index = 0, td; index < Week.length - lastRowLength; index++) {
    td = createInactiveTd(index + 1);
    tr.appendChild(td);
  }
}
// create textnode
function TextNode(string) {
  const textNode = document.createTextNode(string);
  return textNode;
}
// Constant
const Now = new Date();
const DaysInMonth = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
const Week = {
  en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  cn: ["日", "一", "二", "三", "四", "五", "六"],
  jp: ["日", "月", "火", "水", "木", "金", "土"],
  length: 7,
  getAbbrDay: function (day = Now.getDay(), lang = 'cn') {
    let text = '';
    switch (lang) {
      case 'cn':
        text = this.cn[day];
        break;
      case 'jp':
        text = this.jp[day];
        break;
      case 'en':
        text = this.en[day].slice(0, 3);
        break;
    }
    return text;
  }
};
const Month = {
  en: ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"],
  getCurrentMonth: function (lang = 'cn') {
    let text = '';
    switch (lang) {
      case 'cn':
      case 'jp':
        text = (Now.getMonth() + 1) + '月';
        break;
      case 'en':
        text = this.en[Now.getMonth()];
    }
    return text;
  }
}