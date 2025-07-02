import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 0,
      name: '立即预定',
      desc: '该规则需要在高级设置中开启[强制点击]才能生效',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[vid="trade_project_detail_purchase_status_bar_container_fl"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd',
          snapshotUrls: 'https://i.gkd.li/snapshot/1751436778718',
        },
      ],
    },
    {
      key: 1,
      name: '场次-已预约',
      desc: '该规则需要在高级设置中开启[强制点击]才能生效',
      matchTime: 5000,
      actionMaximum: 2,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches: '[vid="btn_buy_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd',
          snapshotUrls: 'https://i.gkd.li/snapshot/1751436787429',
        },
      ],
    },
  ],
});
