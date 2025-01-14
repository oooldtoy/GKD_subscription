import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.mail',
  name: '网易邮箱大师',
  deprecatedKeys: [1],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          excludeMatches: '[id="com.netease.mail:id/ad_skip"][clickable=false]',
          snapshotUrls: [
            'https://i.gkd.li/i/12893573',
            'https://i.gkd.li/i/12923776',
            'https://i.gkd.li/i/13195662',
            'https://i.gkd.li/i/12818335',
            'https://i.gkd.li/i/13206298', // 使用 excludeMatches 防止提前触发规则
            'https://i.gkd.li/i/13207736', // TODO 一整块图片，无法跳过
          ],
        },
        {
          key: 1,
          matches: '[id$="tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12999739',
        },
        {
          key: 2,
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/i/14046124',
        },
        {
          key: 3,
          name: 'GKD1.7.0可用',
          action: 'clickCenter',
          position: {
            right: 'width*0.1014',
            top: 'width*0.1598',
          },
          matches: '[id="com.netease.mail:id/ad_placeholder"] >3 ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12547435',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-邮件列表广告',
      activityIds: ['com.netease.mail.biz.main.MainITabActivity'],
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.netease.mail:id/ad_vip"]',
          snapshotUrls: 'https://i.gkd.li/i/12999833',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[id="com.netease.mail:id/ll_delete"]',
          snapshotUrls: 'https://i.gkd.li/i/12999841',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/i/12664070',
    },
    {
      key: 5,
      name: '全屏广告-查看成就',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        'TextView[text="恭喜您获得以下成就"] - TextView[text=""][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13876817',
    },
  ],
});
