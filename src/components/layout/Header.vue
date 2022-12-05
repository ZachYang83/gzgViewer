<template>
  <div class="header">
    <div class="header-left">
      <div
        class="left-item"
        @click="toLink('queryMap')"
        :class="activeIndex == 'queryMap' ? 'activeL' : ''"
      >
        <span class="text">人口画像</span>
      </div>
      <div
        class="left-item"
        @click="toLink('publicInfo')"
        :class="activeIndex == 'publicInfo' ? 'activeL' : ''"
      >
        <span class="text">基础设施</span>
      </div>
      <div
        class="left-item"
        @click="toLink('landuse')"
        :class="activeIndex == 'landuse' ? 'activeL' : ''"
      >
        <span class="text">用地信息</span>
      </div>
    </div>
    <div class="header-center"></div>
    <div class="header-right">
      <div
        class="right-item"
        @click="toLink('industry')"
        :class="activeIndex == 'industry' ? 'activeR' : ''"
      >
        <span class="text">产业信息</span>
      </div>
      <div
        class="right-item"
        @click="toLink('building')"
        :class="activeIndex == 'building' ? 'activeR' : ''"
      >
        <span class="text">建筑轮廓</span>
      </div>
      <div
        class="right-item"
        @click="toLink('planning')"
        :class="activeIndex == 'planning' ? 'activeR' : ''"
      >
        <span class="text">规划许可</span>
      </div>
    </div>
  </div>
</template>

<script>
import src from "@/assets/admin.jpg";

export default {
  data() {
    return {
      activeIndex: "",
    };
  },
  methods: {
    loginOut() {
      this.$store.commit("REMOVE_INFO");
      localStorage.clear();
      this.$router.push("/login");
    },
    toLink(param) {
      this.activeIndex = param;
      console.log(this.activeIndex);
      this.$router.push(`/gzg/${param}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  height: 8%;
  width: 100%;
  line-height: 60px;
  font-size: 20px;
  background: url("~assets/header-bg.png") no-repeat #001225;
  background-size: 100% 100%;
  padding: 0 20px;
  color: #fff;
}

.header-left {
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  // border: solid 1px #af7ac4;

  .left-item {
    display: flex;
    flex: 1;
    height: 75%;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border: solid 2px #4676a5;
    background: #24384a;
    transform: skewX(30deg);
    cursor: pointer;

    .text {
      display: inline-block;
      transform: skewX(-30deg);
      color: #b2cee5;
      font-size: 15px;
    }
  }
  .left-item:hover {
    background: linear-gradient(90deg, #2f5594, #468a99);
  }
  .activeL {
    background: linear-gradient(90deg, #2f5594, #468a99);
    border: solid 2px #18ffff;
  }
}
.header-center {
  display: flex;
  flex: 1;
  height: 100%;
  // border: solid 1px #5cade2;
  background: url("~assets/header-name.png") no-repeat #001225;
  background-size: 100% 100%;
}
.header-right {
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  // border: solid 1px #48c9b0;

  .right-item {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 75%;
    margin-right: 10px;
    border: solid 2px #4676a5;
    background: #24384a;
    transform: skewX(-30deg);
    cursor: pointer;

    .text {
      display: inline-block;
      transform: skewX(30deg);
      color: #b2cee5;
      font-size: 15px;
    }
  }

  .right-item:hover {
    background: linear-gradient(90deg, #468a99, #2f5594);
  }

  .activeR {
    background: linear-gradient(90deg, #468a99, #2f5594);
    border: solid 2px #18ffff;
  }
}

.user_box {
  width: 12%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 5px;
  font-size: 20px;
}
</style>