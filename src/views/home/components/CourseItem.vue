<script setup>
import { defineProps } from "vue";

defineProps({
  item: {
    type: Object,
    default: () => ({
      url: "",
      title: "React",
      subTitle: "源码解读",
      backImg:
        "https://ultimatecourses.com/assets/course/react/basics-46f680402a83e5d266bf96416961873b37a425ef9585831638f783ab26c6b48e.jpg",
      poster:
        "https://ultimatecourses.com/assets/category/react-d70ee2dc77a69c09d8eec8578ebba8c0b1eb5c1288c330c384d3674bc7e38409.svg",
      updateTime: "2022.10.29",
      count: 24,
      creater: {
        name: "demonskp",
        avatar: "https://avatars.githubusercontent.com/u/25999019?v=4",
        link: "https://github.com/demonskp",
      },
    }),
  },
});
</script>

<template>
  <section class="course-wrap">
    <a :href="item.url" target="_blank" class="course-item">
      <img :src="item.backImg" alt="bg" class="course-item-header" />
      <div class="course-item-body">
        <div class="body-poster">
          <img :src="item.poster" alt="poster" />
        </div>
        <div class="body-title">
          <div>{{ item.title }}</div>
          <div class="title-sub">{{ item.subTitle }}</div>
        </div>
        <div class="body-info">
          <span>{{ item.count }} 篇</span>
          <span> • </span>
          <span>{{ item.updateTime }}</span>
        </div>
      </div>
      <div class="course-item-footer">
        <img class="footer-avatar" :src="item.creater.avatar" alt="avatar" />
        by {{ item.creater.name }}
      </div>
    </a>
  </section>
</template>

<style lang="less" scoped>
.course-wrap {
  width: 236px;
  height: 253px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
  border-radius: 6px;
  margin: 0 15px 15px 15px;

  transition: transform 0.2s ease-in-out, background 0.2s ease-in-out,
    border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  .course-item {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;

    .course-item-header {
      width: 100%;
      height: 65px;
      object-fit: none;
    }

    .course-item-body {
      flex: 1;
      position: relative;

      .body-poster {
        position: absolute;
        width: 75px;
        height: 75px;
        border-radius: 50%;
        top: -37.5px;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: #fff;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          z-index: 10;
        }
      }

      .body-title {
        margin-top: 40px;
        margin-bottom: 10px;
        font-size: 22px;

        .title-sub {
          font-weight: 300;
        }
      }

      .body-info {
        font-size: 12px;
        line-height: 14px;
      }
    }

    .course-item-footer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      background: #f6f7fb;
      font-size: 12px;
      line-height: 22px;
      padding: 10px;

      .footer-avatar {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
  }
}
</style>
