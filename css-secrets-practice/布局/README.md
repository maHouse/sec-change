### 表格布局中遇到的精确布局方法 ###
#### 1.表格的展示方式 ####
**table-layout:fixed;**

这个值是不以表格内容是否折行为参考的，往往第一行列就能快速体现出表格的整体样式。

**table-layout:automatic;**

以内容的宽度为依据，速度慢，不过贴近实际情况

#### 2.针对溢出的文本处理方式 ####
**text-overflow:clip | ellipsis | string**


**clip** 是当文本溢出时候，就被剪掉了

**ellipsis** 是文本以省略号代替溢出的文本

**string** 表示以指定的字符串代替省略的文本

#### 3.文本是否换行 ####

**white-space:normal | pre | nowrap | pre-wrap | pre-line | inherit**

**normal**空白会被浏览子自动忽略

**pre**空白会被留着，你的代码中文本是怎么样子的，展示出来就是什么样子的，这个看你有没有换行了。如果换行的话，则展示出来也换行了。没有换行的话，则展示出来就是一行

**nowrap**无论你的代码中的文本是怎么展示的，你敲没敲换行，出来的就是一行，这个与pre不同，不会给你友情面的

**pre-wrap和pre-line**前者保留空白符并正常换行，后者是合并空白符并换行

**inherit**继承父元素的换行方式





