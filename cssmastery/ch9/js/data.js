const base = "chapter-09/";

const data = {
  chapter: 'chapter 9  Styling Forms and Data Tables',
  htmls: [
    { title: '表格：无样式月历', name: '09-01-unstyled-calendar-table.html' },
    { title: '表格：月历', name: '09-03-calendar-table.html' },
    { title: '表格：响应式', name: '09-08-responsive-table.html' },
    { title: '表单：基础', name: '09-10-simple-form.html' },
    { title: '表单：反馈', name: '09-19-form-with-feedback.html' },
    { title: '表单：进阶', name: '09-21-advanced-form.html' }
  ],
  headings: {
    01: 'Styling Data Tables',
    10: 'Styling Forms',
    XX: 'Others'
  },
  getChapterText: function () {
    // return chapter title without [Chapter XX]
    return this.chapter.split(' ').slice(2).join(' ');
  }
}
