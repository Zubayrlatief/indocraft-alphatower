import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import HowItWorksView from '@/views/HowItWorksView.vue'
import AccessibilityAndScalabilityView from '@/views/AccessibilityAndScalabilityView.vue'
import MonitoringView from '@/views/MonitoringView.vue'
import TeacherSupportAndEqualLearningView from '@/views/TeacherSupportAndEqualLearningView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LandingView',
    component: LandingView
  },
  {
    path: '/Functionality',
    name: 'HowItWorksView',
    component: HowItWorksView
  },
  {
    path: '/Accessibility',
    name: 'AccessibilityAndScalabilityView',
    component: AccessibilityAndScalabilityView
  },
  {
    path: '/Monitoring',
    name: 'MonitoringView',
    component: MonitoringView
  },
  {
    path: '/Teacher-Support',
    name: 'TeacherSupportAndEqualLearningView',
    component: TeacherSupportAndEqualLearningView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
