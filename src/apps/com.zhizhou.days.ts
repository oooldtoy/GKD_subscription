import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhizhou.days',
  name: '倒计日',
  groups: [
    {
      key: 1,
      name: '第三方 SDK 广告弹窗',
      rules: [
        {
          key: 0,
          name: '穿山甲-第一类广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[desc^="webview-close"] > View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12727499',
        },
        {
          key: 1,
          name: '穿山甲-第二类广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: ['[text="广告"]', '@Image < View + [text="反馈"]'],
          snapshotUrls: 'https://i.gkd.li/i/12739678',
        },
        {
          key: 10,
          name: '优量汇-第一类广告',
          activityIds: 'com.zhizhou.days.activity.MainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12727528',
        },
        {
          key: 11,
          name: '优量汇-第二类广告',
          activityIds: [
            'com.zhizhou.days.activity.MainActivity',
            'com.huawei.android.launcher.unihome.UniHomeLauncher',
          ],
          matches:
            'ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12739703',
            'https://i.gkd.li/i/12727546', // activityId: 'com.huawei.android.launcher.unihome.UniHomeLauncher'
          ],
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '应用评价弹窗',
      activityIds: 'com.huawei.android.launcher.unihome.UniHomeLauncher',
      rules: '@[text="以后再说"] + [text="马上评价"]',
      snapshotUrls: 'https://i.gkd.li/i/12744951',
    },
  ],
});
