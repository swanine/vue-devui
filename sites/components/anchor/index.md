# anchor 锚点
<script lang="ts">
  import { defineComponent } from 'vue'
  import Anchor from './demo'
  export default defineComponent({
    components: {
      Anchor
    }
  })
</script>
<anchor /> 
 
# 如何使用

 
在页面中使用：

```html
<!--  className="scrollTarget" 加上这个类名是局部滚动,不加是全局滚动 -->
<div v-d-anchor-box className="scrollTarget">
  <ul>
    <li v-d-anchor-link="anchorlink-one">anchorlink-one</li>
    <li v-d-anchor-link="anchorlink-two">anchorlink-two</li>
    <li v-d-anchor-link="anchorlink-three">anchorlink-three</li>
    <li v-d-anchor-link="anchorlink-four">anchorlink-four</li>
  </ul>
  <div>
    <div v-d-anchor="anchorlink-one">
      anchorlink-one1
    </div>
    <div v-d-anchor="anchorlink-two">
      anchorlink-two
    </div>
    <div v-d-anchor="anchorlink-three">
      anchorlink-three
    </div>
    <div v-d-anchor="anchorlink-four">
      anchorlink-four
    </div>
  </div>
</div>
```

# v-d-anchor-box

定义一个锚点。
## v-d-anchor-box 参数

|     参数     |   类型   | 默认 |                         说明                          | 基本用法                    |全局配置项| 
| :----------------: | :----------: | :------: | :--: | :---------------------------------------------------: | ---------------------------- |
|   className    | `string` |  --  |       可选，className为"scrollTarget"时，为局部滚动。默认全局滚动         | className="scrollTarget" | true

# v-d-anchor

定义一个锚点。
## v-d-anchor 参数

|     参数     |   类型   | 默认 |                         说明                          | 基本用法                    |全局配置项| 
| :----------------: | :----------: | :------: | :--: | :---------------------------------------------------: | ---------------------------- |
|   v-d-anchor    | `string` |  --  |       必选，设置锚点对应的跳转位置         | v-d-anchor="anchorlink-one" | true

# v-d-anchor-link

定义一个锚点。
## v-d-anchor-link 参数

|     参数     |   类型   | 默认 |                         说明                          | 基本用法                    |全局配置项| 
| :----------------: | :----------: | :------: | :--: | :---------------------------------------------------: | ---------------------------- |
|   v-d-anchor-link    | `string` |  --  |       必选，设置一个锚点的名字         | v-d-anchor-link="anchorlink-one" | true

## dAnchor 锚点激活事件

自动会给锚点加上以下类对应不同激活的对象。

|           css 类名            |        代表意义        |
| :---------------------------: | :--------------------: |
| active  |    点击锚点链接激活    |


# dAnchorBox

必须有一个容器，否则功能无法使用。

定义一个扫描锚点的容器，放在 dAnchor 与 dAnchorLink 的公共父节点上，用于锚点和链接之间的通信。
