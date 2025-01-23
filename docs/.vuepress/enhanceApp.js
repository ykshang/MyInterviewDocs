import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.css';// 引入自定义样式
import LinkIcon from './componets/LinkIcon.vue'
import Codes from './componets/Codes.vue'
import CodeBold from './componets/CodeBold.vue'
import 'font-awesome/css/font-awesome.css';// 引入font-awesome图表字体组件


Codes
export default ({ Vue }) => {
  Vue.use(Element);
  Vue.component('LinkIcon', LinkIcon)
  Vue.component('Codes', Codes)
  Vue.component('CodeBold', CodeBold)
};
