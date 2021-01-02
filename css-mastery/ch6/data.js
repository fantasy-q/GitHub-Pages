const base = "chapter-06/";

const htmls = [
  { title: '绝对定位：评注', name: '06-01-position-absolute-comments.html' },
  { title: '偏移：自适应尺寸', name: '06-05-position-absolute-overlay-sizing.html' },
  { title: '浮动：外边距调整', name: '06-09-floated-image-nudge.html' },
  { title: '浮动：并排', name: '06-10-floated-image-sidebyside.html' },
  { title: '浮动：位置交换', name: '06-11-floated-image-sidebyside-reverse.html' },
  { title: '行内块：作者信息', name: '06-19-inline-block-article-share.html' },
  { title: '行内块：导航栏问题', name: '06-20-inline-block-navbar-broken.html' },
  { title: '行内块：设置字体解决', name: '06-21-inline-block-navbar-fontfix.html' },
  { title: '表格显示：导航栏', name: '06-21-table-display-navbar.html' },
  { title: '表格显示：垂直对齐', name: '06-22-table-display-navbar-vertical-align.html' },
  { title: 'Flexbox：无宽度', name: '06-24-flexbox-navbar-nowidth.html' },
  { title: '方向：行逆', name: '06-25-flexbox-navbar-row-reverse.html' },
  { title: '内容排布：末端对齐', name: '06-26-flexbox-navbar-justify-flexend.html' },
  { title: '内容排布：居中', name: '06-27-flexbox-navbar-justify-center.html' },
  { title: '内容排布：间等分', name: '06-28-flexbox-navbar-justify-spacebetween.html' },
  { title: '内容排布：围绕等分', name: '06-29-flexbox-navbar-justify-spacearound.html' },
  { title: '外边距：自动分两侧', name: '06-30-flexbox-navbar-marginauto.html' },
  { title: '项对齐：拉伸', name: '06-31-flexbox-navbar-align-stretch.html' },
  { title: '项对齐：始端', name: '06-32-flexbox-navbar-align-start.html' },
  { title: '项对齐：居中', name: '06-33-flexbox-navbar-align-center.html' },
  { title: '项对齐：末端', name: '06-34-flexbox-navbar-align-end.html' },
  { title: '项对齐：基线', name: '06-35-flexbox-navbar-align-baseline.html' },
  { title: '个体对齐', name: '06-36-flexbox-navbar-align-self.html' },
  { title: 'Flexbox：垂直居中', name: '06-37-flexbox-vertical-centering.html' },
  { title: 'Flexbox：作者信息', name: '06-38-flexbox-vertical-centering-author-info.html' },
  { title: 'Flex：伸缩', name: '06-44-flexbox-navbar-flexsize-grow-2-1.html' },
  { title: '标签列表：折行', name: '06-47-flexbox-taglist-wrap.html' },
  { title: '标签列表：行逆排布折行', name: '06-48-flexbox-taglist-wrap-row-reverse.html' },
  { title: '标签列表：行逆排布逆折行', name: '06-49-flexbox-taglist-wrap-reverse-row-reverse.html' },
  { title: '标签列表：基自动', name: '06-50-flexbox-taglist-wrap-flex.html' },
  { title: '标签列表：限宽', name: '06-52-flexbox-taglist-wrap-flex-max-width.html' },
  { title: '标签列表：末端对齐', name: '06-53-1-flexbox-taglist-wrap-align-content-flex-end.html' },
  { title: '标签列表：拉伸对齐', name: '06-53-flexbox-taglist-wrap-align-content-stretch.html' },
  { title: '导读：列排布个体排序', name: '06-54-flexbox-column-order-teaser.html' },
  { title: '导读：外边距自动', name: '06-57-flexbox-nested-teasers-auto-margin.html' },
  { title: '定位：堆叠', name: '06-XX-positioning-stacking-context.html' },
  { title: '', name: '06-XX-flexbox-navbar-width.html' },
]

// 每插入一个删除一条
const titles = {
  01: 'Using Positioning',
  09: 'Horizental Layout',
  24: 'Flexbox',
  XX: 'Others'
}