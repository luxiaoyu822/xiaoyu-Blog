import {h} from 'vue'
import {useData} from 'vitepress'
import Theme from 'vitepress/theme'
import './style.scss'
import  './randomColors'
import TopVisitRecord from '../components/TopVisitRecord.vue';

export default {
    ...Theme,
    Layout: () => {
        const props: Record<string, any> = {}
        const {frontmatter} = useData()

        // 添加自定义样式选择
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }
        return h(Theme.Layout, props, {
            'nav-bar-title-after': () => h(TopVisitRecord),
        })
    },
}
