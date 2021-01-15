const base = "./html/"

const htmls = {
  04: { filename: "05-04-finished-example.html", description: "成品演示" },
  05: { filename: "05-05-initial-header-example.html", description: "起步" },
  06: { filename: "05-06-bigger-image-header-example.html", description: "大图" },
  08: { filename: "05-08-new-background-position-syntax.html", description: "背景位置" },
  09: { filename: "05-09-background-clip.html", description: "背景裁剪" },
  10: { filename: "05-10-fixed-background-attachment.html", description: "背景附着" },
  11: { filename: "05-11-background-size-percentages.html", description: "背景大小：百分比" },
  13: { filename: "05-13-background-size-cover-position.html", description: "背景大小：cover" },
  14: { filename: "05-14-multiple-backgrounds-shorthand.html", description: "多重背景：简写语法" },
  15: { filename: "05-14-multiple-backgrounds.html", description: "多重背景" },
  16: { filename: "05-16-border-profile-example.html", description: "边框半径：演示" },
  17: { filename: "05-17-border-radius-single-corner.html", description: "边框半径：单角" },
  18: { filename: "05-18-border-radius-circle.html", description: "边框半径：圆" },
  19: { filename: "05-19-pill-shape-obrund.html", description: "边框半径：胶囊" },
  20: { filename: "05-20-border-image.html", description: "边框图片" },
  22: { filename: "05-22-box-shadow-profile-photo.html", description: "盒阴影" },
  25: { filename: "05-25-multiple-shadows-zero-blur.html", description: "多重阴影" },
  26: { filename: "05-26-linear-gradient-profile-box.html", description: "渐变演示" },
  27: { filename: "05-27-linear-gradient-diagonal-profile-box.html", description: "线性渐变" },
  28: { filename: "05-28-radial-gradient-profile-box.html", description: "辐射渐变" },
  29: { filename: "05-29-radial-gradient-profile-box-defaults.html", description: "辐射渐变：缺省" },
  30: { filename: "05-30-repeating-gradients.html", description: "重复渐变" },
  32: { filename: "05-32-repeating-pattern.html", description: "渐变：图案" },
  35: { filename: "05-35-img-maxwidth.html", description: "图像：最大宽度" },
  37: { filename: "05-37-object-fit.html", description: "新属性：object-fit" },
  X1: { filename: '05-XX-calc-width.html', description: "数值计算：calc()" },
  X2: { filename: '05-XX-hsl-example.html', description: "颜色值：hsl()" },
  X3: { filename: '05-XX-page-background.html', description: "页面背景" },
  X4: { filename: '05-XX-aspect-radio-aware', description: "固定宽高比的容器" },
}

const titles = {
  04: "Background Image Basic",
  08: "Background Image Syntax",
  14: "Multiple Background",
  16: "Borders & Rounded Corners",
  22: "Box-Shadow",
  26: "Using CSS Gradient",
  35: "Styling Embeded Images and other Object",
  X1: "Note"
}