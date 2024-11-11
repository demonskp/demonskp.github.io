<script setup>
import { notesApi } from "@/api";
import courses from "@/datas/courses";
import { TagMap } from "@/datas/tags";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import LinkMenu from "./LinkMenu.vue";

const router = useRouter();
const route = useRoute();

const subjectList = Object.keys(TagMap).map((key) => ({ ...TagMap[key], key })) || [];
const likeList = computed(() => {
  if (!route.meta.id) return [];
  const list = notesApi.getLikeNoteList(route.meta.id, 5);
  return list;
})

function subjectClick(tagName) {
  router.push(`/notes?tag=${tagName}`)
}

function courseClick(course) {
  const { url } = course || {};
  if (url.startsWith('http')) {
    window.open(url);
    return;
  }
  router.push(url || '/home');
}

function likeClick(likeItem) {
  router.push(`/notes/detail/${likeItem.id}`)
}

</script>
<template>
  <div class="side_bar">
    <div class="side_bar_wrap" v-if="!route.meta.id">
      <div class="item">
        <div class="title">个人介绍</div>
        <div class="content">前端程序员</div>
      </div>
      <div class="item">
        <div class="title">创建的专题</div>
        <div class="content">
          <div class="subject" v-for="item in subjectList" :key="item.key" @click="subjectClick(item.key)">
            <img :src="item.poster">
            <span class="name ellipsis">{{ item.key }}</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">主题文章</div>
        <div class="content">
          <div class="course" v-for="course in courses" :key="course.title + course.subTitle"
            @click="courseClick(course)">
            <img :src="course.poster" alt="">
            <span class="name">
              <span>{{ course.title }}</span>
              <span>{{ " · " }}</span>
              <span>{{ course.subTitle }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <LinkMenu v-if="route.meta.id" />

    <div class="side_bar_wrap" style="margin-top: 12px;">
      <div class="item" v-if="likeList.length">
        <div class="title">相关推荐</div>
        <div class="content">
          <div class="recommend" v-for="likeItem in likeList" :key="likeItem.id" @click="likeClick(likeItem)">
            <div class="recommend_title ellipsis">{{ likeItem.title }}</div>
            <div class="recommend_time">{{ likeItem.createTime }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.side_bar {
  position: fixed;
  top: calc(var(--head-height) + 12px);
}

.side_bar_wrap {
  width: 280px;
  background-color: #fff;
  margin-left: 12px;
  overflow-y: hidden;

  .item {
    padding: 10px 12px;
    border-bottom: solid 1px #f0f0f0;

    .title {
      font-size: 14px;
      color: #969696;
      margin-bottom: 10px;
    }

    .content {
      font-size: 14px;

      .subject {
        display: flex;
        align-items: center;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
          background-color: #f0f0f0;
        }

        img {
          width: 32px;
          height: 32px;
          border: 1px solid #ddd;
          border-radius: 3px;
        }

        .name {
          margin-left: 6px;
          font-size: 14px;
          color: #333;
        }
      }

      .course {
        display: flex;
        align-items: center;
        padding: 4px 0;
        cursor: pointer;

        &:hover {
          background-color: #f0f0f0;
        }

        img {
          width: 22px;
          height: 22px;
        }

        .name {
          margin-left: 6px;
          font-size: 14px;
        }
      }

      .recommend {
        cursor: pointer;
        margin-top: 2px;

        &:hover {
          background-color: #f0f0f0;
        }

        .recommend_title {
          color: var(--text-color);
        }

        .recommend_time {
          color: var(--text-color-tips);
          // text-align: right;
        }
      }

    }
  }
}
</style>