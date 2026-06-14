export const guidePages = [
  {
    path: '/',
    name: '首页',
    icon: 'Home',
    eyebrow: '2026 新生指南',
    title: '中原工学院新生生存指北',
    description: '把新生最容易反复询问的问题，整理成一份可以快速定位的入学指南。',
    home: true,
    stages: [
      {
        title: '入学前须知',
        description: '先确认录取、校区、路线和需要提前准备的材料。',
        items: [
          { title: '报到与校区', text: '校区分布、预报到、学生票、到校路线、证件清单。', to: '/arrival' },
          { title: '医保与政策', text: '大学生医保、转专业政策、奖助制度等提前了解。', to: { path: '/affairs', hash: '#medical' } },
        ],
      },
      {
        title: '入学时明白',
        description: '到校后最先会遇到住宿、通勤、快递和校园服务。',
        items: [
          { title: '住宿与生活', text: '宿舍分配、门禁熄灯、校内通勤、快递驿站。', to: '/life' },
          { title: '服务与其他', text: '校园网、消费方式、银行卡和活动相关信息。', to: '/services' },
        ],
      },
      {
        title: '入学后了解',
        description: '课程开始后，再逐步了解学习安排、训练和后续发展。',
        items: [
          { title: '学习与训练', text: '教材、小语种、开学考、早晚自习、军训。', to: '/study' },
          { title: '奖助与转专业', text: '奖学金、专项奖学金、转专业办理时间和要求。', to: { path: '/affairs', hash: '#scholarship' } },
        ],
      },
    ],
    sections: [
      {
        id: 'preface',
        title: '写在最前',
        summary: '这是一份面向中原工学院新生的非官方入学指南，用来快速定位常见问题。',
        html: `
          <p>这份指南主要整理新生入学前后最容易反复询问的问题，方便大家按阶段快速查找。</p>
          <p>页面通过 GitHub Pages 部署，内容更新后有时需要手动刷新；如果发现页面没有变化，可以尝试清除浏览器缓存。</p>
          <p>文档由个人维护，可能存在遗漏或过期内容。涉及报到、缴费、政策、学院安排等事项，请以学校和学院官方通知为准。</p>
          <p>如果你也想一起维护文档，或者有其他问题咨询，可以通过邮箱联系我：<button class="copy-chip copy-chip-inline" type="button" data-copy="ethan_hzq@163.com" data-copy-label="邮箱">复制邮箱：ethan_hzq@163.com</button></p>
        `,
      },
      {
        id: 'updates',
        title: '更新公告',
        summary: '这里保留原文档的更新记录，方便追踪内容变化。',
        html: `
          <ol class="timeline">
            <li><time>2025-07-25</time><span>增加政策文件超链接。</span></li>
            <li><time>2025-07-22</time><span>更新校区说明部分，使其阅读更加简洁；修改所有已经不适用的政策。</span></li>
            <li><time>2024-07-25</time><span>修改数科系校区分布。</span></li>
            <li><time>2024-07-24</time><span>增加校区说明分布及专业分布、转专业相关内容。</span></li>
            <li><time>2024-07-20</time><span>增加校园网相关解答。</span></li>
            <li><time>2024-07-19</time><span>发布。</span></li>
          </ol>
        `,
      },
      {
        id: 'copyright',
        title: '版权声明',
        summary: '本文档只用于解答新生疑问，请勿用于营销、引流或商业活动。',
        html: `
          <p><strong>本文档仅供解答新生疑问，禁止用于从事营销、引流、倒卖资料等活动。</strong></p>
          <p>欢迎各位新生加入<strong>中原工学院唯一无广纯为爱发电新生群</strong>。</p>
          <p><button class="copy-chip copy-chip-inline" type="button" data-copy="781245651" data-copy-label="新生群群号">复制新生群：781245651</button></p>
          <p>如果你不是从上面这个群而是别的新生群看到这个网页，那么那个群多半是广告群，群主和管理员可能会借新生群卖卡、卖被子或做其他营销。</p>
          <p class="notice danger">请各位同学警惕抖音、小红书等社交媒体自称学长学姐的非官方人员主动联系你邀请加入个人组织建立的新生群。涉及床上用品、校园电话卡等与金钱有关的交易，请务必慎重。</p>
        `,
      },
    ],
  },
  {
    path: '/arrival',
    name: '报到与校区',
    icon: 'MapPinned',
    eyebrow: '先确认你去哪',
    title: '报到与校区',
    description: '先弄清校区、专业分布和到校路线，再准备证件和交通安排。',
    sections: [
      {
        id: 'campus',
        title: '校区说明',
        summary: '目前主要涉及中原校区和龙湖校区，航空港校区正在建设。',
        html: `
          <p>中原工学院目前有<strong>中原校区</strong>和<strong>龙湖校区</strong>两个校区，<strong>航空港校区</strong>正在建。</p>
          <p><strong>中原校区</strong>位于郑州市中原区，地理位置较好，附近是市中心医院和中原万达，门口有地铁 5 号线和 10 号线，但是占地面积比较小。仅有<strong>软件学院的软件工程</strong>一个专业。</p>
          <p><strong>龙湖校区</strong>位于郑州市新郑市龙湖镇，相较于中原校区偏僻一些，但是占地面积较大，附近有小吃街和商业广场，最近的地铁站是<strong>小乔站</strong>和双湖大道站。龙湖校区离郑州机场也比较近，外省偏远的同学也可以考虑乘坐飞机至<strong>郑州新郑国际机场</strong>，再乘城郊线至小乔站。</p>
        `,
      },
      {
        id: 'majors',
        title: '专业分布',
        summary: '除软件学院软件工程外，其他专业均在龙湖校区。',
        html: `
          <p><strong>中原校区只有软件学院的软件工程</strong>。之前数科系算是软件学院也在中原校区，但是学院重组后<strong>数科系在人工智能学院</strong>，<strong>24 级位于龙湖校区</strong>，23 级及之前的年级位于中原校区。</p>
          <p>除了软件学院，其他所有专业<strong>均在龙湖校区</strong>。</p>
          <p>具体学院及专业设置可以参照学校教务处官网或招生官网。</p>
          <p>本科招生网学院及专业设置：<a href="https://zsc.zut.edu.cn/xyjzy.htm" target="_blank" rel="noreferrer">https://zsc.zut.edu.cn/xyjzy.htm</a></p>
        `,
      },
      {
        id: 'precheck',
        title: '预报到',
        summary: '录取结果出来后，可通过招生官网查询专业并加入企业微信班级群。',
        html: `
          <p>在出录取结果之后，可以在招生官网（<a href="https://zsc.zut.edu.cn/xxcx/gklqcx.htm" target="_blank" rel="noreferrer">https://zsc.zut.edu.cn/xxcx/gklqcx.htm</a>）通过姓名和身份证号查询到具体专业，同时会有一个二维码，扫描二维码下载企业微信会自动加入企业微信班级群。</p>
          <p>其余后续预报到相关事项听从学院安排，学院会安排学长学姐作为班助负责剩下的迎新工作。</p>
        `,
      },
      {
        id: 'student-ticket',
        title: '火车/高铁学生优惠',
        summary: '新生没有学生证，乘车核验时需要带录取通知书走人工通道。',
        html: `
          <p>火车或者高铁可以通过 12306 完成认证，在 12306 官方 APP 购买学生票。高铁二等座 7.5 折，火车硬座 5 折，其余均无优惠。</p>
          <p>大学生在车厢核验时需要出示学生证，而作为<strong>新生没有学生证则需要带上录取通知书走人工通道</strong>。进站出站都需要出示，<strong>无法通过身份证刷门禁</strong>。</p>
        `,
      },
      {
        id: 'route',
        title: '如何到校',
        summary: '优先参考新生入学手册和学院通知，也可以询问班助是否有接站安排。',
        html: `
          <p>可以参考新生入学手册中的路线，或者在学院/班级群询问班助学院是否有安排。</p>
          <p>每年新生入学会有大巴在郑州东站和郑州站接送。</p>
          <p>如果离学校较远需要提前到达，或者错过大巴接送，可以在郑州东站或郑州站打开地图导航 APP 搜索路线，终点填好学校并注意校区。</p>
          <p>如果是从郑州东站到龙湖校区，建议 5 号线转 2 号线到小乔站。5 号线相比 1 号线人会少一点；2 号线和城郊线白天是一趟，傍晚的时候是一趟城郊线一趟 2 号线，如何区分就看终点，终点是航空港的就是 2 号线。</p>
        `,
      },
      {
        id: 'documents',
        title: '所带证件',
        summary: '所有证件建议提前放进文件袋，并随身放在背包中。',
        html: `
          <ul class="check-list">
            <li>录取通知书</li>
            <li>身份证</li>
            <li>高考准考证</li>
            <li>学籍档案</li>
            <li>团员档案</li>
            <li>校园卡</li>
            <li>证件照，一寸和二寸，红底蓝底都可以准备</li>
          </ul>
          <p>以上所有证件建议准备文件袋放在随身背包中。</p>
        `,
      },
    ],
  },
  {
    path: '/life',
    name: '住宿与生活',
    icon: 'BedDouble',
    eyebrow: '住下以后',
    title: '住宿与生活',
    description: '宿舍、门禁熄灯、校内通勤和快递位置，是开学前后最常用的信息。',
    sections: [
      {
        id: 'dorm-assign',
        title: '寝室分配',
        summary: '从 22 级后分宿舍一般按照学号升序分配。',
        html: `
          <p>21 级选宿舍，从 22 级后分宿舍按照学号升序分。</p>
          <p>宿舍均为六人间，彼得堡航空学院学生四人间。</p>
          <p>大部分宿舍是<strong>四个上铺两个下铺，两张桌子在下铺，2 米长的桌子三人分，有阳台</strong>，也就是经典六人间。</p>
          <p>北一北二为上床下桌无阳台六人间，其余有些宿舍是桌子在过道中间，下铺是柜子，也就是四改六。</p>
          <p>大部分宿舍无独卫，有公共厕所。如果是北三、北四、北五、北六、北七，则是 A/B 单元共用；有公共浴室。</p>
        `,
      },
      {
        id: 'dorm-rules',
        title: '熄灯/门禁/电器功率',
        summary: '门禁和熄灯时间要记牢，大功率电器不要碰。',
        html: `
          <p>门禁时间是 22:30。</p>
          <p>周日到周四 23:00 熄灯，周五周六 23:30 熄灯。</p>
          <p>宿舍严禁大功率电器。插拔空调插座会断电，断电之后寝室无法自行恢复供电，需要写检讨找辅导员盖章，再去宿管处恢复供电。</p>
        `,
      },
      {
        id: 'commute',
        title: '日常通勤',
        summary: '新生不建议购买或接手校内旧电动车。',
        html: `
          <p>从 23 级开始暂停办理校内电动车车牌，同时保卫处会清理无牌电动车，所以<strong>新生没有办法买新车</strong>。</p>
          <p>不建议收高年级或者毕业学长学姐的旧车。等到 22 级毕业，也就是 2026 年暑假之后，校内会清理所有学生电动车。</p>
          <p>校内有青桔共享单车，仅限校内骑，无法骑至校外。</p>
        `,
      },
      {
        id: 'express',
        title: '快递物流',
        summary: '龙湖校区快递地址和驿站位置。',
        html: `
          <p>校内驿站地址：<strong>河南省郑州市新郑市龙湖镇淮河路一号中原工学院龙湖校区</strong></p>
          <p>校内驿站在三号组团楼旁边，少部分快递会放在北门门口对面尚书房的菜鸟驿站。</p>
        `,
      },
    ],
  },
  {
    path: '/study',
    name: '学习与训练',
    icon: 'BookOpen',
    eyebrow: '课程开始前',
    title: '学习与训练',
    description: '教材购买、外语小语种、开学考、早晚自习和军训相关说明。',
    sections: [
      {
        id: 'books',
        title: '教材购买',
        summary: '教材不是必须统一买全新，按课程需要灵活处理即可。',
        html: `
          <p>可以通过校园内二手市场购买，也可以网上购买，非强制统一购买全新教材。</p>
          <p>学校提供教材订购，但是只能整套订购，即书单中本学期本班级的所有书籍。一般来说会偏贵，而且有些课没用到书，完全不需要买。</p>
        `,
      },
      {
        id: 'language',
        title: '外语小语种',
        summary: '非英语考生建议尽早和班助、班干部或外语教学办确认开课安排。',
        html: `
          <p>如果高考外语为非英语考生，建议通过班助或者班级班干部说明情况，或者入学后去三号组团楼外语教学办询问开课相关问题。</p>
          <p>往届有单独开设日语教学班，俄语则是随彼得堡学院上课。24 级俄语生未成功执行，其余语种按照外语学院各专业的二外教学班上课，21 级后无可参考案例。</p>
        `,
      },
      {
        id: 'entry-exam',
        title: '开学考',
        summary: '开学考试用于检验高考笔迹，不进行成绩评定。',
        html: `
          <p>开学考试考高考英语和语文作文，作为检验高考笔迹的方法，不进行成绩评定。</p>
        `,
      },
      {
        id: 'self-study',
        title: '早晚自习',
        summary: '早晚自习由各学院自行安排。',
        html: `
          <p>早晚自习为各自学院自行安排，大部分学院都有晚自习。</p>
        `,
      },
      {
        id: 'military-training',
        title: '军训',
        summary: '军训有学分，是必修内容。',
        html: `
          <p>军训时间为 21 天，全国高校正在逐渐落实，时长均统一。军训有学分，是必修的。</p>
          <p>免修需要提供三甲医院的证明，除去特殊情况，比如身体无法进行剧烈运动，都需要在之后进行补修。</p>
          <p>如果有证明或者其他身体不适宜，也可以进伤病连，强度会低很多。</p>
        `,
      },
    ],
  },
  {
    path: '/affairs',
    name: '校园事务',
    icon: 'FileText',
    eyebrow: '政策和手续',
    title: '校园事务',
    description: '医保、奖助学金和转专业都涉及流程和时间点，建议提前了解。',
    sections: [
      {
        id: 'medical',
        title: '大学生医保',
        summary: '大学生医保属于城乡居民医保，生效时间和报销流程需要提前理解。',
        html: `
          <dl class="fact-list">
            <div><dt>每年购买时间</dt><dd>学年初。</dd></div>
            <div><dt>医保性质</dt><dd>城乡居民医保，无个人账户。医保内账户没有钱，只有职工医保才有个人账户；城乡居民医保以及新农合参保人的医保卡仅为报销凭证。</dd></div>
            <div><dt>生效时间</dt><dd>下一年 1 月 1 日至 12 月 31 日。</dd></div>
            <div><dt>报销比例</dt><dd>校内诊所报销比例为 90%，校外转诊除去挂号费报销比例 80%。</dd></div>
          </dl>
          <p><strong>不打算购买大学生医保的同学需注意：</strong>了解一下异地就医政策。河南籍同学需注意异地就医报销政策，是否允许跨市报销；外省籍同学建议提前做好异地就医备案。</p>
          <p><strong>报销流程：</strong>校内就诊无需挂号，但需要出示身份证/医保卡，也就是社保卡。校外就诊门诊需要先去校医院开转诊单，校外报销时效为<strong>自转诊后三天内治疗所产生的费用</strong>，需要在<strong>开转诊单后的一个月内</strong>到校医院收费室完成报销。</p>
          <p>暑期/外出实习时在户籍地或者实习地产生的门诊费用无需转诊单。报销需要的材料包括银行卡复印件、转诊单、发票、检查结果、药方等，具体请参照转诊卡。</p>
          <p><strong>所有住院费用</strong>不通过校医院报销，而是在医院收费窗口处报销。此时报销类型是城乡居民医保，与自行参保的保险类型一致，大概需要先自费全额支付，出院后统一在收费处完成报销。</p>
          <p>相关政策文件：<a href="https://hq.zut.edu.cn/info/1055/1176.htm" target="_blank" rel="noreferrer">中原工学院大学生医保使用须知</a></p>
        `,
      },
      {
        id: 'scholarship',
        title: '奖助相关',
        summary: '详细政策以学生手册、学生处和资助管理中心官网为准。',
        html: `
          <p>详细政策可以入学后查看学生手册，或者在学生处以及资助管理中心官网的规章制度查询。大部分链接为内网链接，需要校园网或者教务系统门户账号通过 WebVPN 访问。</p>
          <ul class="resource-list">
            <li><a href="https://xszz.zut.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1735896817&wbfileid=8C84F2F1703798BCBE5BA6C6FF6F6BFF" target="_blank" rel="noreferrer">中原工学院奖学金管理办法</a></li>
            <li><a href="https://xszz.zut.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1735896817&wbfileid=E10ADCF81CDB989943514B6344A041A5" target="_blank" rel="noreferrer">中原工学院国家助学金管理办法</a></li>
            <li><a href="https://student.zut.edu.cn/content.jsp?urltype=news.NewsContentUrl&wbtreeid=1275&wbnewsid=2005" target="_blank" rel="noreferrer">中原工学院学生先进集体、先进个人评选实施办法（修订）（中工学〔2023〕21号）</a></li>
          </ul>
        `,
      },
      {
        id: 'academic-scholarship',
        title: '学业奖学金',
        summary: '学业奖学金按上一学年必修课成绩和外语水平评定。',
        html: `
          <p>学业奖学金是比较普遍的奖学金。每学年开学评定，只看上一学年所有必修课的成绩，参考标准为成绩加外语水平。</p>
          <p>大一年级评定如果通过四级，则当年英语课程成绩赋满分。大二及以上年级评定未通过四级无法参与教学金评定；如果通过六级，当年英语课程成绩赋满分。</p>
          <p>成绩通过过去一学年所有必修课的平均学分绩 GPA 排名，计算方法为：</p>
          <p class="formula">GPA = Σ(课程成绩 × 课程学分) / Σ课程学分</p>
          <p>即过去一学年所有课程成绩与学分乘积之和，除以过去一学年所有课程学分之和。</p>
        `,
      },
      {
        id: 'special-scholarship',
        title: '专项奖学金',
        summary: '专项奖学金更多颁发给竞赛获奖、专利和论文等成果。',
        html: `
          <p>除去学业奖学金，最多的就是专项奖学金。</p>
          <p>专项奖学金更多是颁发给竞赛获奖的，评定时间是每年的四月左右，也是评定上一学年所有竞赛获奖。只有在竞赛立项名单中的比赛才可以申请专项奖学金，竞赛立项名单具体可以查看群文件。</p>
          <p>除去比赛，还可以通过专利、论文等方式申请。</p>
        `,
      },
      {
        id: 'major-transfer',
        title: '转专业',
        summary: '转专业每学年只办理一次，通常在第二学期开学第一周。',
        html: `
          <p>转专业相关政策文件可以在教务处官网（<a href="https://jwc.zut.edu.cn/" target="_blank" rel="noreferrer">https://jwc.zut.edu.cn/</a>）查询，<strong>每年暑假会更新各学院转专业工作实施方案</strong>。</p>
          <p>相关经验贴：<a href="https://www.yuque.com/mikumiku-scx66/nokstn/gp9csb" target="_blank" rel="noreferrer">https://www.yuque.com/mikumiku-scx66/nokstn/gp9csb</a></p>
          <p>办理时间：在每学年第二学期，也就是春季学期开学第一周办理，每学年只办理一次。</p>
          <p>办理要求和程序：学生应在开学第一周周三之前，填好申请表，经所在学院审核后交到转入专业所属学院。具体按照《中原工学院普通本科生转专业实施细则》（中工教〔2024〕20号）（<a href="https://jwc.zut.edu.cn/info/1083/2538.htm" target="_blank" rel="noreferrer">https://jwc.zut.edu.cn/info/1083/2538.htm</a>）规定进行办理。</p>
        `,
      },
    ],
  },
  {
    path: '/services',
    name: '服务与其他',
    icon: 'Wifi',
    eyebrow: '零碎但常用',
    title: '服务与其他',
    description: '校园网、活动、消费方式和银行卡，这些问题开学后很快就会遇到。',
    sections: [
      {
        id: 'network',
        title: '校园网（校园卡）',
        summary: '是否办理校园网可以按个人需要决定，部分校内网站也可通过 WebVPN 访问。',
        html: `
          <p>校园内无法自己办理宽带，如果需要使用 WiFi 需要办理校园网。访问某些校内网站需要用到校园网，但是情景并不频繁，根据自己个人需要可以考虑是否办理校园网。</p>
          <p><mark>使用校园网可以办理单宽或者办校园电话卡</mark>，也可以在二手交易群或其他二手交易市场租借别人的。</p>
          <p>如果需要校内特定 IP 访问网站，可以通过官网 WebVPN 访问一些常见校内网站。</p>
          <p>如果有需要办理，可以关注微信公众号：<strong>中工校园网</strong>，里面有各个运营商的套餐详情。开学后可以到南苑商务中心的营业厅进行办理。校园网出现问题也可以在公众号内找到对应解决办法。</p>
        `,
      },
      {
        id: 'activities',
        title: '活动相关',
        summary: '全校性活动较少，社团等小众活动更多。',
        html: `
          <p>学校每年有较少的全体活动，有素质拓展和运动会两项面向全体学生的活动，有较多的小众群体活动，比如社团等。</p>
        `,
      },
      {
        id: 'payment',
        title: '学校消费/食堂支付方式',
        summary: '校园一卡通更多用于身份凭证，不是强制消费工具。',
        html: `
          <p>校园一卡通无强制使用消费场景，更多是用于期末考试等证明个人身份的证件。</p>
        `,
      },
      {
        id: 'bank-card',
        title: '银行卡',
        summary: '如果假期需要自行办卡，建议避开建设银行。',
        html: `
          <p>如果通知书内不含银行卡，学校银行卡会在开学后发放。如果假期需要用到银行卡可以自行办理，<strong>建议不要办理建设银行</strong>。</p>
          <p>学校使用的银行就是建设银行。如果已有建行卡，学校的卡会变成二类卡，交易会限额；校内报销、奖助学金发放都是通过学校银行卡进行发放，容易出现发放失败，所以建议自行办理的话办理其他银行的银行卡。</p>
        `,
      },
    ],
  },
]
