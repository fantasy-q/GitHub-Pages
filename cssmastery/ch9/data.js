const base = "chapter-09/";

const data = {
  chapter: 'chapter 9  Styling Forms and Data Tables',
  htmls: [
    { title: '', name: '09-01-unstyled-calendar-table.html' },
    { title: '', name: '09-03-calendar-table.html' },
    { title: '', name: '09-08-responsive-table.html' },
    { title: '', name: '09-10-simple-form.html' },
    { title: '', name: '09-19-form-with-feedback.html' },
    { title: '', name: '09-21-advanced-form.html' }
  ],
  titles: {
    01: '',
    XX: 'Others'
  },
  getChapterText: function () {
    // return chapter title without [Chapter XX]
    return this.chapter.split(' ').slice(2).join(' ');
  }
}
