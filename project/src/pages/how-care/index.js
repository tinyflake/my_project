import React, { useState, useEffect } from "react";
import { connect } from "dva";
import styles from "./index.less";
import Head from "../../components/head-tag/index";
import Footer from "./../../components/footer/index";
import Loginandreg from "../../components/loginandreg";
import {
  CareDog,
  CareDog1,
  CareDog2,
  CareForAnimal,
  EatForAnimal,
  ExerciseForAnimal,
  TocareCat,
  TocareCat1,
  TocareCat2,
  TocareCat3,
  TocareCat4,
  TocareCat5,
  ToProtect,
} from "../../utils/image";
function HowCare(props) {
  useEffect(() => {}, []);
  const [anchor, setanchor] = useState(null);
  const goTo = (value) => {
    setanchor(value);
  };
  //滚动
  const ifHasAnchorJustScorll = () => {
    // 对应id的话, 滚动到相应位置
    if (!!anchor) {
      let anchorElement = document.getElementById(anchor);
      if (anchorElement) {
        window.scrollTo(0, anchorElement.offsetTop - window.innerHeight / 2);
      }
    }
    // 没有的话，滚动到头部
    else {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  };
  ifHasAnchorJustScorll();
  return (
    <>
      <div className={styles.base}>
        <Head />
        <div className={styles.main}>
          <div className={styles.care}>
            <div className={styles.health}>
              <h1 id="toHealth">健康知识篇</h1>
              <div>
                <ul className={styles.list}>
                  <li>
                    <h2> 宠物饮食</h2>
                    <p>
                      无论你养什么宠物，你首先必须要了解宠物的饮食习惯，以及能吃什么，不能吃什么。不能随着自己性子，随便给它吃，随意养，这样宠物很可能被你养坏。所以必须先了解好宠物的生活习惯，依据科学的方式，通过多了解，多学习。有很多宠物都是受环境影响的，另外还要注意喂养时间，喂养食物是否均衡。可以通过学习，和咨询宠物店及专业人士给予饮食方面的指导，给宠物吃些安全放心的食物。还有就是宠物不能喂得太饱，否则宠物易于发胖，影响健康。因此要给宠物合理膳食，定时定量，这样才便于宠物健康成长，这样也能愉悦我们的心情。
                    </p>
                    <div>
                      <img src={EatForAnimal} alt="" />
                    </div>
                  </li>
                  <li>
                    <h2>宠物疫苗</h2>
                    <p>
                      养宠物，还需要给宠物进行接种疫苗，这样有利于宠物的健康，还有就是避免宠物伤害到行人。因此宠物要定期去做疫苗接种，做宠物检查，这样才更能有利于宠物的健康成长。另外在夏天，宠物易于长虱子，所以要经常给宠物喷些驱虫药水，保护宠物的健康。最后还可以在家里必备些宠物的药箱，可以及时处理。
                    </p>
                    <div>
                      <img src={ToProtect} alt="" />
                    </div>
                  </li>
                  <li>
                    <h2> 宠物照顾</h2>
                    <p>
                      说起宠物的照顾，当然是要给宠物一个安心舒适的睡觉环境，避免受环境影响，进而影响睡眠和健康。定时给宠物修剪毛发和指甲，定时给洗澡，带宠物散步。要做好宠物的卫生清洁，所以你一定要勤快，不要怕脏。这样宠物才会健康成长，不会滋生细菌和皮肤病等等。
                    </p>
                    <div>
                      <img src={CareForAnimal} alt="" />
                    </div>
                  </li>
                  <li>
                    <h2> 宠物训练</h2>
                    <p>
                      我们除了对宠物进行照顾外，还要适当的给宠物加以训练，这样能够给我们带来不必要的的麻烦。比如：一般宠物都会比较淘气，没事的时候，很容易在家里捣乱，乱咬东西或者乱拉粑粑或者乱吃其它东西等等。因此我们必须给予正确的训练，让它自己去指定的位置拉粑粑，不能乱咬东西，捣乱。还有如果你想让宠物有些特定的技能，可以训练它拿东西，打滚，或者玩球等等。具体看你训练情况，好的训练不但能减轻我们的任务，还能给我们增加预约感。
                    </p>
                    <div>
                      <img src={ExerciseForAnimal} alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.cat}>
              <h1 id="toCat">猫咪饲养篇</h1>
              <article>
                <p>原标题：猫咪养护基础知识——饲养篇</p>
                <p>
                  时常接到诸位新任铲屎官们的相关问题，我家的猫咪要怎么样伺养？为彻底解决众多喵爸喵妈的困惑，今日就来聊一聊，不一样阶段猫咪的饮食搭配建议。话不多说，上干货~
                </p>
                <div>
                  <img src={TocareCat} alt="" />
                </div>
                <p>
                  <strong>断奶后过多阶段（1.5个月—2.5个月）</strong>
                </p>
                <p>
                  这一阶段能够刚开始喂养小猫粮，但鉴于幼猫的牙齿还没有长成，没法非常好地咀嚼，因此
                  必须把小猫粮用温水泡软。此外最好是要少吃多餐（一天4-5次），按时定点按量，不然非常容易导致消化不良。
                </p>
                <p>
                  TIPS：可辅助宠物专用的的羊奶粉。一定要记住！小猫没法喂纯牛奶，鉴于一般的纯牛奶中含有乳糖，猫猫们的胃肠没法接受乳糖。
                </p>
                <div>
                  <img src={TocareCat1} alt="" />
                </div>
                <p>
                  <strong>初试美食阶段（2.5个月—4个月）</strong>
                </p>
                <p>
                  可直接性喂养猫粮，无需再泡软。另可配备基础营养膏，关节宝，鱼油，微量元素片，幼猫罐头增强营养。
                </p>
                <p>
                  益生菌可备作调理肠胃，预防应激反应。这一阶段猫猫的主要营养来源并非奶粉，因此
                  上面的写到的营养品也是小猫人体急切需要的，针对骨骼补钙，皮肤补充复合维生素B，各种各样肉类罐头食品补充蛋白质等，家长们可别再捂着腰包啦。
                </p>
                <p>
                  应激反应是指小猫到新环境，或是遭受一点惊吓过度的情况下会产生一点不良反应，如腹泻、恶心呕吐等。
                </p>
                <div>
                  <img src={TocareCat2} alt="" />
                </div>
                <p>
                  <strong>青少年阶段（4个月—8个月）</strong>
                </p>
                <p>
                  这一阶段的猫猫处在快速发育期的阶段，经常有写到的尴尬期，大概便是在这个阶段。鉴于骨骼生长的速度过快，猫的身型头形看起来会有点儿不协调没有那麼的可爱好看，但这就是猫猫发育阶段十分关键的1个阶段。
                </p>
                <p>
                  四至五个月是猫咪换牙的情况下，很有可能会食欲不振，主人特别注意并买一些好东东骗它们吃东西才行。
                </p>
                <p>
                  这一阶段的猫猫易发育出较为强健的消化系统，可以吃一点白煮鸡肉，牛肉，鱼肉等。（这里不确定肉类是否有寄生虫的具体情况下不建议生吃）其他的保健品和零食比如卵磷脂，猫条，零食罐头食品，小鱼干都可以适度的喂养。
                </p>
                <p>
                  这一阶段猫会时常舔舐自身的毛发，会吃到肚里，他们吸收不了，因此
                  必须喂养化毛膏来协助他们消化毛发。
                </p>
                <div>
                  <img src={TocareCat3} alt="" />
                </div>
                <p>
                  <strong>迈向成年阶段（8个月—12个月）</strong>
                </p>
                <p>
                  这一阶段猫猫的心理和身体都渐渐走向成熟，也就是性格和身型大概就己经成型了。这时猫猫的身体素质是最棒棒的情况下，它们会历经发情期，很有可能会显得焦躁不安食欲不振，此刻就需要试着给猫猫喂一点易于消化的食品，如湿粮，罐头食品，汤包等。
                </p>
                <div>
                  <img src={TocareCat4} alt="" />
                </div>
                <p>
                  <strong>老年阶段（10岁以后）</strong>
                </p>
                <p>
                  此刻猫猫的各项身体机能都刚开始降低，没法再向之前同样喂养。这时必须喂养老年猫专用的的猫粮，适度增强饮食搭配数次，少吃多餐，少喂脂肪率高的食品避免
                  他过多肥胖或是有吸收阻碍。观测猫猫的牙具体情况，很有可能出現牙齿脱落磨损，那麼最好是将食品泡软。
                </p>
                <div>
                  <img src={TocareCat5} alt="" />
                </div>
                <p>更多关于养猫干货，或者你有养猫经验，欢迎与我们交流分享！</p>
              </article>
            </div>
            <div className={styles.dog}>
              <h1 id="toDog">爱犬饲养篇</h1>
              <div>
                <p>
                  对于大多数人而言，宠物不仅仅是因为喜爱，更是精神与感情上的一种寄托，每当下班回家的时候家里总是有个小东西在惦记着我们，那么怎样的宠物知识才能更好的帮助到我们饲养宠物呢？为您推荐《新手养狗基础知识（必备知识）》，希望能够帮助您寻找更多有关宠物的知识。
                </p>
                <div>
                  <img src={CareDog} alt="" />
                </div>
                <p>
                  很多朋友养狗多年，但对狗狗的生理知识了解甚少，下边是初次养狗必须掌握的狗狗生理知识：
                </p>
                <p> 下边是小编整理的有关狗狗的一些常识性生理知识。</p>
                <p>
                  1.狗狗睡眠时间：幼犬一般要在２０小时左右。成犬是10--15个小时。
                </p>
                <p> 2.狗狗体温：狗狗体温一般从肛门测定，</p>
                <p> (1)小型犬：幼犬38?5-39℃成犬38-39℃</p>
                <p> (2)中型犬：幼犬38?5-39℃成犬38-38?5℃</p>
                <p> (3)大型犬：幼犬38?2-39℃成犬37?5-39℃</p>
                <p>
                  3.狗狗平均寿命：一般来说小型犬的平均年龄要高于大型犬。一般12年为犬的平均年龄。
                </p>
                <p> 4.壮年犬有多少牙齿：42颗。</p>
                <p> 5.狗狗前，后脚各有几颗脚趾：前面5颗，后面4颗。</p>
                <p>
                  6.狗狗鼻子为什么总是湿碌碌的：狗会不断的舔湿自己的鼻子，使细胞可以更多的接触气味分子，以保持嗅觉的灵敏。
                </p>
                <p> 7.狗狗的各项生理参数：</p>
                <p> （1）心跳：成犬70-130次/分，幼犬200次/分</p>
                <p> （2）呼吸：10——30次/分</p>
                <p> （3）脉搏：70——120次/分</p>
                <p> （4）正常心轴：+40度——+100度</p>
                <p> （5）总血量：占体重的8%——9%</p>
                <p> （6）潮气量：251——432毫升</p>
                <p> （7）收缩压：14，9千帕（允许范围12，7——18，1）</p>
                <p> （8）舒张压：7，5千帕（允许范围5，8——9，7）</p>
                <p>
                  （9）染色体：78条血浆量：55，2ml/kgbw（允许范围47，7——73，0）
                </p>
                <p> （10）全血量：94，1ml/kgbw（允许范围76，57——107，3）</p>
                <p>
                  <br />
                </p>
                <p></p>
                <p>
                  <b>cwm50.com扩展阅读</b>
                </p>
                <h2 style={{ color: "blue" }}>
                  怎么养狗和训狗？基础知识要先知
                </h2>
                <br />
                怎么养狗和训狗？基础知识要先知
                <p>
                  怎么养狗和训狗这个问题是很多养狗狗的新人宝宝都会问到的，所以今天小编整理一些养狗狗朋友的经验来给养狗的新人宝宝说道说道。
                </p>
                <div>
                  <img src={CareDog1} alt="" />
                </div>
                <p>1、养狗</p>
                <p>
                  狗狗是很怕热的，一般在它们好不容易度过了夏季后，它们的胃口会突然地变得很好。这一点跟我们人类还是很像的。这时候你会发现狗狗吃完东西过了很短的一段时间它就会又去找吃的或者直接找你来要。出现了这种情况你就要注意一下，虽说狗狗能吃是很好的事情。但你也要注意控制一下它的食物总量，不要让狗狗吃的太多了，否则会引起消化不良的。在冷天的时候，你自做的食物也要狗狗快点吃完，时间久了，食物就没有温度了，狗狗吃了对胃也有伤害。
                </p>
                <p>
                  在天气凉的时候，要注意给狗狗保暖。虽然大部分的狗狗都输不怎么怕冷的，但以防万一还是有必要的。下雨出门的时候要给狗狗穿戴狗狗专有的雨衣。如果不小心弄湿了毛发也要马上把狗狗的毛发擦干，不要再让它乱跑了。因为天气冷了，狗狗的毛发也会增多，这时候就需要你经常给狗狗梳理梳理毛发，防止毛发粘在一起。
                </p>
                <p>2、训狗</p>
                <p>
                  首先你要让狗狗在特定的地方上厕所，否则它弄的到处都是，你会崩溃的。狗狗一般是闻着自己粪便的气味来决定自己在哪上厕所的。所以你确定狗狗在哪上厕所后，就要把其他地方的粪便气味去除的干干净净。然后让它在你指定的地方上厕所，多多重复几次它就明白了。
                </p>
                <p>
                  狗狗在外的时候你尤其要注意不要让它随便的咬东西或吃东西。这个训练是必须的，你要在平时狗狗乱咬东西或吃东西的时候马上阻止它。轻轻地敲它的鼻子用来警告它，这是个不好的习惯。来回的进行几次狗狗就会有意识了。
                </p>
                <p>
                  在这里了小编也只是说了几点比较重要的。要知道怎么养狗狗和训狗狗，还是要自己去探索的。
                </p>
                <h2 style={{ color: "red" }}>养狗注意事项:新手养狗必备知识</h2>
                <br />
                <p>
                  狗狗被认为是人类最好的朋友，如今养狗已成为一种潮流。那么你是否不知道第一次养狗需要注意什么呢?今天就来说说新手新手养狗都要知道什么。
                </p>
                <p align="center"></p>
                <p>
                  1.选择狗狗品种:首先要确保所选狗狗是否合乎家庭的条件，小户型的家不建议养大型犬，狗的味道容易堆积在室内不宜扩散。还需要确定买的狗狗是否健康，小心购买到星期狗，这样不容易存活。
                </p>
                <p>
                  2.犬舍准备:刚到家一个星期是最关键的，这段时间如何不注意，小狗狗很有可能养不活的。为它装备一个“专属空间”俗称“狗窝”选择一个安静的角落和一个温暖的窝，铺上舒适垫子的狗房子、棉窝，或者竹编窝，幼犬需要有自己的空间，那里是它睡觉或在害怕时避难的地方。如果售卖幼犬的地方给了你一条有幼犬母亲气味的毯子，那么你将其放在幼犬窝中会让它更安心。
                </p>
                <p>
                  3.狗粮选择:要知道狗狗可以吃盐，适当的盐分有助于狗狗的成长发育，但是一定不可以吃盐分过高的食物，不然可能会引起狗狗掉毛甚至导致皮肤病。狗狗的主食应该要以狗粮为主，而狗粮主人也要选择优质的天然粮，另外，高糖高脂肪的食物也应当尽量避免给狗狗食用。
                </p>
                <p>
                  4.定时喂食:狗狗需要一个月大才能离开狗妈妈单独养活，在它三、四个月大之前，必需每天吃四顿饭，保证它不要被饿着。
                </p>
                <p>
                  5.清洁洗澡:要注意的是，刚抱回家的小奶狗是不可以马上给它们洗澡的，因为小奶狗刚进门，对家中的环境非常的不熟悉，而且这个时候小奶狗的自身抵抗力也比较弱，要是这个时候给它们洗澡的话很有可能会引起着凉感冒，不过要是主人实在是觉得狗狗身上脏的不行，也是可以使用湿毛巾帮它们擦拭身体的。
                </p>
                <p>
                  6.娱乐训练:小狗在小时候会特别的黏人，不要过于抗拒它，尽量在下班回家的时候抽时间陪陪它，不要让他感到孤单。刚进家门的狗狗还没有完全听话，一旦遇到突发情况很有可能就此失控，因此佩戴牵引绳不仅仅是为了保护自己的狗狗，也是对其他人的安全负责。特别是对于大型犬来说。
                </p>
                <p>
                  7.排便问题:一般而言，刚到家的小狗是不会非常自觉的定点大小便的，小婴儿还会随便拉尿呢!小狗也一样，这个时候主人要采取包容的态度，做好训练的准备。狗狗正常的BB颜色一般是：黄色或者黄褐色、也有偏黑些或者黄白色的，主要跟吃的食物有关;软硬适度，以用手拿起地面刚刚有些痕迹为最好。
                </p>
                <p>
                  8.控制空调:随着夏天的来临，周围环境的温度也越来越高，很多人为了躲避高热的袭击，躲进了空调房中。作为家中一员的狗狗，在炎热的夏天，最好不要在空调房中呆太长时间，尤其是小狗，如果在空调房中呆太长时间会导致身体受凉而诱发疾病。
                </p>
                <p>
                  9.乱咬东西:小狗在断奶后、一月龄左右时，正处在长牙齿期，会很痒;到四五月龄时，因为换牙，也会很痒;至少要到八九月龄，等恒齿完全停止长大，才慢慢不再痒。这期间，它们都会用咬东西的办法来止痒。成年以后就不会乱咬了。
                </p>
                <p>
                  10.驱虫问题:驱虫是对于狗狗是十分重要的，不管是体外寄生虫还是体内寄生虫都需要进行。但是在狗狗刚到你家的时候驱虫会引起狗狗更多的不适应，引起狗狗生病或是对你产生惧怕的心理。在最开始驱虫的时候，建议您采取对狗狗采取伤害最小的方法，例如给狗狗带上跳蚤圈。待狗狗对你采取足够的信任或者在狗狗身体情况最佳的状态下给狗狗驱虫。
                </p>
                <p>
                  11.疫苗接种:3个月以内没有接受疫苗接种的小狗不应该带出门的。
                </p>
                <h2 style={{ color: "red" }}>宠物狗美容基础知识—犬美容</h2>
                <br />
                <p>
                  一只精灵可爱、清洁整齐的狗儿当然受人欢迎，然而若没有适当的定期修饰，你的小天使很快便会变成一只“邋遢大王”。其实狗儿和人一样，需定时打扮一下，而这打扮却不止修饰仪容那么简单，它还可有助防止狗儿患上皮肤病和其他身体的毛病。从小习惯狗儿从小开始，主人便应帮它打扮，让它能习惯一下，那么以后便会容易得多。整个打扮过程不应太长，在当中若狗儿听话，主人便要赞一下它，以示奖励。
                </p>
                <p>
                  当你替它梳毛时，可吩咐它“坐下”，而当洗澡时便可叫它“站着”。但若狗儿显得不愿意，时常乱动乱叫，又咬子，主人便要给予更多耐性，尤其是对小狗。专家意见不要以为帮狗儿打扮十分容易，其实主人在事前也应咨询一些有经验的美容师或繁殖家的意见，看看你狗儿的品种在打扮方面有什么注意事项。现在将会为大家谈谈几项基本的打扮小贴士。
                </p>
                <p>
                  1．洗澡狗儿应每隔四至八星期洗一次澡。若你的狗儿小于八星期，在替它洗澡前应先问问你的兽医，因它们很易感冒或对某些美容产品有敏感。而每次在帮狗儿洗澡前也要先梳毛，因若毛发有结，湿水后只会缠得更紧。
                </p>
                <p>
                  主人应选用适合狗儿的洗毛水及护毛液，但后者却非必需。在洗前可先替狗儿滴上一些眼睛软膏，这可有助保护它们的眼睛。切记要把泡沫液彻底清洗，因若残留在皮肤上会令狗儿过敏。因狗儿很易感冒，事后要用风筒帮它吹干披毛。在未完全吹干前，不可让它外出。
                </p>
                <p>
                  2．梳毛每隔几天便要帮狗儿梳一次毛。当然还要视乎不同狗儿披毛的长短而定。梳毛可助狗儿把披毛上的结解开，平衡皮肤油脂分泌和清除死皮，当然你还可透过这时间和狗儿互相增进感情。在带了狗儿回家后，要尽快让它习惯梳毛，那么在以后它才会视这为生活的一部分。长毛狗儿如阿富汗猎犬、魔天使和拉萨狗等便需要每天梳毛以保持其形状。而金毛寻回犬和洛威拿犬便可一至两星期才梳一次。另外，所用的梳和刷子也要视乎不同狗种而定。
                </p>
                <p>
                  一些梳毛手套和软胶刷子便适合用于披毛柔软的狗儿身上，长毛狗儿便要用梳子。在开始梳前，先从狗儿的头部开始，然后是耳朵、胸和前脚，接着到背部、两侧、肚子和后脚，最后是尾巴。每次梳的时候一点一点地梳，不可太大力。
                </p>
                <p>
                  3．剪指甲八个星期大的小狗要每隔一个月帮它剪一次指甲。每次一点一点地剪，若用狗儿指甲钳帮小狗剪可能太大，可改用人用的。如在小狗走路时听见“卡嗒、卡嗒”的声音，表示它的指甲太长了，主人便要立刻帮它剪，步骤如下：
                  a.握紧狗儿的手。 b.用拇指按住狗儿的手，其他手指则在下面托着。
                  c.用另一只手拿着指甲钳，快而准地剪下，不可犹豫。
                  d.若不慎剪流血，用一些止血粉按住伤口三十秒或直至止血。
                </p>
                <p>
                  4．洗耳朵一星期要帮狗儿洗一次耳朵。用一些棉花球沾清洁液帮它抹耳朵。某些长耳狗种如贵妇犬、曲架犬等需特别注意耳朵的清洁工夫，保证它干净、无味和呈粉红色。
                </p>
                <h2 style={{ color: "blue" }}>
                  新手养狗必须了解的知识要点，新手养狗入门必备攻略
                </h2>
                <br />
                <p>
                  新手养狗必须了解的知识要点，依据小狗的不一样年纪挑选犬粮的种类和喂养频次，在小狗迅速成长期多喂高钙食物，给小狗补充维生素，法定年龄45天龄的小狗必须逐渐按时疫苗接种和除虫，小狗不可以长期性关铁笼里养。
                </p>
                <p></p>
                <p>
                  新手养狗入门必备攻略，小狗在不一样年龄层对饮食搭配的规定不一样，小狗在2个月上下断奶后，以后可以吃小宠物婴儿奶粉或奶糕，每天4～5顿。三月龄后，小狗逐渐吃幼狗粮，每天3～4顿，到六月龄后减至2～3顿，一岁后减至1～2顿，并改喂成狗粮。
                </p>
                <p>
                  从出世三个月上下逐渐，小狗会进到迅速发育期的阶段，这时候主人家必须留意给它补钙补锌，多喂含有优质蛋白质、维他命等营养成分的食材，包含儿童钙片、豆类食品和红萝卜、iPhone等蔬菜水果。
                </p>
                <p></p>
                <p>
                  早已满了45天的幼狗必须逐渐疫苗接种，以防止犬瘟热、细微、犬冠状等病毒感染。初次免疫系统的小狗必须打三针多联预苗，打过最终一针时能够再次打疫苗。此外，小狗还必须按时开展体内外驱虫。六月龄前每一个月驱一次，六月龄后每三个月驱一次。
                </p>
                <p>
                  一切小狗都讨厌被长期性关在铁笼里，他们喜欢运动和随意，期待亲密接触主人家，长期性被豢养在铁笼里的小狗不仅非常容易得病，心理状态也会不健康，具备暴力行为。因而，当主人家在家里时，尽可能散养狗狗。
                </p>
                <p>
                  宠物迷为众多小宠物发烧友收集全新宠物资讯，解释小宠物饲养发生的难题，关心各种各样小宠物身心健康病症，掌握大量小宠物有关专业知识关心宠物迷(www.cwm50.com)，宠物资讯全集，宠物培训等。
                </p>
                <h2 style={{ color: "black" }}>
                  【沙皮狗选购基础知识】-沙皮养护知识
                </h2>
                <div>
                  <img src={CareDog2} alt="" />
                </div>
                <br />
                <p>
                  沙皮狗又名打架犬。因其皮肤宽松多褶，且毛短而硬，酷沙纸而称沙皮狗,
                </p>
                <p>
                  身高45-60厘米，体重40-54斤表面彷佛模样形状担心，充溢哀怨、凝重的抄皮犬,实在心境无比爽朗、生动、淘气好玩。沙皮犬聪慧机警、英勇善斗、机灵
                  机动、老实可恶，对客人非常顺从忠厚,喜好同儿童顽耍。
                </p>
                <p>[沙皮狗选购要点]：</p>
                <p>
                  应抉择方形头（俗称河马头）、瓦简嘴、贝壳耳、狮子鼻、圆筒身躯，沙皮毛、辣椒尾的沙皮犬。
                </p>
                <p>[沙皮狗忌选]：</p>
                <p>头小、修长，耳穴,眼突,嘴长，尾粗短者 </p>
                <p>[沙皮狗饲养要点]：　</p>
                <p>
                  沙皮狗活泼好动，必要适量活动，加之鼻道较短,激烈运动易缺氧，因而最佳凌晨或薄暮带出户外溜达。皮肤皱精较多，易藏污垢和致使细菌繁殖，故分外应细致一样平常的干净卫生，不然犬易患疥癣和皮肤病。炎天宜每周沐浴两次，秋天每周一次。不宜饲喂过多食品，以避免过肥而影响康健。由于沙发犬属于扁面种类且头部硕大，母犬产仔时难以本身咬断脐带；故临产时常需助产，人为剪断脐带和防备难产引起殒命。别的，沙皮犬因为特别生理的结构，极易患眼睑内翻症及佝偻症，故应在饲养办理中加以注意。文章来源：沙皮犬价格
                  沙皮犬多少钱 沙皮犬图片
                </p>
                <h2 style={{ color: "blue" }}>
                  【藏獒基础知识|藏獒遗传知识详解】-藏獒养护知识
                </h2>
                <br />
                <p>
                  关于藏獒的遗传知识详解有谁知道呢？相信大家对这一块还不是很了解，那么大家就共同学习吧。
                </p>
                <p>
                  公藏獒不同个体间犬的性行为都有很大差异，这些差异表现在公藏獒个体间交配行为的强度、频率、精力、体力以及性兴奋高峰期持续时间长短等方面。公犬性行为表现得变化很大，也很灵活，不同个体的性欲水平高低不同，有的公犬对母犬特别感兴趣，有的则对母犬不感兴趣。如果要提高公犬的性欲水平则可口服或注射雄性激素等外源激素。
                </p>
                <p>一)性抑制</p>
                <p>
                  性抑制是由于内、外因素造成的性反应缺陷。除前几种因素能引起性抑制外，通常多因错误或粗暴的管理手段所致。如交配时的恐惧、痛感、干扰及过分的刺激等，这些因素对于易建立条件反射的藏獒犬来说，影响特别明显。
                </p>
                <p>(二)配种前的性刺激</p>
                <p>
                  在配种前通过感觉的性刺激对配种很有利。配种前公藏獒犬与母藏獒犬的逗玩和几次空爬跨，能激发公藏獒犬的性行为。这种配种前的性准备还有助于提高精液质量和精液量，能引起促间细胞素(ICSH)的分泌，提高血中雄激素的浓度。
                </p>
                <p>(三)疾病与性行为异常</p>
                <p>
                  有的公藏獒犬会发生性行为反常。可能是由于器质性疾病造成公藏獒犬阴茎不能勃起或丧失性欲。或者由于骨骼、肌肉疾病、关节炎以及后躯外伤造成的疼痛所致。公藏獒犬在幼年时缺少与同类的接触，也会影响其交配行为。
                  短短介绍，希望对大家有用。文章来自：藏獒多少钱 藏獒价格
                  藏獒图片
                </p>
                <p>
                  看了《新手养狗基础知识（必备知识）》这篇文章的朋友们，如果对宠物狗的其他相关知识感兴趣的话，宠物迷cwm50.com的小编还为大家准备了专题：
                  <a>新手养狗基础知识</a>
                  ，一起来看看吧！
                </p>
              </div>
            </div>
          </div>
          <ul className={styles.nav}>
            <li>
              <a
                onClick={() => {
                  goTo("toHealth");
                }}
              >
                宠物健康
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  goTo("toCat");
                }}
              >
                猫咪饲养
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  goTo("toDog");
                }}
              >
                爱犬饲养
              </a>
            </li>
          </ul>
        </div>
        <Loginandreg />
        <Footer />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "HowCare");
  return {};
};
export default connect(mapStateToProps)(HowCare);