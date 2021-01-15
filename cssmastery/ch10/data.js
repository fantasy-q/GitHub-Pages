const base = "chapter-10/";

const data = {
  chapter: 'chapter 10 Making It Move: Transforms, Transitions, and Animations',
  htmls: [
    { title: '变换：旋转', name: '10-03-simple-transform.html' },
    { title: '变换：原点', name: '10-05-simple-transform-origin.html' },
    { title: '变换：平移', name: '10-06-simple-transform-translate.html' },
    { title: '变换', name: '10-07-transform-origin-rotate-translate-text.html' },
    { title: '放缩', name: '10-11-scale-x-text.html' },
    { title: '', name: '10-12-skew.html' },
    { title: '过渡', name: '10-13-button-transition.html' },
    { title: '动画', name: '10-17-step-animation.html' },
    { title: '过渡', name: '10-18-transition-to-maxheight.html' },
    { title: '动画：关键帧', name: '10-19-1-box-animation-keyframe-states-illustration.html' },
    { title: '动画', name: '10-19-box-animation.html' },
    { title: '动画', name: '10-21-animate-along-arc.html' },
    { title: '变换', name: '10-24-simple-3d-transform.html' },
    { title: '透视', name: '10-25-1-perspective-origin.html' },
    { title: '透视', name: '10-25-2-perspective-origin-topleft.html' },
    { title: '', name: '10-26-1-flipping-widget-3d-context.html' },
    { title: '', name: '10-26-flipping-widget.html' },
    { title: '变换：二维矩阵', name: '10-XX-matrix-2d-transform.html' }
  ],
  own: {
    06: { title: '旋转：直观演示', name: '', path: '../rotate' },
  },
  headings: {
    03: '2D Transforms',
    XX: 'Others'
  },
  getChapterText: function () {
    // return chapter title without [Chapter XX]
    return this.chapter.split(' ').slice(2).join(' ');
  }
}
