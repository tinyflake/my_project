import React from "react";
import { connect } from "dva";
import styles from "./index.less";
import Head from "../../components/head-tag/index";
import { Tabs } from "antd";
import { Fuwu, Si, JinUs } from "../../utils/image";
import { RightOutlined } from "@ant-design/icons";
import Footer from "./../../components/footer/index";
import Loginandreg from "../../components/loginandreg";
const { TabPane } = Tabs;
function JoinUs(props) {
  return (
    <div className={styles.base}>
      <Head />
      <div className={styles.banner}>
        <img src={JinUs} alt="" />
      </div>
      <div className={styles.main}>
        <div className={styles.tab}>
          <Tabs tabPosition="left">
            <TabPane
              tab={
                <h1>
                  <span>关于平台</span>
                  <RightOutlined style={{ fontSize: "20px", color: "#666" }} />
                </h1>
              }
              key="1"
            >
              <h1>关于平台</h1>
              <div className={styles.tab_div}>
                <h4>一、平台简介</h4>
                <p className={styles.text}>
                  项目网（xiangmu.com）隶属于上海特火贸易有限公司，成立于2006年，拥有国内网络招商平台识别度较高域名的项目网（xiangmu.com），运营14年多来，项目网（xiangmu.com）为3000多家国内外企业通路建设、渠道拓展、产品展销、品牌形象推广提升、空白市场开拓做出了突出贡献，确立了其在中国网络招商服务行业的领先地位，是众多品牌商家选择招商加盟业务拓展的首选主流合作平台之一。
                </p>
                <p className={styles.text}>
                  用户在百度、谷歌、搜狗、360搜索、搜搜等各大搜索引擎平台输入“项目”、“加盟项目”、“加盟项目网”、“项目加盟”、“项目加盟网”、“项目网”、“加盟项目排行榜”等主要关键词，项目网（xiangmu.com）都在搜索结果中排名处于领先位置，已经成为众多知名品牌和诚信企业项目选择招商加盟推广宣传的主流网站和信息入口。
                </p>
                <p className={styles.text}>
                  项目网建站14年以来，见证了中国营销环境的变革和升级，一直致力于帮助企业品牌和销售渠道通路的对接，帮助中国广大投资创业者群体找到赚钱好项目。
                </p>
                <br />
                <br />
                <h5 style={{ color: "#333" }}>
                  第一：解决企业品牌渠道通路建设问题{" "}
                </h5>
                <p className={styles.text}>
                  幅员辽阔的中国的商业市场对于中国无数的中小微型企业来说虽然意味着巨大的市场空间，同时也对于中小微型企业完全依靠自身的力量在中国的地域上进行渠道建设造成了极大困难。很多企业都组建了自己的招商部门来发展业务，在前几年信息不对称的市场环境下，通过简单的“守株待兔”式的等上门客户咨询或者在传统媒体上做点推广宣传，就能获得不俗的效果。但是这样的日子随着如今互联网媒体的高度发达透明、传统招商推广手段越来越吸引不到客户而变成昨日黄花，绝大多数企业的招商部门陷入了“客户在哪儿？”、“客户都去哪儿了？”、“招商部门没有客户可以联系”等的困境。缺乏对互联网等新媒体资源的运作能力和大数据时代的客户信息获取能力，让很多企业无法突破新客户获取的瓶颈。所以，项目网希望能构建一个营销网络招商推广的定向服务平台，让中国无数的中小微型企业的招商部门依靠我们的平台注入新的动力。
                </p>
                <br />
                <h5 style={{ color: "#333" }}>
                  第二：帮助中国广大投资创业者群体找到赚钱好项目{" "}
                </h5>
                <p className={styles.text}>
                  由于社会诚信度问题、前期监管问题，社会上圈钱、欺诈项目频出，让创业者如履薄冰，同时选择好项目之后后期是否可以赚钱也无法预知，中国创业投资者在寻找项目时缺乏有针对性的引导帮助。针对这种情况，项目网坚持选择诚信的项目来作为推广的目标，以严格的审核流程确保创业项目安全可靠，打造一个良好的创业加盟新环境，致力于创造一个全新的加盟代理新环境，专注于为广大创业者提供最好的项目，打造一个诚信的商机聚合平台为中国的投资创业者提供有诚信保障、品质保障的好商机，从而圆了他们的创业梦、致富梦，实现我们的中国梦。
                </p>
                <br />
                <br />
                <h4>二、项目网合作优势 </h4>
                <p>2.1网站栏目设置 </p>
                <p className={styles.text}>
                  项目网开设了环保节能、家居建材、食品特产、服装鞋帽、礼品饰品、玩具动漫、汽摩服务、机械设备、老字号、服务行业、餐饮酒店、教育培训、医疗保健、美容健康、休闲娱乐
                  零售专卖、通讯家电、IT网络、新奇特、家纺用品、干洗清洁、母婴妇幼等共22个一级行业类别、242个二级行业类别，基本涵盖了目前各行业领域投资者投资看好、国家各项政策大力扶持倾斜的朝阳产业。
                </p>
                <p className={styles.text}>
                  项目网以专题海报的方式对每个合作项目进行深度展示。为每个项目提供品牌介绍、详细产品图、众多店面图、各种项目视频、招商现场图文、项目最新动态资讯等全方位介绍，
                  从企业创立情况、创始人背景、品牌发展历程、当前运营情况一一展现，让创业者一目了然成熟于胸。通过轻松留言的方式，24小时内获得即时回复，寄出项目详细资料，实时与品牌总部相关人员获得对接，不错过创富良机。
                </p>
                <p>2.2 上项目网就相当于天天逛大型商机展会</p>
                <p className={styles.text}>
                  项目网由于其特定的行业定位以及自身域名号召力，关注平台的创业者很多，其中不通过搜索引擎引流而直接在浏览器中输入“项目网”进入网站的用户也占了相当比例，平均每天有3万人次在项目网平台上寻找商机，有近万人都是有经验的经销商和加盟商，投资能力都在15-20万以上，同时项目网通过提供海量的创业商机资讯、针对性强的招商指导，以精准的信息传播为创业投资者和品牌招商企业提供信息对接桥梁，向品牌招商企业提供深度的媒体推广服务和数据库营销支持，为品牌招商企业打造7Х24小时、365天不落幕的网上招商博览会！
                </p>
                <p>2.3项目网各项数据指标说明 </p>
                <p className={styles.text}>1）项目网注册会员 </p>
                <p className={styles.text}>
                  截止2020年10月底，项目网经过14年积累，已有172万实名制注册会员，95%注册会员为全国各地有明确创业投资欲望、找项目合作的投资者，该人群普遍拥有一定的资金实力、在当地开展项目所需的人脉资源和行业背景，是品牌招商企业在各地拓展渠道通路首选的人群对象；
                </p>
                <p className={styles.text}>2）合作品牌招商企业 </p>
                <p className={styles.text}>
                  截至2020年10月底，项目网共收录了82743条品牌招商项目信息，正式在项目网投放招商广告的招商品牌累计超过3000家。
                </p>
                <p className={styles.text}>3）流量及alexa排名 </p>
                <p className={styles.text}>
                  截止2020年10月底，项目网日均IP
                  8万（相当于每天举办一场有8万多名具有明确投资意向专业观众参观的连锁加盟招商展会），在全球网站排名Alexa排名数为世界排名42,735，日均PV31.5万，在同行业专业垂直类网站中流量指标名列前茅。
                </p>
                <br />
                <br />
                <h4>如何与项目网合作？ </h4>
                <p>客户必须提供： </p>
                <p>1、营业执照以及其他生产、经营资格的证明文件；</p>
                <p>2、质量检验机构对广告中有关商品质量内容出具的证明文件； </p>
                <p>3、税务登记证明；</p>
                <p>4、法人身份证证明； </p>
                <p>5、如有明星代言的需提供明星代言协议证明；</p>
                <p>6、涉及专利产品或者专利方法的，应当标明专利号和专利种类；</p>
              </div>
            </TabPane>
            <TabPane
              tab={
                <h1>
                  <span>救助合作</span>
                  <RightOutlined style={{ fontSize: "20px", color: "#666" }} />
                </h1>
              }
              key="2"
            >
              <h1>救助合作</h1>
              <div className={styles.tab_div_hezuo}>
                <h4
                  style={{
                    color: "#d71c13",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "5px",
                  }}
                >
                  项目网会员推广服务内容及报价单（2021年度）
                </h4>
                <h4
                  style={{
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "5px",
                  }}
                >
                  为什么要与项目网合作？
                </h4>
                <p
                  className={styles.te}
                  style={{ background: `url(${Si}) no-repeat 2px 11px` }}
                >
                  让广告出现在用户感兴趣的地方才有效，贵品牌广告将会在项目网所有与贵品牌所属行业相关的页面中出现，做到精准投放。
                </p>
                <p
                  className={styles.te}
                  style={{ background: `url(${Si}) no-repeat 2px 11px` }}
                >
                  我们遵从“眼球聚焦”和“重点服务”原则，对全站的广告数量进行严格的限制，同时尽量一个二级行业只服务2-3家客户，以保证品牌广告的最大效果！
                </p>
                <p
                  className={styles.te}
                  style={{ background: `url(${Si}) no-repeat 2px 11px` }}
                >
                  项目网现有每天的访问人群，相当于每天举办一场有3万名具有明确投资意向专业观众参观的连锁加盟招商展会，参加一个每天人流量相当的连锁加盟展会，最普通的3*3平米标准展位、人员差旅食宿、宣传资料等各项费用加起来，没有20000-30000元支出下不来，效果肯定没有在项目网投放广告这么持续。你只要用参加一次普通展会的钱，在项目网这样的正规行业网站就能做全年的招商推广，何乐而不为？
                </p>
                <br />
                <br />
                <h4>项目网网站参数指标说明：</h4>
                <p>
                  （1）网站建站时间长，10年磨一剑，潜心专注品牌招商加盟、渠道通路建设；网站平台技术稳定，服务水准始终一流，老客户续费率高，在客户群体中积累了良好口碑；
                </p>
                <p>
                  （2）网站日均独立ip维持在3.2万—3.8万（有淡旺季之分），每年保持不低于10%的流量增长速度；网站日pv浏览量6.8万—8万；
                </p>
                <p>
                  （3）搜索引擎收录量始终保持稳定增长，网站整体呈现稳定的发展势头；
                </p>
                <p>
                  （4）ALEXA数据排名三月平均：41,953位，流量保持稳定；（该数据统计以项目网2013年12月10日平台统计数据为蓝本）
                </p>
                <p>
                  （5）访问群体省份分部：广东省占12%，北京市占9%，上海市占8%，江苏省占6%，山东省占5.8%，，浙江省占5.6%，其他省份站46%（以上数据统计分析以项目网2013年3月-12月cnzz站长平台统计数据为蓝本）
                </p>
                <p>
                  （6）网站投资者数据规模为438万名（截止2008年1月份至2013年12月份），庞大的投资者数据源对合作品牌通路渠道拓展提供了有力保障；
                </p>
                <p>
                  （7）网站日投资者留言数1200—1600人次（有淡旺季之分，该数据统计以项目网2013年8月-12月平台统计数据为蓝本）
                </p>
                <p>
                  （8）网站访问用户感兴趣行业分布比例：餐饮业占26%,服饰类占19%，食品特产类占15%，家居建材类占13%，母婴妇幼占8%,医疗美容日化类占6.5%,其他占12.5%；
                </p>
                <p>
                  （9）网站分为22个一级大类别，468个二级行业类别，基本涵盖有渠道通路建设需求的各个行业类别，收录项目信息共18465条（该数据统计以项目网2013年12月10日平台统计数据为蓝本）
                </p>
                <div
                  style={{
                    width: "100%",
                    height: 110,
                    lineHeight: 30,
                    background: " #f6f6f6",
                    padding: "15px 30px",
                    color: " #333",
                    margin: "10px 0",
                    border: "0px none",
                    font: "inherit",
                    boxSizing: "border-box,",
                  }}
                >
                  用户在全球最大的中文搜索引擎网站百度
                  <span>
                    （<a>www.baidu.com</a>）
                  </span>
                  和全球最大的搜索引擎网站
                  <span>
                    （<a>www.google.com</a>）
                  </span>
                  输入“项目”、“找项目”、“加盟项目”、“加盟项目网”、“项目信息”、“发布招商信息”、“加盟项目”、等关键字，项目网
                  <span>
                    （<a>xiangmu.com</a>）
                  </span>
                  都在搜索结果中排名占据前领先位置，是招商加盟网站中为数不多的高权重专业网站之一。
                </div>
                <p>
                  在项目网投放广告，有利于提升品牌形象，增加潜在创业投资群体对品牌的信任度，促进合作的达成。
                </p>
                <br />
                <br />
                <h4>
                  项目网会员推广服务内容及报价说明
                  <span>
                    （表格中凡是标Х的表示没有这项服务，√表示有这项服务）
                  </span>
                </h4>
                <br />
                <img src={Fuwu} alt="" />
                <br />
                <br />
                <br />
                <h4>说明：</h4>
                <p>1、本套餐相关政策如有变更，以最新为准； </p>
                <p>
                  2、发布企业新闻、资讯内容，由会员提交，须经本站审核后方可在前台正式发布显示。发布内容不得重复和含不良信息；
                </p>
                <p>
                  3、在本站发布的所有项目信息、资讯信息需严格遵守《项目网信息发布须知》所列各项条例；
                </p>
                <p>
                  4、以上广告展示位置说明中可点击进入查看详细的广告资源示意图；
                </p>
              </div>
            </TabPane>
            <TabPane
              tab={
                <h1>
                  <span>服务条款</span>
                  <RightOutlined style={{ fontSize: "20px", color: "#666" }} />
                </h1>
              }
              key="3"
            >
              <h1>服务条款</h1>
              <div className={styles.tab_div}>
                <h4
                  style={{
                    color: "#d71c13",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  客户须知
                </h4>
                <br />
                <p className={styles.text}>
                  欢迎阅读项目网服务条款协议（下称“本协议”）。本协议阐述之条款和条件适用于你使用项目网网站（所涉域名为:www.xiangmu.com下同），所提供全球企业间进行贸易和交流的各种工具和服务（下称“服务”）。
                </p>
                <br />
                <h5>一、服务条款的确认和接纳 </h5>
                <p className={styles.text}>
                  项目网的各项运作权、解释权和所有权归项目网。一旦用户使用了该服务，即表示用户已接受了以下所述的条款和条件。如果用户不同意接受全部的条款和条件，那么用户将无权使用该服务。当用户完成注册并点击本协议下方"同意"键时，即表示用户已同意受项目网网站服务协议约束，包括但不限于本协议、项目网会员服务协议和隐私权政策等。
                </p>
                <h5>二、注册要求如下:</h5>
                <p>（1）会员注册可以个人名义或单位名义注册。</p>
                <p>（2）会员注册需提供相应真实的个人资料或单位资料。</p>
                <p>（3）会员需不断更新注册资料，符合准确、详细和及时的要求。</p>
                <br />
                <h5>三、注册协议的修改和服务修订</h5>
                <p className={styles.text}>
                  项目网保留在任何时候自行决定对服务及其相关功能、应用软件变更、升级、修改、转移的权利。项目网进一步保留在服务中开发新的模块、功能和软件或其它语种服务的权利。上述所有新的模块、功能、软件服务的提供，除非项目网另有说明，否则仍适用本服务协议。项目网会员在此同意项目网在任何情况下都无需向会员或第三方在使用服务时对其在传输或联络中的迟延、不准确、错误或疏漏及因此而致使的损害负责。
                </p>
                <br />
                <h5>四、会员的帐号，密码及其安全性</h5>
                <p className={styles.text}>
                  项目网根据会员号和其密码确认使用服务的会员的身份。会员应妥善保管会员号和密码，并对其使用，包括遗失承担责任。会员承诺，其密码或帐号遭到未获授权的使用，或者发生其他任何安全问题时，将立即通知项目网。会员在此同意并确认，项目网对上述情形产生的遗失或损害不负责任。
                </p>
                <br />
                <h5>五、知识产权</h5>
                <p>
                  （1）上海特火贸易有限公司是服务所有权利的拥有者。服务包含商业秘密和全世界范围内的版权和其它知识产权。服务的全部权利，包括所有权和知识产权将由项目网公司保留。其它本协议中未经提及的权利亦由项目网保留。
                </p>
                <p>
                  （2）项目网（www.xiangmu.com），项目网及相关的标识和徵记是上海特火贸易有限公司在中国和其它国家的商标并受到版权法，商标法和其它知识产权法的保护。未经授权地复制，模仿，使用或发布上述标识，均被禁止。
                </p>
                <p>
                  （3）本网站所涉及的所有项目信息（包括但不限于项目名称、品牌，公司名称、联系人及联系信息，产品的描述和说明，相关图片、视讯
                  等），均由客户或会员依法对其真实性、合法性承担全部责任。任何单位或个人认为项目网网页内容（包括但不限于项目网会员发布的项目信息）可能涉嫌侵犯其合法权益，应该及时向项目网提出书面权利通知，并提供身份证明、权属证明、具体链接（URL）及详细侵权情况证明。项目网在收到上述法律文件后，将会依法尽快移除相关涉嫌侵权的内容。
                </p>
                <br />
                <h5>六、免责声明</h5>
                <p>
                  （1）项目网展示的所有信息内容系由店铺经营者或第三方用户发布，可能存在发布者所发布的信息，并未获得品牌所有人有效授权。本平台会加强审核，但无法完全排除差错或疏漏。郑重声明:本平台仅为免费注册用户提供免费的信息发布渠道，但不对其发布信息的真实性、准确性和合法性负责，项目网对此也不承担任何法律责任。对于从本网站或本网站的任何有关服务所获得的资讯、内容或广告，您接受或信赖任何信息所产生之风险应自行承担，本网对任何使用或提供本网站信息的商业活动及其风险不承担任何责任。
                </p>
                <p>
                  （2）本网站若因线路及本公司所控制范围以外的硬件故障或其它不可抗力（包括但不限于政府禁令、现行生效的适用法律或法规的变更、火灾、地震、动乱、战争、停电、电信部门技术调整、通讯线路中断等不可预见、不可避免、不可克服和不可控制的事件）的影响，导致网络无法正常运营，以及因黑客攻击、计算机病毒侵入、他人蓄意破坏等原因而造成网站的暂时性关闭和（或）造成个人资料泄露、丢失、被盗用或被篡改等，本网站亦不负任何责任。
                </p>
                <br />
                <h5>七、隐私</h5>
                <p className={styles.text}>
                  尽管第五条规定的许可使用权，项目网将仅根据本公司的隐私声明使用“您的资料”。本公司隐私声明的全部条款属于本协议的一部分，因此，您必须仔细阅读。请注意，您一旦自愿地成为项目网的会员，披露“您的资料”，该等资料即可能被其他人士获取和使用。
                </p>
                <br />
                <h5>八、您授予本公司的许可使用权</h5>
                <p className={styles.text}>
                  您授予本公司独家的、全球通用的、免费的、永久的使用权利（并有权在多个层面对该权利进行再授权），使本公司有权（全部或部分的）使用、修订、复制、发布、改写、翻译、分发、执行和展示“您的资料”或者制作其派生作品，和/或与现在已知或日后开发的任何形式、媒体或技术，将“您的作品”纳入其他作品内。
                </p>
                <br />
                <h5>九、项目网拒绝提供担保</h5>
                <p className={styles.text}>
                  项目网网站提供空间，项目网会员可自行张贴其商业信息，包括其文字描述、图片或照片说明。项目网不对上述信息的真实性、准确性或及时性、完整性负责。用户同意自行承担由于使用项目网服务所获知信息而产生的全部商业风险，项目网及其组织机构不承担任何责任。
                </p>
                <br />
                <h5>十、会员服务管理</h5>
                <p className={styles.text}>
                  项目网会员保证并同意提供真实，准确、及时、完整的信息，包括会员自身的相关资料，维护并及时更新上述资料，以保证其真实，准确，及时和完整性。会员须承诺不传输、发布任何非法的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的、淫秽等信息资料。另外，会员也不能传输、发布任何教唆他人构成犯罪行为的资料；不能传输、发布助长国内不利条件和涉及国家安全的资料；不能传输、发布任何不符合国际法律、国家法律和当地法规的资料。会员未经许可而非法进入其它电脑系统是禁止的。若会员的行为不符合以上提到的服务条款，项目网有权中止或终止会员的会员资格并拒绝会员使用任何现有的服务及以后可能提供的功能或服务。项目网不为任何会员发布的内容负责，包括但不限于任何内容中任何错误或遗漏而衍生之任何损失或损害。
                </p>
                <br />
                <h5>十一、结束服务</h5>
                <p>
                  (1) 项目网有权在下列情形下拒绝会员的订购或终止用户的会员资格。
                </p>
                <p>(a) 会员违反了本协议或会员服务协议的任一条款；</p>
                <p>
                  (b)
                  项目网或其授权的第三方无法确认会员提供的注册登记资料或身份信息；
                </p>
                <p>(c) 根据本协议相关约定而终止服务；</p>
                <p>
                  (2)如协议一方，除为重组或兼并的目的外，通过决议或由法院判令解散，则接收方或指定的债权人代表有权经通知后终止本协议。
                </p>
                <p>
                  (3)协议期内，在会员被第三方多次投诉等合理情形下，为避免会员及项目网的损失，项目网有权以电子邮件或其他书面形式通知会员后解除本合同，本合同自通知到达会员处时终止。合同解除后，会员有权凭项目网就本合同开具的发票原件及退款申请要求上海特火贸易有限公司退还未履行部分的合同价款至会员名下的指定帐号。
                </p>
                <br />
                <br />
                <h5>十二、法律精神</h5>
                <p>
                  用户和项目网一致同意有关本协议以及使用项目网的服务产生的争议交由仲裁解决，但是项目网有权选择采取诉讼方式，并有权选择受理该诉讼的有管辖权的法院。若有任何服务条款与法律相抵触，那这些条款将按尽可能接近的方法重新解析，而其它条款则保持对用户产生法律效力和影响。
                </p>
                <p>附:</p>
                <p className={styles.text}>中华人民共和国电信条例.</p>
                <p className={styles.text}>互联网信息服务管理办法.</p>
                <p className={styles.text}>互联网电子公告服务管理规定.</p>
                <p className={styles.text}>
                  中华人民共和国计算机信息网络国际联网管理暂行规定.
                </p>
              </div>
            </TabPane>
            <TabPane
              tab={
                <h1>
                  <span>法律声明</span>
                  <RightOutlined style={{ fontSize: "20px", color: "#666" }} />
                </h1>
              }
              key="4"
            >
              <h1>法律声明</h1>
              <div className={styles.tab_div}>
                <h4
                  style={{
                    color: "#d71c13",
                    fontSize: "16px",
                    lineHeight: "30px",
                    marginBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  客户须知
                </h4>
                <br />
                <p>
                  <span>项目网提醒您：</span>
                  在使用项目网各项服务前，请您务必仔细阅读并透彻理解本声明。您可以选择不使用项目网，但如果您使用项目网，您的使用行为将被视为对本声明全部内容的认可。
                </p>
                <p>
                  <span>第一条、</span>
                  鉴于项目网作为一种传播媒介，其中链接的相关广告信息，均由广告主自行提供。项目网对此等信息的准确性、完整性、合法性或真实性均不承担任何责任。此外，项目网对任何使用或提供本网站信息的商业活动及其风险不承担任何责任，不保证每一广告中商业机会的收益或每一产品的质量或每一商业模式的营利。您应该对使用项目网提供的服务结果自行承担风险。
                </p>
                <p>
                  <span>第二条、</span>
                  项目网不做任何形式的保证：不保证服务一定满足您的要求，不保证服务不中断，不保证交易结果的安全性、正确性、及时性、合法性（但上述情况可以通过项目网相关规则进行相应处理）。因网络状况、通讯线路、第三方网站等任何原因而导致您不能正常使用项目网服务，项目网不承担任何法律责任。
                </p>
                <p>
                  <span>第三条、</span>
                  项目网尊重并保护所有使用项目网用户的个人隐私权，您的个人资料，非经您亲自许可或根据相关法律、法规的强制性规定，项目网不会主动地泄露给第三方（因政府执法部门、国家司法部门要求除外）。任何由于黑客政击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常经营之不可抗力而造成的个人资料泄露、丢失、被盗用或被篡改等，本网站亦不负任何责任。
                </p>
                <p>
                  <span>第四条、</span>
                  凡本网注明“来源：项目网(www.xiangmu.com)”的文字、图片和音频视频作品，版权均属xiangmu.com.com所有。任何媒体、网站或个人未经本网书面授权不得转载、链接、转贴或以其他方式使用；已经本网书面授权的，在使用时必须注明“来源：项目网(www.xiangmu.com)”。
                </p>
                <p>
                  <span>第五条、</span>
                  项目网转载作品（包括论坛内容）出于传递更多信息之目的，并不意味项目网赞同其观点或证实其内容的真实性。如其他媒体、网站或个人转载使用，必须保留本网注明的“稿件来源”，并自负法律责任。
                </p>
                <p>
                  <span>第六条、</span>
                  由于地址不明等原因，项目网使用部分文字、摄影作品报酬未能及时支付，在此深表歉意。相关权利人如发现应该及时向项目网提出书面权利通知，并提供身份证明、权属证明、具体链接（URL）及详细侵权情况证明。项目网在收到上述法律文件后，将会依法尽快移除相关涉嫌侵权的内容。在此情况下，项目网不承担任何责任。
                </p>
                <p>
                  <span>第七条、</span>
                  除项目网注明之服务条款外，其他一切因使用项目网发布系统而引致之任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其所造成的损失（包括因下载而感染电脑病毒），项目网概不负责，亦不承担任何法律责任。
                </p>
                <p>
                  <span>第八条、</span>
                  任何透过项目网的网页而链接及得到之资讯、产品及服务均系网站用户或报纸客户自行发布，项目网对其合法性概不负责，亦不承担任何法律责任。
                </p>
                <p>
                  <span>第九条、</span>项目网所有内容并不反映任何项目网之意见。
                </p>
                <p>
                  <span>第十条、</span>
                  任何单位或个人认为通过项目网的内容可能涉嫌侵犯其合法权益，应该及时向项目网书面反馈，并提供身份证明、权属证明及详细侵权情况证明，项目网在收到上述法律文件后，将会尽快移除被控侵权内容。
                </p>
                <p>
                  <span>第十一条、</span> 拒绝提供担保。
                </p>
                <p>
                  用户明确同意使用项目网服务的风险由用户个人承担。服务提供是建立在免费的基础上。项目网明确表示不提供任何类型的担保，不论是明确的或隐含的，但是对商业性的隐含担保，特定目的和不违反规定的适当担保除外。项目网不担保服务一定能满足用户的要求，也不担保服务不会受中断，对服务的及时性、安全性、真实性、出错发生都不作担保。项目网拒绝提供任何担保，包括信息能否准确、及时、顺利地传送。用户理解并接受下载或通过项目网产品服务取得的任何信息资料取决于用户自己，并由其承担系统受损、资料丢失以及其它任何风险。项目网对在服务网上得到的任何信息，都不作担保。用户不会从项目网收到口头或书面的意见或信息，项目网也不会在这里作明确担保。
                </p>
                <p>
                  <span>第十二条、</span>
                  青少年用户特别提示：青少年用户必须遵守全国青少年网络文明公约：要善于网上学习，不浏览不良信息；要诚实友好交流，不侮辱欺诈他人；要增强自护意识，不随意约会网友；要维护网络安全，不破坏网络秩序；要有益身心健康，不沉溺虚拟时空。
                </p>
                <p>
                  项目网致力维护一个诚信、互尊、民主、互助的交流环境。凡发贴者，均须认同接受以下协议：
                </p>
                <p>
                  (1)、项目网只提供一个项目信息交流平台，不控制张贴内容。张贴内容及因之产生的后果，均由发贴者自行负责，与项目网无关。我们对用户使用项目网所产生的一切后果，不承担任何责任；
                </p>
                <p>
                  (2)、信息发布内容须符合中华人民共和国和所在国法律，符合当地道德规范和风俗文化，内容真实，无欺诈；
                </p>
                <p>
                  (3)、谢绝一切与项目信息无关的内容，尤其不涉及政治、宗教、种族、毒品、枪支等一切议题；
                </p>
                <p>(4)、不发布涉及他人版权的内容，不发布与栏目无关之内容；</p>
                <p>(5)、不贴与传销、直销有关的内容。</p>
                <p>项目网对以上条款保留解释权、修改权。</p>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Loginandreg />
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "JoinUs");
  return {};
};
export default connect(mapStateToProps)(JoinUs);
