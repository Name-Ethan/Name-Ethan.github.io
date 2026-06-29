import Preface from '../content/home/preface.md'
import Contributing from '../content/home/contributing.md'
import Campus from '../content/arrival/campus.md'
import Majors from '../content/arrival/majors.md'
import Precheck from '../content/arrival/precheck.md'
import StudentTicket from '../content/arrival/student-ticket.md'
import Route from '../content/arrival/route.md'
import Documents from '../content/arrival/documents.md'
import DormAssign from '../content/life/dorm-assign.md'
import DormRules from '../content/life/dorm-rules.md'
import Commute from '../content/life/commute.md'
import Express from '../content/life/express.md'
import Books from '../content/study/books.md'
import Language from '../content/study/language.md'
import EntryExam from '../content/study/entry-exam.md'
import SelfStudy from '../content/study/self-study.md'
import MilitaryTraining from '../content/study/military-training.md'
import Medical from '../content/affairs/medical.md'
import Scholarship from '../content/affairs/scholarship.md'
import AcademicScholarship from '../content/affairs/academic-scholarship.md'
import SpecialScholarship from '../content/affairs/special-scholarship.md'
import MajorTransfer from '../content/affairs/major-transfer.md'
import Network from '../content/services/network.md'
import Activities from '../content/services/activities.md'
import Payment from '../content/services/payment.md'
import BankCard from '../content/services/bank-card.md'

export const guidePages = [
  {
    path: '/',
    name: '首页',
    icon: 'Home',
    eyebrow: '非官方并不唯一指定新生手册',
    title: '中原工学院生存指北',
    description: 'Copyright © 计算机学院 计科222 黄徵琪',
    home: true,
    sections: [
      {
        id: 'preface',
        title: '写在最前',
        summary: '',
        component: Preface,
      },
      {
        id: 'contributing',
        title: '贡献名单',
        summary: '',
        component: Contributing,
      },
      {
        id: 'updates',
        title: '更新公告',
        summary: '',
        updates: true,
      },
    ],
  },
  {
    path: '/quick-start',
    name: '快速开始',
    icon: 'Rocket',
    eyebrow: '按阶段定位重点',
    title: '快速开始',
    description: '按入学前、入学时、入学后三个阶段快速定位重点内容。',
    direct: true,
    sections: [
      {
        id: 'timeline',
        title: '入学阶段',
        summary: '先看阶段，再按需要进入对应专题页面。',
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
        component: Campus,
      },
      {
        id: 'majors',
        title: '专业分布',
        summary: '除软件学院软件工程外，其他专业均在龙湖校区。',
        component: Majors,
      },
      {
        id: 'precheck',
        title: '预报到',
        summary: '录取结果出来后，可通过招生官网查询专业并加入企业微信班级群。',
        component: Precheck,
      },
      {
        id: 'student-ticket',
        title: '火车/高铁学生优惠',
        summary: '新生没有学生证，乘车核验时需要带录取通知书走人工通道。',
        component: StudentTicket,
      },
      {
        id: 'route',
        title: '如何到校',
        summary: '优先参考新生入学手册和学院通知，也可以询问班助是否有接站安排。',
        component: Route,
      },
      {
        id: 'documents',
        title: '所带证件',
        summary: '所有证件建议提前放进文件袋，并随身放在背包中。',
        component: Documents,
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
        component: DormAssign,
      },
      {
        id: 'dorm-rules',
        title: '熄灯/门禁/电器功率',
        summary: '门禁和熄灯时间要记牢，大功率电器不要碰。',
        component: DormRules,
      },
      {
        id: 'commute',
        title: '日常通勤',
        summary: '新生不建议购买或接手校内旧电动车。',
        component: Commute,
      },
      {
        id: 'express',
        title: '快递物流',
        summary: '龙湖校区快递地址和驿站位置。',
        component: Express,
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
        component: Books,
      },
      {
        id: 'language',
        title: '外语小语种',
        summary: '非英语考生建议尽早和班助、班干部或外语教学办确认开课安排。',
        component: Language,
      },
      {
        id: 'entry-exam',
        title: '开学考',
        summary: '开学考试用于检验高考笔迹，不进行成绩评定。',
        component: EntryExam,
      },
      {
        id: 'self-study',
        title: '早晚自习',
        summary: '早晚自习由各学院自行安排。',
        component: SelfStudy,
      },
      {
        id: 'military-training',
        title: '军训',
        summary: '军训有学分，是必修内容。',
        component: MilitaryTraining,
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
        component: Medical,
      },
      {
        id: 'scholarship',
        title: '奖助相关',
        summary: '详细政策以学生手册、学生处和资助管理中心官网为准。',
        component: Scholarship,
      },
      {
        id: 'academic-scholarship',
        title: '学业奖学金',
        summary: '学业奖学金按上一学年必修课成绩和外语水平评定。',
        component: AcademicScholarship,
      },
      {
        id: 'special-scholarship',
        title: '专项奖学金',
        summary: '专项奖学金更多颁发给竞赛获奖、专利和论文等成果。',
        component: SpecialScholarship,
      },
      {
        id: 'major-transfer',
        title: '转专业',
        summary: '转专业每学年只办理一次，通常在第二学期开学第一周。',
        component: MajorTransfer,
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
        component: Network,
      },
      {
        id: 'activities',
        title: '活动相关',
        summary: '全校性活动较少，社团等小众活动更多。',
        component: Activities,
      },
      {
        id: 'payment',
        title: '学校消费/食堂支付方式',
        summary: '校园一卡通更多用于身份凭证，不是强制消费工具。',
        component: Payment,
      },
      {
        id: 'bank-card',
        title: '银行卡',
        summary: '如果假期需要自行办卡，建议避开建设银行。',
        component: BankCard,
      },
    ],
  },
]
