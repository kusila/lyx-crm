/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const customerRouter = {
  path: '/customer',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Customer',
  meta: {
    title: '客户管理',
    icon: 'user'
  },
  children: [
    {
      path: 'work-plant',
      name: 'WorkPlant',
      component: () => import('@/views/customer/work-plant'),
      meta: { title: '工作台' }
    },
    {
      path: 'sales-funnel',
      name: 'Sales-Funnel',
      component: () => import('@/views/customer/sales-funnel'),
      meta: { title: '销售漏斗' }
    }
  ]
}

export default customerRouter
