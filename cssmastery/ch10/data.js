const base = "chapter-10/";

const data = {
  chapter: 'chapter 10 Making It Move: Transforms, Transitions, and Animations',
  htmls: [
    { title: '变换：旋转', name: '10-03-simple-transform.html' },
    { title: '变换：原点', name: '10-05-simple-transform-origin.html' },
    { title: '变换：平移', name: '10-06-simple-transform-translate.html' },
    { title: '变换：多重', name: '10-07-transform-origin-rotate-translate-text.html' },
    { title: '变换：放缩', name: '10-11-scale-x-text.html' },
    { title: '变换：偏斜', name: '10-12-skew.html' },
    { title: '动画：过渡', name: '10-13-button-transition.html' },
    { title: '动画：步进函数', name: '10-17-step-animation.html' },
    { title: '动画：过渡', name: '10-18-transition-to-maxheight.html' },
    { title: '动画：关键帧', name: '10-19-1-box-animation-keyframe-states-illustration.html' },
    { title: '动画', name: '10-19-box-animation.html' },
    { title: '动画', name: '10-21-animate-along-arc.html' },
    { title: '变换', name: '10-24-simple-3d-transform.html' },
    { title: '透视', name: '10-25-1-perspective-origin.html' },
    { title: '透视', name: '10-25-2-perspective-origin-topleft.html' },
    { title: '变换：翻转', name: '10-26-1-flipping-widget-3d-context.html' },
    { title: '变换：翻转', name: '10-26-flipping-widget.html' },
    { title: '矩阵：二维变换', name: '10-XX-matrix-2d-transform.html' }
  ],
  practices: {
    06: { title: '演示：旋转', name: '../practice/rotate.html' },
    07: { title: '演示：平移', name: '../practice/translate.html' },
    11: { title: '演示：多重变换', name: '../practice/multiple-transformations.html' },
    13: { title: '演示：放缩 & 偏斜', name: '../practice/scale&skew.html' },
    19: { title: '演示：过渡', name: '../practice/transition.html' },
    ZZ: { title: '演示：变换矩阵', name: '../practice/transformation-matrix.html' },
  },
  headings: {
    03: '2D Transforms',
    13: 'Transitons',
    XX: 'Others'
  },
  getChapterText: function () {
    // return chapter title without [Chapter XX]
    return this.chapter.split(' ').slice(2).join(' ');
  }
}
