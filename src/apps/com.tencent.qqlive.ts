import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  deprecatedKeys: [1, 2, 5, 19],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'TextView[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700227',
            'https://i.gkd.li/i/12700122',
            'https://i.gkd.li/i/12700541',
            'https://i.gkd.li/i/12910953',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '分段广告',
      rules: [
        {
          key: 0,
          name: '首页顶部卡片广告',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches:
            'FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true][childCount=0][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700299',
            'https://i.gkd.li/i/12700302',
            'https://i.gkd.li/i/13685929', // 限定 visibleToUser=true 防止误触
          ],
        },
        {
          key: 1,
          name: '首页顶部背景广告',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches: '[text="关闭广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12700518',
        },
        {
          key: 2,
          name: '个人中心页卡片广告',
          activityIds: [
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            'ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700175',
            'https://i.gkd.li/i/13759380',
          ],
        },
        {
          key: 3,
          name: '个人中心页顶部背景广告',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches:
            'RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12777344',
        },
        {
          key: 4,
          name: '点击右上角[广告]',
          activityIds: [
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.activity.VideoDetailActivity',
          ],
          matches:
            'RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc="the ad tag"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12737313',
            'https://i.gkd.li/i/13685842',
          ],
        },
        {
          key: 5,
          name: '点击右下角关闭',
          matches:
            'ImageView[childCount=0] <<2 RelativeLayout + FrameLayout + RelativeLayout > RelativeLayout > RelativeLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13426421',
        },
        {
          key: 6,
          quickFind: true,
          matches: '[id="com.tencent.qqlive:id/feed_icon"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/42013a93-fb12-4747-92e0-95f5028eb8e5',
          snapshotUrls: 'https://i.gkd.li/i/14318802',
        },
        // 以下是配合本规则组内其他key使用的规则，反馈界面的规则都是一样的
        {
          preKeys: 6,
          key: 96,
          quickFind: true,
          matches:
            '[id="com.tencent.qqlive:id/ad_feed_back_dislike"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/8746fdc8-828e-42bb-9160-8e67b7af2dc7',
          snapshotUrls: 'https://i.gkd.li/i/14318811',
        },
        {
          key: 97,
          name: '广告反馈卡片-点击不感兴趣',
          activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
          matches: '@FrameLayout[clickable=true] >3 [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13695084',
        },
        {
          key: 98,
          name: '广告反馈卡片-选择原因',
          quickFind: true,
          activityIds: [
            'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.activity.VideoDetailActivity',
            'com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            '[text="关闭这条广告的原因"] +(2) RecyclerView > [text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700303',
            'https://i.gkd.li/i/12829866',
            'https://i.gkd.li/i/13685871',
            'https://i.gkd.li/i/13703219',
          ],
        },
        {
          preKeys: [98],
          key: 99,
          name: '广告反馈卡片-确认原因',
          quickFind: true,
          activityIds: [
            'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
            'com.tencent.qqlive.ona.activity.SplashHomeActivity',
            'com.tencent.qqlive.ona.activity.VideoDetailActivity',
            'com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity',
          ],
          matches:
            '[text="关闭这条广告的原因"] + [text="确认"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700210',
            'https://i.gkd.li/i/13685877',
            'https://i.gkd.li/i/13703298',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '视频播放时的广告',
      desc: '自动点击 跳过广告',
      activityIds: 'com.tencent.qqlive.ona.activity.VideoDetailActivity',
      rules: [
        {
          key: 0,
          name: '全屏广告',
          quickFind: true,
          matches:
            '@[text$="跳过广告"][clickable=true] < LinearLayout > [text="VIP可关闭该广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700407',
            'https://i.gkd.li/i/12700433',
          ],
        },
        {
          key: 1,
          name: '左下角悬浮广告',
          matches:
            'FrameLayout[childCount=2] > FrameLayout > RelativeLayout > View[id!=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13043079',
        },
        {
          key: 2,
          name: '全屏广告2',
          quickFind: true,
          matches: '@[text$="关闭广告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13526547',
        },
        {
          key: 3,
          name: '居中广告',
          matches:
            'FrameLayout[childCount=4] > ImageView + FrameLayout + FrameLayout + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13695067',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-首页-广告弹窗',
      resetMatch: 'app',
      actionMaximum: 1,
      quickFind: true,
      activityIds: 'com.tencent.qqlive.redpacket.rain.OpenRedPacketActivity',
      rules:
        '@ImageView[clickable=true] < ViewGroup[childCount=5] < [id="android:id/content"]',
      snapshotUrls: 'https://i.gkd.li/i/13842643',
    },
    {
      enable: false,
      key: 20,
      name: '请求通知权限弹窗',
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          actionMaximum: 1,
          quickFind: true,
          matches: 'LinearLayout > @[text="以后再说"] + [text="好的"]',
          snapshotUrls: 'https://i.gkd.li/i/12700139',
        },
        {
          key: 1,
          actionMaximumKey: 0,
          matches: '@ImageView + * > [text^="开启通知"]',
          snapshotUrls: 'https://i.gkd.li/i/13670465',
        },
      ],
    },
  ],
});
