const base = "chapter-09/";

const data = {
  chapter: 'chapter 10  Styling Forms and Data Tables',
  htmls: [
    { title: '', name: '10-03-simple-transform.html' },
    { title: '', name: '10-05-simple-transform-origin.html' },
    { title: '', name: '10-06-simple-transform-translate.html' },
    { title: '', name: '10-07-transform-origin-rotate-translate-text.html' },
    { title: '', name: '10-11-scale-x-text.html' },
    { title: '', name: '10-12-skew.html' },
    { title: '', name: '10-13-button-transition.html' },
    { title: '', name: '10-17-step-animation.html' },
    { title: '', name: '10-18-transition-to-maxheight.html' },
    { title: '', name: '10-19-1-box-animation-keyframe-states-illustration.html' },
    { title: '', name: '10-19-box-animation.html' },
    { title: '', name: '10-21-animate-along-arc.html' },
    { title: '', name: '10-24-simple-3d-transform.html' },
    { title: '', name: '10-25-1-perspective-origin.html' },
    { title: '', name: '10-25-2-perspective-origin-topleft.html' },
    { title: '', name: '10-26-1-flipping-widget-3d-context.html' },
    { title: '', name: '10-26-flipping-widget.html' },
    { title: '', name: '10-XX-matrix-2d-transform.html' }
  ],
  headings: {
    XX: 'Others'
  },
  getChapterText: function () {
    // return chapter title without [Chapter XX]
    return this.chapter.split(' ').slice(2).join(' ');
  }
}
