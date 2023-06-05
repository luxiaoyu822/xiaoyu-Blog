---
layout: home
layoutClass: 'home-layout'

hero:
  name: '雨过天晴'
  text: "xiaoyu's blog"
  tagline: 代码与雨都会带来变化
  image:
    src: /logo.png
    alt: cute aniya
  actions:
    - theme: brand
      text: 导航一
      link: /navigation/navigation-1
    - theme: alt
      text: 导航二
      link: /navigation/navigation-2

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
.home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.home-layout .details small {
  opacity: 0.8;
}

.home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
