import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mm',
  name: '微信',
  deprecatedKeys: [12, 13, 20],
  groups: [
    {
      enable: false,
      key: 0,
      name: '分段广告-朋友圈广告',
      desc: '点击广告卡片右上角,直接关闭/出现菜单,确认关闭',
      activityIds: [
        'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
        'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      ],
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/c9ae4bba-a748-4755-b5e4-c7ad3d489a79',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角',
          matches:
            '@LinearLayout[clickable=true] > [text="广告" || text="Sponsored" || text="廣告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13000395', // text="广告"
            'https://i.gkd.li/i/12905837', // text="Sponsored"
            'https://i.gkd.li/i/13791200', // text="廣告"
          ],
        },
        // 以下是只出现二段的情况
        {
          preKeys: 0,
          key: 1,
          name: '点击关闭',
          quickFind: true,
          matches: '[text^="关闭"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12907642', // text="关闭该广告"
            'https://i.gkd.li/i/13926578', // text="关闭广告"
          ],
        },
        {
          preKeys: 0,
          key: 2,
          name: '点击"Close the ad"',
          quickFind: true,
          matches: '[text="Close the ad"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14207480',
        },
        {
          preKeys: 0,
          key: 3,
          name: '点击"關閉此廣告"',
          quickFind: true,
          matches: '[text="關閉此廣告"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13791202',
        },
        // 预留key
        // 以下是出现三段的情况
        {
          preKeys: 0,
          key: 50,
          name: '点击"关闭该广告"',
          matches: '@LinearLayout[clickable=true] > [text="关闭该广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12642584',
        },
        {
          // 第三段
          preKeys: 50,
          key: 51,
          name: '点击"直接关闭"',
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/12663984',
        },
        {
          preKeys: 0,
          key: 52,
          name: '点击"Close the ad"',
          matches: '@LinearLayout[clickable=true] > [text="Close the ad"]',
          snapshotUrls: 'https://i.gkd.li/i/12905838',
        },
        {
          // 第三段
          preKeys: 52,
          key: 53,
          name: '点击"Close"',
          matches: '[text="Close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12905846',
        },
      ],
    },
    {
      // Key1,2,3,4,11 均为授权类的规则
      enable: false,
      key: 1,
      name: '功能类-电脑微信快捷自动登录',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        '.plugin.webwx.ui.ExtDeviceWXLoginUI',
        'com.tencent.mm.ui.LauncherUI',
      ],
      rules: 'TextView[text="取消登录"] - Button[text="登录"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13522625', // activityIds: 'com.tencent.mm.plugin.webwx.ui.ExtDeviceWXLoginUI'
        'https://i.gkd.li/i/13522577', // activityIds: 'com.tencent.mm.ui.LauncherUI'
      ],
    },
    {
      enable: false,
      key: 2,
      name: '功能类-浏览器扫码微信登录自动授权',
      desc: '自动允许使用头像昵称等',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.LauncherUI',
      ],
      rules: 'Button[text="拒绝"] - Button[text="允许"]',
      snapshotUrls: 'https://i.gkd.li/i/13065462', //com.tencent.mm.ui.LauncherUI
    },
    {
      enable: false,
      key: 3,
      name: '功能类-第三方APP申请使用授权弹窗',
      desc: '自动点击允许,但由于此界面可以额外新建昵称头像,默认不启用',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: ['com.tencent.mm.plugin.base.stub.UIEntryStub'],
      rules: 'Button[text="拒绝"] - Button[text="允许"]',
      snapshotUrls: 'https://i.gkd.li/i/12663602',
    },
    {
      enable: false,
      key: 4,
      name: '功能类-微信读书网页版扫码登录自动授权',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
      rules: [
        {
          matches: '[text="微信读书网页版"] +3 Button[text="登 录"]',
          snapshotUrls: 'https://i.gkd.li/i/12506197',
        },
        {
          matches: [
            '[text="登录成功"]',
            '[id="com.tencent.mm:id/g1"][desc="返回"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/12506201',
        },
      ],
    },
    {
      enable: false,
      key: 5,
      name: '功能类-微信红包自动领取',
      desc: '自动领取私聊红包,群聊红包',
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/38517192/32cfda78-b2e1-456c-8d85-bfb2bc4683aa',
      rules: [
        {
          name: '从红包结算界面返回',
          preKeys: [1, 2],
          activityIds: [
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyBeforeDetailUI',
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyDetailUI',
          ],
          matches: 'ImageView[desc="返回"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12567696',
            'https://i.gkd.li/i/14151190',
          ],
        },
        {
          key: 1,
          name: '点击红包-开',
          activityIds:
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
          // Button[desc="开"] 会在出现金币动画时会消失
          matches: 'ImageButton[desc="开"] + Button[desc="开"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12567697',
            'https://i.gkd.li/i/12567698', // 额外增加,金币动画的快照,规则不在这个快照上运行
          ],
        },
        {
          key: 2,
          name: '点击别人发的红包',
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          // 第一个 LinearLayout[childCount=1] 区分是自己发的红包还是别人发的
          // 第二个 LinearLayout[childCount=1] 区分这个红包是否被领取过
          matches:
            'LinearLayout[childCount=1] >5 LinearLayout[childCount=1] - ImageView < LinearLayout + View + RelativeLayout > TextView[text="微信红包"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12567637',
        },
      ],
    },
    {
      enable: false,
      key: 6,
      name: '分段广告-订阅号文章广告',
      desc: '⚠ 此规则有概率误触。自动点击关闭按钮，必须同时启用【订阅号文章广告反馈】规则',
      activityIds: [
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebView', //调整为TmplWebView, 同时兼容多种ID
      ],
      rules: [
        {
          key: 1,
          name: '广告类型1',
          matches: [
            'View[id="ad_container"] > View[childCount=1] >n @View > [id=null][text^="广告"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12642232', // ui.TmplWebViewMMUI
            'https://i.gkd.li/i/13199281', // ui.TmplWebViewTooLMpUI
            'https://i.gkd.li/i/12646837', // 事件完成后，反馈按钮仍然存在，使用 View[childCount=1] 进行限定，防止频繁触发规则
            'https://i.gkd.li/i/12678937', // 文章未浏览至页面底部，广告反馈按钮不可见，使用 [visibleToUser=true] 进行限定，防止打开文章就频繁触发规则
            'https://i.gkd.li/i/12714427', // 优化规则，使用 View[id="ad_container"] 作为特征节点
          ],
        },
        {
          key: 2,
          name: '广告类型2',
          matches:
            'View[childCount=1] > @[id="feedbackTagContainer"][visibleToUser=true] > [id="feedbackTag"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12700183',
            'https://i.gkd.li/i/12701503', // 事件完成后，采用[childCount=1]进行限定，防止频繁触发规则
            'https://i.gkd.li/i/12714424',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 7,
      name: '功能类-自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      quickFind: true,
      activityIds: [
        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: [
        {
          key: 1,
          matches: '@ImageButton[desc="未选中,原图,复选框"] + [text="原图"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12686641', // 未选中
            'https://i.gkd.li/i/12840865', // 未选中
            'https://i.gkd.li/i/12686640', // 已选中
          ],
        },
      ],
    },
    {
      key: 25,
      enable: false,
      name: '分段广告-订阅号文章列表广告',
      desc: 'GKD1.7.0可用，误触风险极高，不建议开启',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 0,
          name: '点击【广告】',
          action: 'clickCenter',
          position: {
            right: 160,
            top: 60,
          },
          matches: 'View[desc="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14321927',
        },
        {
          key: 1,
          preKeys: 0,
          name: '点击【不感兴趣】',
          action: 'clickCenter',
          actionDelay: 2000,
          position: {
            left: 400,
            top: 280,
          },
          matches: '[desc="菜单"] + View',
          snapshotUrls: 'https://i.gkd.li/i/14321928',
        },
        {
          key: 2,
          preKeys: 1,
          name: '点击【与我无关】',
          action: 'clickCenter',
          actionDelay: 2000,
          position: {
            left: 140,
            top: 290,
          },
          matches: '[desc="菜单"] + View',
          snapshotUrls: 'https://i.gkd.li/i/14322060',
        },
        {
          key: 3,
          preKeys: 2,
          name: '点击【确定】',
          action: 'clickCenter',
          actionDelay: 2000,
          position: {
            right: 110,
            top: 100,
          },
          matches: '[desc="菜单"] + View',
          snapshotUrls: 'https://i.gkd.li/i/14322063',
        },
      ],
    },
    {
      enable: false,
      key: 8,
      name: '分段广告-订阅号文章广告反馈',
      desc: '⚠ 此规则有概率误触。自动点击反馈理由，配合【订阅号文章广告】规则使用',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebView', //调整为TmplWebView, 同时兼容多种ID
      rules: [
        {
          key: 1,
          // preKeys: [1], 取消 preKeys 提高点击成功率
          name: '点击不感兴趣',
          matches:
            'View > [id="feedbackTagContainer"][visibleToUser=true] + [id^="menu"] > [id="dislike"][text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12642234',
            'https://i.gkd.li/i/12722301',
            'https://i.gkd.li/i/12722331', // 使用 [id="feedbackTagContainer"][visibleToUser=true] 进行限定，防止反馈界面未出现就触发规则
          ],
          action: 'clickCenter', // 使用 clickCenter 事件点击，期望在快照 https://i.gkd.li/i/12745280 中成功点击 [与我无关]
        },
        {
          key: 2,
          // preKeys: [2], 取消 preKeys 提高点击成功率
          name: '点击与我无关',
          matches: 'View > [id^="menu"] > [id="isdismatch"][text="与我无关"]',
          snapshotUrls: ['https://i.gkd.li/i/12642238'],
        },
        {
          key: 3,
          name: '点击关闭此广告',
          matches: 'TextView[id="closeBtn"][text="关闭此广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12700191',
        },
      ],
    },
    {
      enable: false,
      key: 9,
      name: '功能类-自动查看原图',
      desc: '自动点击底部左侧[查看原图（*M）]按钮',
      quickFind: true,
      activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
      rules: 'Button[text^="查看原图"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13523031',
    },
    {
      key: 10,
      name: '全屏广告-微信小程序-开屏广告',
      quickFind: true,
      matchTime: 10000,
      // actionMaximum: 1, // 经常需要点2次，首次点击过早大概率跳不过
      // resetMatch: 'activity',
      activityIds: [
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
        'com.tencent.mm.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      rules: [
        {
          actionDelay: 800, // 过早点击首次大概率跳不过
          matches: [
            'FrameLayout > TextView + FrameLayout > TextView[text="广告"]',
            'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12701979',
            'https://i.gkd.li/i/12777076',
            'https://i.gkd.li/i/12785012',
            'https://i.gkd.li/i/12785183',
            'https://i.gkd.li/i/13306883',
            'https://i.gkd.li/i/12785246',
            'https://i.gkd.li/i/13407275',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '功能类-网页版文件传输助手扫码自动授权',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.tencent.mm.ui.LauncherUI',
      rules: '[text="打开网页版文件传输助手"] + * > Button[text="打开"]',
      snapshotUrls: 'https://i.gkd.li/i/12793745',
    },
    {
      key: 22,
      name: '全屏广告-小程序-弹窗广告',
      desc: '点击右上角x',
      rules: [
        {
          key: 0,
          activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
          matches:
            '[text!="" || text!=null] <<n FrameLayout[childCount<=5] > FrameLayout[childCount>=3 && childCount<=6] + FrameLayout[childCount=2] > TextView + FrameLayout > @FrameLayout[childCount=1] > ImageView',
          exampleUrls:
            'https://m.gkd.li/101449500/1c7e1778-c5a2-426b-8beb-1b76893b6397',
          snapshotUrls: [
            'https://i.gkd.li/i/14111422',
            'https://i.gkd.li/i/14111432',
            'https://i.gkd.li/i/13459614',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 14,
      name: '分段广告-小程序-内部广告',
      activityIds: ['com.tencent.mm.plugin.appbrand.ui.AppBrandUI'],
      rules: [
        {
          key: 0,
          name: '【广告】0',
          quickFind: true,
          matches:
            'FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text="广告"][visibleToUser=true]',
          excludeMatches:
            'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13199282', // [childCount=3]避免在点击展开菜单后重复点击
            'https://i.gkd.li/i/13407275', // excludeMatches中添加key10中规则，避免误触
          ],
        },
        {
          key: 1,
          name: '【广告】1',
          matches: 'View > * - [text="广告"]',
          excludeMatches: '[text="接龙管家"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13378208',
            'https://i.gkd.li/i/14123141',
            'https://i.gkd.li/i/14385715', //在接龙管家误触，暂未想到办法修复
          ],
        },
        {
          preKeys: [0, 1],
          key: 11,
          name: '点击原因【不感兴趣】',
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13200044',
        },
        {
          preKeys: 11,
          key: 12,
          name: '点击原因【与我无关】',
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13200048',
        },
      ],
    },
    {
      enable: false,
      key: 16,
      name: '全屏广告-小程序-京东购物',
      desc: '低价包邮广告',
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: {
        matches:
          'View[childCount=8] > View[index=6] > View[childCount=4] > Image[visibleToUser=true]',
        exampleUrls:
          'https://m.gkd.li/57941037/b4994fa7-26fb-456b-a426-16fb2ffcf7ce',
        snapshotUrls: 'https://i.gkd.li/i/13298294',
      },
    },
    {
      key: 23,
      name: '全屏广告-小程序-中国电信-抽奖赢好礼弹窗',
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules:
        '[id="launchAppView"] +n View[childCount=3] > @Image + Image + Image',
      snapshotUrls: 'https://i.gkd.li/i/14111866',
    },
    {
      key: 24,
      name: '全屏广告-小程序-粤省事-投资弹窗',
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: [
        {
          key: 0,
          matches: [
            '[text="粤省事码"]',
            'WebView >n View[childCount=2] + View > View[childCount=2] > TextView + TextView[id=null][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/101449500/4e808d65-d8f7-4140-a03f-e840bf1c374d',
          snapshotUrls: [
            'https://i.gkd.li/i/14113750',
            'https://i.gkd.li/i/14157089', //在此快照误触
          ],
        },
      ],
    },
    {
      key: 17,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.tencent.mm.plugin.finder.ui.FinderSelfUI',
        'com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI',
      ],
      rules:
        'TextView[text^="为呵护未成年人健康成长，微信推出青少年模式"] +2 Button[text="我知道了"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13538145',
        'https://i.gkd.li/i/13575195', //activityIds: 'com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI'
      ],
    },
    {
      key: 18,
      name: '功能类-青少年模式自动点击验证密码',
      desc: '点击“验证密码”以申请临时访问',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: [
        {
          key: 0,
          activityIds:
            'com.tencent.mm.plugin.teenmode.ui.AuthorizationRequestUI',
          matches: '@LinearLayout[childCount=2] > [text="验证密码"]',
          snapshotUrls: 'https://i.gkd.li/i/13588338',
        },
        {
          key: 1,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: ['View[text="申请今天临时访问"]', 'View[desc="验证密码"]'],
          snapshotUrls: 'https://i.gkd.li/i/13631987',
        },
      ],
    },
    {
      key: 19,
      name: '功能类-订阅号-展开更早的消息',
      rules: [
        {
          key: 0,
          name: '8.0.44以下',
          quickFind: true,
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI',
          matches: '[text="展开更早的消息"] < [id="com.tencent.mm:id/aqc"]',
          snapshotUrls: 'https://i.gkd.li/i/13790550',
        },
        {
          key: 1,
          name: '8.0.44',
          matches: '[desc="展开更早的消息"]',
          snapshotUrls: 'https://i.gkd.li/i/13790949',
        },
      ],
    },
    {
      key: 21,
      name: '功能类-支付成功自动点击【完成】',
      desc: '点击【完成】',
      quickFind: true,
      activityIds: 'com.tencent.mm.framework.app.UIPageFragmentActivity',
      rules:
        '[desc="支付成功"] < ViewGroup + ViewGroup >n [vid="kinda_button_impl_wrapper"][desc="完成"]',
      snapshotUrls: 'https://i.gkd.li/i/14076149',
    },
  ],
});
