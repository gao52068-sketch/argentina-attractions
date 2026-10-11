// 阿根廷 25 个景点数据（描述为原创中文介绍，图片来自 Wikimedia Commons）
const ATTRACTIONS = [
  {
    name: "布宜诺斯艾利斯",
    en: "Buenos Aires",
    region: "布宜诺斯艾利斯",
    img: "images/01-buenos-aires.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Puerto_Madero%2C_Buenos_Aires_%2840689219792%29_%28cropped%29.jpg",
    desc: "阿根廷首都，南美洲最具欧洲风情的大都市。宽阔的林荫大道、百年咖啡馆与深夜的探戈舞厅交织出独特的城市气质，博卡、圣特尔莫等老城区最值得花上一整天慢慢漫步。"
  },
  {
    name: "伊瓜苏瀑布",
    en: "Iguazú Falls",
    region: "东北部",
    img: "images/02-iguazu.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg",
    desc: "横跨阿根廷与巴西边境的瀑布群，275 道瀑布绵延近 3 公里，水雾轰鸣。其中“魔鬼咽喉”最为壮观，站在观景台上仿佛置身于万马奔腾的水帘之中，被列为世界七大自然奇观之一。"
  },
  {
    name: "瓦尔德斯半岛",
    en: "Península Valdés",
    region: "巴塔哥尼亚及南部",
    img: "images/03-valdes.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Southern_Right_Whale_-_Pen%C3%ADnsula_Vald%C3%A9s.jpg",
    desc: "大西洋岸的野生动物天堂，有“露天动物园”之称。每年南露脊鲸、海狮、象海豹聚集在沿岸水域，麦哲伦企鹅也在岛上筑巢，是观鲸和生态旅行的绝佳之地。"
  },
  {
    name: "五月金字塔",
    en: "Pirámide de Mayo",
    region: "布宜诺斯艾利斯",
    img: "images/04-piramide.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Plaza_de_Mayo_y_Pir%C3%A1mide_de_Mayo.jpg",
    desc: "矗立在五月广场中央的纪念碑，阿根廷第一座爱国纪念碑，建于 1811 年以纪念五月革命一周年。塔顶是头戴弗里几亚帽的自由女神像，是阿根廷民族精神的象征。"
  },
  {
    name: "佩里托莫雷诺冰川",
    en: "Perito Moreno Glacier",
    region: "巴塔哥尼亚及南部",
    img: "images/05-perito-moreno.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Perito_Moreno_Glacier_2023.jpg",
    desc: "巴塔哥尼亚极少数仍在向前推进的冰川之一，高达数十米的蓝色冰墙横亘在阿根廷湖上，时常崩塌坠入湖中、轰隆如雷。栈道系统完善，是全世界最容易亲近的大冰川。"
  },
  {
    name: "手洞",
    en: "Cueva de las Manos",
    region: "巴塔哥尼亚及南部",
    img: "images/06-cueva-manos.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:SantaCruz-CuevaManos-P2210651b.jpg",
    desc: "圣克鲁斯省平图拉斯河谷的岩洞，洞壁上布满约九千年前狩猎者留下的手印图案，红、黑、赭石色层层叠叠，被联合国教科文组织列为世界遗产，是美洲最古老的岩画群之一。"
  },
  {
    name: "科隆剧院",
    en: "Teatro Colón",
    region: "布宜诺斯艾利斯",
    img: "images/07-teatro-colon.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Fachada_del_Teatro_Col%C3%B3n_en_Buenos_Aires%2C_Argentina.jpg",
    desc: "1908 年落成的世界顶级歌剧院之一，以近乎完美的音响效果闻名于世。内部装饰奢华，大厅里陈列着作曲家半身像，即使不看演出，参加导览参观也绝对值得。"
  },
  {
    name: "塔兰帕亚国家公园",
    en: "Talampaya National Park",
    region: "西北部",
    img: "images/08-talampaya.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Talampaya_NP.jpg",
    desc: "拉里奥哈省的红色峡谷公园，亿万年风化塑造出城堡般的岩层与高耸的石柱，岩壁上保留着原住民的岩画。与邻近的月亮谷一同被列入世界遗产名录。"
  },
  {
    name: "月亮谷",
    en: "Ischigualasto",
    region: "西北部",
    img: "images/09-ischigualasto.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:El_Hongo.JPG",
    desc: "伊斯奇瓜拉斯托的荒漠山谷，因灰白色的风化地貌酷似月球表面而得名“月亮谷”。这里出土过大量三叠纪恐龙化石，是古生物学家的宝库，园内还有一座化石博物馆。"
  },
  {
    name: "冰川国家公园",
    en: "Los Glaciares National Park",
    region: "巴塔哥尼亚及南部",
    img: "images/10-los-glaciares.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Los_Glaciares_National_Park_panorama_1.JPG",
    desc: "圣克鲁斯省的广袤冰原保护区，近三分之一面积被冰雪覆盖，拥有 47 条冰川。除了佩里托莫雷诺，这里还是徒步与冰川健行的圣地，湖光山色壮美至极。"
  },
  {
    name: "纳韦尔瓦皮国家公园",
    en: "Nahuel Huapi National Park",
    region: "巴塔哥尼亚及南部",
    img: "images/11-nahuel-huapi.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Llao_Llao_Peninsula.jpg",
    desc: "阿根廷最早建立的国家公园，环绕着同名的纳韦尔瓦皮湖。雪山、原始森林与碧蓝湖水相映成趣，有“阿根廷的瑞士”之称，传说湖中还住着水怪“纳韦利托”。"
  },
  {
    name: "巴塔哥尼亚",
    en: "Patagonia",
    region: "巴塔哥尼亚及南部",
    img: "images/12-patagonia.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Los_Glaciares_National_Park_%2816730720521%29.jpg",
    desc: "横跨阿根廷南部的辽阔荒原，冰川、峡湾、草原与安第斯雪峰交错，苍凉而壮美。这里地广人稀、风大天高，是无数旅行者心中的终极远方。"
  },
  {
    name: "拉博卡",
    en: "La Boca",
    region: "布宜诺斯艾利斯",
    img: "images/13-la-boca.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Caminito_in_2026.jpg",
    desc: "布宜诺斯艾利斯的老港区，以“卡米尼托”小巷两旁的彩色铁皮屋闻名。街头艺人、探戈舞者云集，博卡青年队的主场糖果盒球场也在这里，足球氛围极其浓烈。"
  },
  {
    name: "安第斯山脉",
    en: "The Andes",
    region: "安第斯山区",
    img: "images/14-andes.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Aconcagua_Provincial_Park_06.jpg",
    desc: "世界最长的山系，纵贯阿根廷西部边境。海拔 6961 米的阿空加瓜峰是西半球最高峰，群山横跨多个气候带，登山、滑雪与徒步爱好者的天堂。"
  },
  {
    name: "印加桥",
    en: "Puente del Inca",
    region: "安第斯山区",
    img: "images/15-puente-del-inca.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Puente_del_Inca_and_spa.jpg",
    desc: "门多萨省的天然石桥，横跨门多萨河之上。温泉矿物质常年沉积，让桥体呈现出金黄与赭红的奇异色彩，相传印加帝国时期这里就是重要的通道。"
  },
  {
    name: "玫瑰宫",
    en: "Casa Rosada",
    region: "布宜诺斯艾利斯",
    img: "images/16-casa-rosada.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Casa_Rosada_exterior_from_Plaza_de_Mayo.JPG",
    desc: "五月广场东侧的总统府，因标志性的粉红色外墙得名。总统在此办公，著名的阳台曾见证无数历史性演讲，内部设有博物馆可预约参观。"
  },
  {
    name: "巴里洛切",
    en: "San Carlos de Bariloche",
    region: "巴塔哥尼亚及南部",
    img: "images/17-bariloche.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:San_Carlos_de_Bariloche_%2832923978031%29.jpg",
    desc: "安第斯山脚的湖畔小城，被湖泊与雪山环抱。巧克力、滑雪与徒步是这里的关键词，有“南美小瑞士”之称，冬季滑雪、夏季骑行徒步各有风情。"
  },
  {
    name: "雷科莱塔公墓",
    en: "La Recoleta Cemetery",
    region: "布宜诺斯艾利斯",
    img: "images/18-recoleta.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:La_Recoleta_Cemetery_-_Buenos_Aires_Argentina_%285269260345%29.jpg",
    desc: "布宜诺斯艾利斯的高级公墓，庇隆夫人（贝隆夫人）长眠于此。精美的陵墓与雕塑鳞次栉比，宛如一座露天建筑博物馆，免费开放参观。"
  },
  {
    name: "大盐滩",
    en: "Salinas Grandes",
    region: "西北部",
    img: "images/19-salinas-grandes.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Salinas_Grandes_%28Jujuy_and_Salta%29_06.jpg",
    desc: "阿根廷西北部的巨大盐原，洁白无垠、一望无际。这里出产食盐，也是重要的锂矿产地，雨后偶尔形成如镜面般的倒影，是摄影爱好者的秘境。"
  },
  {
    name: "火地岛国家公园",
    en: "Tierra del Fuego National Park",
    region: "巴塔哥尼亚及南部",
    img: "images/20-tierra-del-fuego.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Tierra_del_Fuego_National_Park_%285536006253%29.jpg",
    desc: "世界最南端的国家公园之一，位于“世界尽头”乌斯怀亚附近。冰川湖、亚南极森林与海岸风光独特，泛美公路的终点就在这里。"
  },
  {
    name: "方尖碑",
    en: "Obelisco",
    region: "布宜诺斯艾利斯",
    img: "images/21-obelisco.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Obelisk_of_Buenos_Aires_%28Obelisco_de_Buenos_Aires_-_Buenos_Aires_Argentina_%285269210103%29.jpg",
    desc: "布宜诺斯艾利斯市中心的标志性纪念碑，高 67 米，建于 1936 年，仅用四周便完工。每逢国家队夺冠或重大庆典，这里就是全城狂欢的中心。"
  },
  {
    name: "菲茨罗伊峰",
    en: "Mount Fitz Roy",
    region: "巴塔哥尼亚及南部",
    img: "images/22-fitz-roy.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Fitz_Roy_and_frozen_Lago_de_los_Tres.jpg",
    desc: "巴塔哥尼亚查尔滕附近的花岗岩巨峰，海拔 3375 米，常年云雾缭绕。岩壁近乎垂直、攀登难度极高，是登山者心中的圣山，也是无数明信片上的经典画面。"
  },
  {
    name: "女人桥",
    en: "Puente de la Mujer",
    region: "布宜诺斯艾利斯",
    img: "images/23-puente-mujer.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Puente_de_la_Mujer%2C_Puerto_Madero%2C_Buenos_Aires%2C_Argentina%2C_29th._Dec._2010_-_Flickr_-_PhillipC_%281%29.jpg",
    desc: "布宜诺斯艾利斯港区的人行桥，由建筑师卡拉特拉瓦设计。白色桥身造型如同一对跳探戈的情侣，夜晚灯光亮起时格外迷人，桥名源于附近以女性命名的街道群。"
  },
  {
    name: "门多萨",
    en: "Mendoza",
    region: "安第斯山区",
    img: "images/24-mendoza.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Bodega_Dante_Robino%2C_Mendoza.jpg",
    desc: "安第斯山脚的葡萄酒之都，阿根廷马尔贝克红酒的核心产区。阳光充沛、气候干燥，葡萄园一望无际，每年三月还会举办盛大的葡萄丰收节。"
  },
  {
    name: "阿根廷探戈",
    en: "Argentine Tango",
    region: "布宜诺斯艾利斯",
    img: "images/25-tango.jpg",
    credit: "https://commons.wikimedia.org/wiki/File:Tango_dancers_in_Buenos_Aires%2C_Argentina._%2833570798082%29.jpg",
    desc: "诞生于布宜诺斯艾利斯码头区的双人舞，激情而克制，讲究舞伴之间的默契“交流”。已被列入联合国教科文组织非物质文化遗产，来阿根廷一定要看一场现场探戈秀。"
  }
];

const REGIONS = ["全部", "布宜诺斯艾利斯", "巴塔哥尼亚及南部", "安第斯山区", "西北部", "东北部"];
