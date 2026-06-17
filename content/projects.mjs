const media = (name) => `/media/projecten/${name}`

const createProject = ({
  title,
  slug,
  system = 'b3',
  layout,
  materials,
  appliances = [],
  region = 'Amersfoort en omgeving',
  images,
  summary,
  question,
  challenge,
  solution
}) => ({
  title,
  slug,
  system,
  layout,
  materials,
  appliances,
  region,
  cover: media(images[0]),
  gallery: images.map(media),
  summary,
  question: question || 'Hoe wordt deze keukenopstelling rustig, bruikbaar en passend bij de woning?',
  challenge: challenge || 'De opstelling moest materiaal, bergruimte, looplijnen en dagelijks gebruik in balans brengen.',
  solution: solution || 'De bulthaup-systeemopbouw houdt de lijnen rustig en laat materiaal, werkblad en opstelling de ruimte bepalen.'
})

export const projects = [
  createProject({
    title: 'Bulthaup b3 met noten kasten, kiezel en tv-meubel',
    slug: 'bulthaup-b3-noten-kiezel-tv-meubel',
    layout: 'kastenwand',
    materials: ['noten', 'kiezel'],
    images: [
      'MG__1374-HDR-scaled.jpg',
      'MG__1312-scaled.jpg',
      'BRS7773.jpg',
      'BRS7779.jpg',
      'MG__1047-HDR-scaled.jpg',
      'MG__1030-scaled.jpg'
    ],
    summary: 'Een b3-project waarin notenhout, kiezelkleurige elementen en maatwerk rond de leefruimte samenkomen.',
    question: 'Hoe krijgt een functionele kastenwand voldoende warmte en karakter?',
    solution: 'Noten en kiezel zorgen voor tactiliteit, terwijl de b3-indeling de wand rustig houdt.'
  }),
  createProject({
    title: 'Bulthaup b3 met kaolin, flint en doorlopend blad',
    slug: 'bulthaup-b3-kaolin-flint',
    layout: 'wand en eiland',
    materials: ['kaolin', 'flint'],
    region: 'Midden-Nederland',
    images: [
      'bulthaup-b3-kaolin-flint-blad-1-1616x1077.jpg',
      'bulthaup-b3-kaolin-flint-blad-3-1616x1077.jpg',
      'bulthaup-b3-kaolin-flint-blad-4-1616x1077.jpg',
      'b3-kaolin-met-flint-1-1616x1077.jpg',
      'b3-kaolin-met-flint-2-1616x1077.jpg',
      'b3-kaolin-met-flint-3-1616x1077.jpg',
      'b3-kaolin-met-flint-4-1616x1077.jpg',
      'b3-kaolin-met-flint-5-1616x1077.jpg'
    ],
    summary: 'Een b3-keuken waarin zachte kleurtonen en een rustig werkblad de basis vormen.',
    question: 'Hoe voeg je nuance toe zonder het minimalistische karakter te verliezen?',
    challenge: 'Materiaal- en kleurkeuzes moesten zichtbaar zijn zonder druk te worden.',
    solution: 'Kaolin en flint zorgen voor contrast op detailniveau, terwijl de totaalindruk rustig blijft.'
  }),
  createProject({
    title: 'Bulthaup b3 wit met noten en Dekton blad',
    slug: 'bulthaup-b3-wit-noten-dekton',
    layout: 'eiland en wand',
    materials: ['wit', 'noten', 'Dekton'],
    images: ['MG_9941-HDR.jpg', 'MG_9866-HDR.jpg', 'MG_9882.jpg'],
    summary: 'Een b3-keuken waarin lichte fronten, noten accenten en een sterk werkblad samenkomen.',
    question: 'Hoe combineer je warme accenten met een strak en duurzaam werkvlak?',
    solution: 'Noten accenten en een Dekton blad geven de keuken tactiliteit en gebruikswaarde binnen een rustige systeemopbouw.'
  }),
  createProject({
    title: 'Bulthaup b1 eiland met eiken natuur in Amersfoort',
    slug: 'bulthaup-b1-eiken-natuur-amersfoort',
    system: 'b1',
    layout: 'eiland',
    materials: ['eiken natuur'],
    region: 'Amersfoort',
    images: [
      'bulthaup-b1-eiland-met-eiken-natuur-Amersfoort-3-1616x1077.jpg',
      'bulthaup-b1-eiland-met-eiken-natuur-Amersfoort-2-1616x1077.jpg',
      'bulthaup-b1-eiland-met-eiken-natuur-Amersfoort-5-1616x1077.jpg',
      'bulthaup-b1-eiland-met-eiken-natuur-Amersfoort-6-1616x1077.jpg'
    ],
    summary: 'Een b1-keuken met natuurlijke houttoon en een open eilandopstelling.',
    question: 'Hoe combineer je eenvoud, hout en een praktische leefkeuken?',
    solution: 'De b1-basis houdt de compositie eenvoudig; eiken natuur voegt een vriendelijke materiaaltoon toe.'
  }),
  createProject({
    title: 'Bulthaup b3 wit met marmer',
    slug: 'bulthaup-b3-wit-marmer',
    layout: 'wand en eiland',
    materials: ['wit', 'marmer'],
    images: [
      'bulthaup-b3-wit-met-marmer-2-1616x1077.jpg',
      'bulthaup-b3-wit-met-marmer-3-1616x1077.jpg',
      'bulthaup-b3-wit-met-marmer-1616x1077.jpg'
    ],
    summary: 'Een lichte b3-keuken waarin witte fronten en marmerbeeld een rustige luxe uitstraling geven.'
  }),
  createProject({
    title: 'Bulthaup b3 met kaolin en aluminium schiereiland',
    slug: 'bulthaup-b3-kaolin-aluminium-schiereiland',
    layout: 'schiereiland',
    materials: ['kaolin', 'aluminium grijs'],
    appliances: ['Miele'],
    images: [
      'b3-eiland-kaolin-blad-1616x1077.jpg',
      'b3-aluminium-met-kaolin-schiereiland-1616x1077.jpg',
      'bulthaup-b3-alulinium-grijs-met-miele-1616x1077.jpg'
    ],
    summary: 'Een b3-opstelling met kaolin, aluminiumgrijs en een schiereiland als werkzone.'
  }),
  createProject({
    title: 'Bulthaup b3 in eiken natuur',
    slug: 'bulthaup-b3-eiken-natuur',
    layout: 'wand en eiland',
    materials: ['eiken natuur'],
    images: [
      'b3-bulthaup-eiken-natuur-1616x1077.jpg',
      'b3-bulthaup-eiken-natuur-4-1616x1077.jpg',
      'b3-bulthaup-eiken-natuur-2-1616x1077.jpg'
    ],
    summary: 'Een b3-keuken waarin eiken natuur de strakke systeemopbouw warmer maakt.'
  }),
  createProject({
    title: 'Bulthaup b3 met Dekton blad en ahorn kast',
    slug: 'bulthaup-b3-dekton-ahorn',
    layout: 'kastenwand en werkblad',
    materials: ['Dekton', 'ahorn'],
    images: [
      'bulthaup-b3-dekton-blad-ahorn-kast-2-1616x1077.jpg',
      'bulthaup-b3-dekton-blad-ahorn-kast-3-1616x1077.jpg',
      'bulthaup-b3-dekton-blad-ahorn-kast-4-1616x1077.jpg',
      'bulthaup-b3-dekton-blad-ahorn-kast-1-1616x1077.jpg'
    ],
    summary: 'Een b3-project waarin een Dekton werkblad en ahorn kastelementen samen een heldere materiaalbasis vormen.'
  }),
  createProject({
    title: 'Bulthaup b3 eiken natuur met antraciet',
    slug: 'bulthaup-b3-eiken-natuur-antraciet',
    layout: 'wand en eiland',
    materials: ['eiken natuur', 'antraciet'],
    images: [
      'bulthaup-b3-eiken-natuur-antraciet-4-1616x1077.jpg',
      'bulthaup-b3-eiken-natuur-antraciet-1-1616x1077.jpg',
      'bulthaup-b3-eiken-natuur-antraciet-2-1616x1077.jpg',
      'bulthaup-b3-eiken-natuur-antraciet-3-1616x1077.jpg'
    ],
    summary: 'Een b3-keuken waarin eiken natuur en antraciet voor een rustig maar krachtig contrast zorgen.'
  }),
  createProject({
    title: 'Bulthaup b3 wit eiken keuken',
    slug: 'bulthaup-b3-wit-eiken',
    layout: 'wand en eiland',
    materials: ['wit', 'eiken'],
    images: [
      'bulthaup-b3-wit-eiken-1-1616x1077.jpg',
      'bulthaup-b3-wit-eiken-3-1616x1077.jpg',
      'bulthaup-b3-wit-eiken-4-1616x1077.jpg',
      'bulthaup-b3-wit-eiken-5-1616x1077.jpg',
      'bulthaup-b3-wit-eiken-2-1616x1077.jpg'
    ],
    summary: 'Een b3-keuken waarin wit en eiken samen een lichte, tijdloze basis vormen.',
    question: 'Hoe blijft een witte keuken warm genoeg voor een leefruimte?',
    solution: 'Eiken brengt warmte en tactiliteit in de b3-structuur zonder de ruimtelijkheid te breken.'
  }),
  createProject({
    title: 'Bulthaup b3 eiland met zitbar, Bora en wijnkast',
    slug: 'bulthaup-b3-eiland-zitbar-bora-wijnkast',
    layout: 'eiland met zitbar',
    materials: ['wit', 'donkere accenten'],
    appliances: ['Bora', 'wijnkast'],
    images: [
      'DSC5310-1-1616x1079.jpg',
      'DSC5323-1-1616x1079.jpg',
      'DSC5340-1-1616x1079.jpg',
      'DSC5313-1-1616x1079.jpg'
    ],
    summary: 'Een b3-eilandkeuken met zitbar, Bora-oplossing en wijnkast als onderdeel van de leefruimte.'
  }),
  createProject({
    title: 'Bulthaup b3 hoge kast met nis en Bora Professional',
    slug: 'bulthaup-b3-hogekast-nis-bora-professional',
    layout: 'hoge kasten met nis',
    materials: ['donkere fronten'],
    appliances: ['Bora Professional'],
    images: ['DSC4362-1616x1079.jpg', 'DSC4356-1616x1079.jpg'],
    summary: 'Een b3-opstelling waarin hoge kasten, een nis en Bora Professional compact worden gecombineerd.'
  }),
  createProject({
    title: 'Bulthaup b3 aluminium donker met noten bar',
    slug: 'bulthaup-b3-aluminium-donker-noten-bar',
    layout: 'bar',
    materials: ['donker aluminium', 'noten'],
    images: ['bulthaup-b3-alu-donker-noten-bar-1.jpg', 'bulthaup-b3-alu-donker-noten-bar-5.jpg'],
    summary: 'Een donkere b3-keuken waarin aluminium en noten een ingetogen baropstelling vormen.'
  }),
  createProject({
    title: 'Bulthaup b3 donker aluminium kookeiland met Bora',
    slug: 'bulthaup-b3-donker-aluminium-kookeiland',
    layout: 'kookeiland',
    materials: ['donker aluminium', 'kiezel'],
    appliances: ['Bora'],
    region: 'Amersfoort',
    images: [
      'Amersfoort-2015-ref02-_ROB7414.png',
      'Amersfoort-2015-ref02-_ROB7421.png',
      'Amersfoort-2015-ref02-_ROB7429.png',
      'Amersfoort-2015-ref02-_ROB7431.png',
      'Amersfoort-2015-ref01-7391-1616x1077.jpg'
    ],
    summary: 'Een donkere b3-keuken met kookeiland, aluminiumtint en Bora-oplossing.',
    question: 'Hoe blijft een donkere keuken ruimtelijk en functioneel bij een centraal kookeiland?',
    solution: 'De b3-opstelling gebruikt de donkere aluminiumtint als rustige basis en houdt het kookeiland overzichtelijk in de open ruimte.'
  }),
  createProject({
    title: 'Bulthaup b3 in Huizen',
    slug: 'bulthaup-b3-huizen',
    layout: 'wandopstelling',
    materials: ['bulthaup b3'],
    region: 'Huizen',
    images: ['bulthaup-b3-huizen-1616x1077.jpg'],
    summary: 'Een gerealiseerde bulthaup b3-keuken in Huizen.'
  }),
  createProject({
    title: 'Bulthaup b3 met wit eiland en zwart eiken bar',
    slug: 'bulthaup-b3-zwart-eiken-bar',
    layout: 'eiland met bar',
    materials: ['wit', 'zwart eiken'],
    images: [
      'b3-eiland-wit-hoekbar-zwart-eiken-1-LR-1616x1077.jpg',
      'b3-eiland-wit-hoekbar-zwart-eiken-3-LR-1616x1077.jpg',
      'b3-eiland-wit-hoekbar-zwart-eiken-5-LR-1616x1077.jpg',
      'b3-eiland-wit-hoekbar-zwart-eiken-6-LR-1616x1077.jpg',
      'b3-eiland-hogekast-zwart-eiken-2-LR-1616x1077.jpg',
      'b3-eiland-hogekast-zwart-eiken-3-LR-1616x1077.jpg',
      'bulthaup-b3-zwart-eiken-kast-bar-1616x1077.jpg'
    ],
    summary: 'Een b3-eilandkeuken waarin witte fronten, zwart eiken en een hoekbar een sociale leefkeuken vormen.',
    question: 'Hoe krijgt een open keuken een rustige, sociale plek zonder dat de opstelling druk wordt?',
    challenge: 'De keuken moest de leefruimte verbinden met een barfunctie, terwijl de hoge kasten en het eiland visueel rustig blijven.',
    solution: 'Witte vlakken en zwart eiken accenten maken de bar duidelijk aanwezig zonder de ruimte te verzwaren.'
  }),
  createProject({
    title: 'Bulthaup b3 eilandkeuken in wit',
    slug: 'bulthaup-b3-eiland-wit',
    layout: 'eiland',
    materials: ['wit', 'licht werkblad'],
    images: ['bulthaup-b3-eiland-wit-1616x1077.jpg', 'bulthaup-b3-eiland-wit-4-1616x1077.jpg'],
    summary: 'Een lichte b3 eilandkeuken met een heldere, rustige uitstraling.',
    question: 'Hoe blijft een ruim kookeiland licht en overzichtelijk in dagelijks gebruik?',
    solution: 'De b3-indeling houdt de lijnen strak en geeft het eiland een centrale maar ingetogen rol.'
  }),
  createProject({
    title: 'Bulthaup b3 grafiet met Bora Classic',
    slug: 'bulthaup-b3-grafiet-bora-classic',
    layout: 'eiland',
    materials: ['grafiet'],
    appliances: ['Bora Classic'],
    images: [
      'Keukendesign_bulthaup-b3-grafiet-5-1616x1077.jpg',
      'bulthaup-b3-eiland-bora-classic-4-1616x1077.jpg',
      'bulthaup-b3-eiland-bora-classic-3-1616x1077.jpg'
    ],
    summary: 'Een b3-keuken met grafiettint en Bora Classic als geïntegreerde kookoplossing.'
  }),
  createProject({
    title: 'Bulthaup b3 in Baarn',
    slug: 'bulthaup-b3-baarn',
    layout: 'wand en eiland',
    materials: ['bulthaup b3'],
    region: 'Baarn',
    images: ['KeukenDesign_Baarn_MG_0886-1616x1077.jpg', 'KeukenDesign_Baarn_MG_0855-1616x1077.jpg'],
    summary: 'Een gerealiseerde bulthaup b3-keuken in Baarn.'
  }),
  createProject({
    title: 'Bulthaup b3 aluminium kaolin met noten bar',
    slug: 'bulthaup-b3-aluminium-kaolin-noten-bar',
    layout: 'bar',
    materials: ['aluminium', 'kaolin', 'noten'],
    images: [
      'bulthaup-b3-aluminium-kaolin-noten-bar-3-1616x1077.jpg',
      'bulthaup-b3-aluminium-kaolin-noten-bar-2-1616x1077.jpg',
      'bulthaup-b3-aluminium-kaolin-noten-bar-4-1616x1077.jpg'
    ],
    summary: 'Een b3-opstelling met aluminium, kaolin en noten als warme baraccenten.'
  }),
  createProject({
    title: 'Bulthaup b3 kiezel met grijs blad',
    slug: 'bulthaup-b3-kiezel-grijs-blad',
    layout: 'wand en blad',
    materials: ['kiezel', 'grijs werkblad'],
    images: [
      'kiezel-met-grijs-blad-1-scaled.jpg',
      'kiezel-met-grijs-blad-4-scaled.jpg',
      'kiezel-met-grijs-blad-3-scaled.jpg',
      'kiezel-met-grijs-blad-2-scaled.jpg'
    ],
    summary: 'Een b3-keuken met kiezelkleurige fronten en een ingetogen grijs werkblad.'
  }),
  createProject({
    title: 'Bulthaup b3 met noten en kaolin',
    slug: 'bulthaup-b3-noten-kaolin',
    layout: 'wand en eiland',
    materials: ['noten', 'kaolin'],
    images: [
      'b3-met-noten-en-kaolin-1-1616x1077.jpg',
      'b3-met-noten-en-kaolin-4-1616x1077.jpg',
      'b3-met-noten-en-kaolin-3-1616x1077.jpg'
    ],
    summary: 'Een b3-keuken waarin noten en kaolin voor een warme, zachte materiaalbalans zorgen.'
  }),
  createProject({
    title: 'Bulthaup b3 flint met kiezel',
    slug: 'bulthaup-b3-flint-kiezel',
    layout: 'wand en werkblad',
    materials: ['flint', 'kiezel'],
    region: 'Midden-Nederland',
    images: [
      'bulthaup-flint-met-kiezel-3.jpg',
      'bulthaup-flint-met-kiezel-1.jpg',
      'bulthaup-flint-met-kiezel-1-2.jpg',
      'bulthaup-flint-met-kiezel-4.jpg'
    ],
    summary: 'Een rustige bulthaup-combinatie waarin flint en kiezel subtiel contrast geven.'
  }),
  createProject({
    title: 'Bulthaup b3 kiezel met graniet blad en noten',
    slug: 'bulthaup-b3-kiezel-graniet-noten',
    layout: 'wand en werkblad',
    materials: ['kiezel', 'graniet', 'noten'],
    images: [
      'bulthaup-b3-kiezel-met-graniet-blad-en-noten-4-1616x1077.jpg',
      'bulthaup-b3-kiezel-met-graniet-blad-en-noten-2-1616x1077.jpg'
    ],
    summary: 'Een b3-keuken waarin kiezel, graniet en noten een rustig en tactiel geheel vormen.'
  }),
  createProject({
    title: 'Bulthaup b3 zwart eiken met kaolin en rvs blad',
    slug: 'bulthaup-b3-zwart-eiken-kaolin-rvs',
    layout: 'wand en werkblad',
    materials: ['zwart eiken', 'kaolin', 'rvs'],
    images: [
      'bulthaup-b3-zwart-eiken-met-kaolin-en-rvs-blad-1-1616x1077.jpg',
      'bulthaup-b3-zwart-eiken-met-kaolin-en-rvs-blad-3-1616x1077.jpg',
      'bulthaup-b3-zwart-eiken-met-kaolin-en-rvs-blad-2-1616x1077.jpg'
    ],
    summary: 'Een b3-keuken waarin zwart eiken, kaolin en rvs samen een krachtig maar rustig materiaalbeeld vormen.'
  }),
  createProject({
    title: 'Bulthaup b3 met kiezel, flint en rvs blad',
    slug: 'bulthaup-kiezel-flint-rvs',
    layout: 'wand en werkblad',
    materials: ['kiezel', 'flint', 'rvs'],
    region: 'Midden-Nederland',
    images: [
      'Kiezel-en-Flint-bulthaup-met-rvs-blad-1-1616x1077.jpg',
      'Kiezel-en-Flint-bulthaup-met-rvs-blad-4-1616x1077.jpg',
      'Kiezel-en-Flint-bulthaup-met-rvs-blad-2-1616x1077.jpg'
    ],
    summary: 'Een rustige bulthaup-combinatie met genuanceerde frontkleuren en een rvs werkblad.',
    question: 'Hoe maak je een keuken professioneel en huiselijk tegelijk?',
    solution: 'Kiezel en flint geven de rvs-zone context en maken de keuken zorgvuldig in plaats van klinisch.'
  }),
  createProject({
    title: 'Bulthaup b2 met Dekton blad en grijs essen',
    slug: 'bulthaup-b2-dekton-grijs-essen',
    system: 'b2',
    layout: 'werkbank en kast',
    materials: ['Dekton', 'grijs essen'],
    images: ['b2-dekton-blad-grijs-essen-1-1616x1077.jpg', 'b2-dekton-blad-grijs-essen-4-1616x1077.jpg'],
    summary: 'Een b2-opstelling met een Dekton blad en grijs essen als functionele keukenwerkplaats.'
  }),
  createProject({
    title: 'Bulthaup b3 alpine wit op houten visgraatvloer',
    slug: 'bulthaup-b3-alpine-wit-visgraatvloer',
    layout: 'wand en eiland',
    materials: ['alpine wit', 'hout'],
    images: [
      '3-alpine-wit-op-houten-visgraat-vloer-4-1616x1077.jpg',
      '3-alpine-wit-op-houten-visgraat-vloer-3-1616x1077.jpg',
      '3-alpine-wit-op-houten-visgraat-vloer-2-1616x1077.jpg',
      '3-alpine-wit-op-houten-visgraat-vloer-1-1616x1077.jpg'
    ],
    summary: 'Een alpine witte b3-keuken waarbij de houten visgraatvloer warmte aan de ruimte geeft.'
  }),
  createProject({
    title: 'Bulthaup b3 kiezel met wandkasten en kookeiland',
    slug: 'bulthaup-b3-kiezel-wandkasten-kookeiland',
    layout: 'wandkasten en kookeiland',
    materials: ['kiezel'],
    images: ['DSC_8369-1616x1075.jpg', 'DSC_8362-1616x1075.jpg'],
    summary: 'Een b3-keuken met kiezelkleurige wandkasten en een kookeiland als centrale werkplek.'
  }),
  createProject({
    title: 'Bulthaup zwart eiken met marmer composiet blad',
    slug: 'bulthaup-zwart-eiken-marmer-composiet',
    layout: 'wand en werkblad',
    materials: ['zwart eiken', 'marmer composiet'],
    images: ['BRS7817.jpg', 'BRS7816.jpg'],
    summary: 'Een keuken waarin zwart eiken en een marmer composiet blad een sterk materiaalcontrast vormen.'
  })
]
