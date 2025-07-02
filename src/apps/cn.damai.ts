import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 0,
      name: '立即预定',
      desc: '抢票辅助',
      fastQuery: true,
      rules: [
        {
          action: 'clickCenter',
          activityIds:
            'cn.damai.trade.newtradeorder.ui.projectdetail.ui.activity.ProjectDetailActivity',
          matches:
            '[vid="trade_project_detail_purchase_status_bar_container_fl"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd',
          // snapshotUrls: 'https://i.gkd.li/snapshot/1751436778718',
        },
        {
          action: 'clickCenter',
          activityIds:
            'cn.damai.commonbusiness.seatbiz.sku.qilin.ui.NcovSkuActivity',
          matches: '[vid="btn_buy_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd',
          // snapshotUrls: 'https://i.gkd.li/snapshot/1751436778718',
        },
      ],
    },
  ],
});
