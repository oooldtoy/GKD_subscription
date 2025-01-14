import apps from './rawApps';
import type { RawGlobalGroup } from './types';
import * as utils from './utils';

const diabledAppIds = [
  'com.android.systemui', // 通知栏界面/下拉开关/控制中心
  'com.android.settings', // 系统设置
  'com.android.mms', // 短信/信息
  'com.android.phone', // 拨号
  'com.android.incallui', // 通话
  'com.android.contacts', // 联系人/电话簿
  'com.android.providers.Telephony', // 电话和短信存储
  'com.android.phone.recorder', // 录音
  'com.android.soundrecorder', // 录音机
  'com.android.server.telecom', // 来电拒接短信服务

  // 在一些常见的应用中禁用
  'com.tencent.mm', // 微信
  'com.eg.android.AlipayGphone', // 支付宝
  'li.songe.gkd',

  'com.google.ar.core', // 谷歌AR服务
  'com.google.android.syncadapters.calendar', // 谷歌日历同步

  // 小米系
  'com.miui.aod', // miui 锁屏界面
  'miui.systemui.plugin', // miui 状态栏界面
  'com.miui.securityadd', // 系统服务组件
  'com.miui.packageinstaller', // 应用包管理组件

  // 华为系
  'com.huawei.android.launcher', // 桌面
  'com.huawei.mediacontroller', // 音频播控中心

  // 荣耀系
  'com.hihonor.android.launcher', // 桌面

  // OPPO 系
  'com.oppo.launcher', // 桌面

  // VIVO 系
  'com.bbk.launcher2', // 桌面

  // 一加系
  'net.oneplus.launcher', // 桌面

  // 三星系
  'com.sec.android.app.launcher', // 桌面

  // https://github.com/gkd-kit/gkd/issues/451
  'mark.via', // via浏览器
  'mark.via.gp', // via浏览器Google Play版
  'com.mmbox.xbrowser', // X浏览器
  'com.mmbox.xbrowser.pro', // X浏览器Google Play版
  'com.mycompany.app.soulbrowser', // soul浏览器
];

// 如果应用规则已有开屏广告一类的规则, 则在全局规则禁用此应用
diabledAppIds.push(
  ...apps
    .filter((a) =>
      a.groups.some(
        (g) =>
          (g.name.startsWith('开屏广告') ||
            g.name.startsWith('更新提示') ||
            g.name.startsWith('青少年模式')) &&
          g.enable !== false,
      ),
    )
    .map((a) => a.id),
);

const globalGroups: RawGlobalGroup[] = [
  {
    key: 0,
    name: '开屏广告',
    order: utils.OPEN_AD_ORDER,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        quickFind: true,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: -1,
        matches:
          '[childCount=0][visibleToUser=true][(text.length<10 && (text*="跳过" || text*="跳過" || text*="skip" || text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || desc*="跳过" || desc*="skip" || (vid*="count" && vid*="down" && vid!*="load" && vid!*="hour" && vid!*="minute" && vid!*="second" && vid!*="add" && vid!*="ead")]',
      },
    ],
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
  {
    key: 1,
    name: '更新提示',
    order: utils.UPDATE_ORDER,
    actionMaximum: 1,
    matchTime: 10000,
    actionCdKey: 0,
    resetMatch: 'app',
    rules: [
      {
        key: 0,
        matches:
          '[childCount=0][visibleToUser=true][text$="新版本"||text$="更新"||text$="升级"||text$="体验"||text$="升級"||text$="體驗"||text$="Update"||text$="Upgrade"||text$="Experience"] <n * > [childCount=0][visibleToUser=true][text^="不再"||text$="再说"||text$="拒绝"||text$="再想想"||text^="忽略"||text^="暂不"||text^="放弃"||text^="取消"||text$="再說"||text$="暫不"||text$="拒絕"||text$="Later"||text^="Ignore"||text^="Not now"||text^="Cancel"]',
      },
      {
        key: 1,
        matches:
          '[childCount=0][visibleToUser=true][desc$="新版本"||desc$="更新"||desc$="升级"||desc$="体验"||desc$="升級"||desc$="體驗"||desc$="Update"||desc$="Upgrade"||desc$="Experience"] <n * > [childCount=0][visibleToUser=true][desc^="不再"||desc$="再说"||desc$="拒绝"||desc$="再想想"||desc^="忽略"||desc^="暂不"||desc^="放弃"||desc^="取消"||desc$="再說"||desc$="暫不"||desc$="拒絕"||desc$="Later"||desc^="Ignore"||desc^="Not now"||desc^="Cancel"]',
      },
    ],
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
  {
    key: 2,
    name: '青少年模式',
    order: utils.YOUNG_ORDER,
    actionMaximum: 1,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    rules: [
      {
        key: 0,
        matches:
          '[((text*="青少年" || text*="未成年") && text*="模式") || ((desc*="青少年" || desc*="未成年") && desc*="模式")] +n [text*="知道了" || text*="关闭" || desc*="知道了" || desc*="关闭"]',
      },
      {
        key: 1,
        matches:
          '[((text*="青少年" || text*="未成年") && text*="模式") || ((desc*="青少年" || desc*="未成年") && desc*="模式")] +n * > [text*="知道了" || text*="关闭" || desc*="知道了" || desc*="关闭"]',
      },
    ],
  },
];
export default globalGroups;
