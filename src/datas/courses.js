import vueIcon from "@/assets/images/vue.svg";
import { MY_AVATAR } from "./common";

const courses = [
  {
    url: "https://www.jianshu.com/c/ca239b650143",
    title: "ECMAScript",
    subTitle: "规范解读",
    backImg:
      "https://ultimatecourses.com/assets/course/react/basics-46f680402a83e5d266bf96416961873b37a425ef9585831638f783ab26c6b48e.jpg",
    poster:
      "https://ultimatecourses.com/assets/category/javascript-58bb09245e2abeaf56f7db48e86fa4454c2f316a4c6c71aadaa2bdf3b206ab95.svg",
    updateTime: "2022.10.29",
    count: 4,
    creater: {
      name: "demonskp",
      avatar: MY_AVATAR,
      link: "https://github.com/demonskp",
    },
  },
  {
    url: "",
    title: "React",
    subTitle: "源码解读",
    backImg:
      "https://ultimatecourses.com/assets/course/react/basics-46f680402a83e5d266bf96416961873b37a425ef9585831638f783ab26c6b48e.jpg",
    poster:
      "https://ultimatecourses.com/assets/category/react-d70ee2dc77a69c09d8eec8578ebba8c0b1eb5c1288c330c384d3674bc7e38409.svg",
    updateTime: "2022.10.29",
    count: 0,
    creater: {
      name: "demonskp",
      avatar: MY_AVATAR,
      link: "https://github.com/demonskp",
    },
  },
  {
    url: "",
    title: "Vue3",
    subTitle: "源码解读",
    backImg:
      "https://ultimatecourses.com/assets/course/react/basics-46f680402a83e5d266bf96416961873b37a425ef9585831638f783ab26c6b48e.jpg",
    poster: vueIcon,
    updateTime: "2022.10.29",
    count: 0,
    creater: {
      name: "demonskp",
      avatar: MY_AVATAR,
      link: "https://github.com/demonskp",
    },
  },
];

export default courses;
