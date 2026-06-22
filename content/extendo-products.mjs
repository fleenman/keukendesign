export const extendoProducts = [
  {
    slug: 'balance',
    title: 'Extendo Balance',
    eyebrow: 'Tafels en banken',
    summary: 'Slanke tafels en banken met een grafisch onderstel, geschikt voor een woonkeuken die open en licht moet blijven.',
    image: '/media/extendo/extendo-balance-tafel-marmer.jpg',
    alt: 'Extendo Balance tafel met marmeren blad en houten banken',
    intro: 'Balance combineert een dun tafelblad met een rank, technisch onderstel. De familie past bij woonkeukens waar een grote tafel aanwezig mag zijn zonder zwaar te ogen.',
    gallery: [
      { image: '/media/extendo/extendo-balance-tafel-marmer.jpg', title: 'Balance tafel met marmer' },
      { image: '/media/extendo/extendo-balance-tafel-noten.jpg', title: 'Balance tafel in noten' },
      { image: '/media/extendo/extendo-balance-tafel-wit.jpg', title: 'Balance tafel in wit' },
      { image: '/media/extendo/extendo-stoel-en-tafel-noten-en-marmer.jpg', title: 'Balance tafel met stoel in noten en marmer' }
    ],
    uses: [
      'Een lange eettafel direct naast de keuken',
      'Een lichte tafel-bankcombinatie in een open woonruimte',
      'Keukens waarin marmer, hout of een wit blad moet aansluiten op het keukenmateriaal'
    ],
    details: [
      'De foto’s tonen Balance met marmer, noten en wit als rustige materiaalrichtingen.',
      'Het onderstel blijft visueel open, waardoor een groot blad minder massief voelt.',
      'In de showroom is vooral de combinatie met keukenfronten, vloer en stoelen belangrijk.'
    ]
  },
  {
    slug: 'danske',
    title: 'Extendo Danske',
    eyebrow: 'Tafel en stoelen',
    summary: 'Een eiken tafel- en stoelopstelling met afgeronde hoeken en slanke poten voor een warmere woonkeuken.',
    image: '/media/extendo/extendo-danske-tafel-en-stoelen-eiken-1.jpg',
    alt: 'Extendo Danske tafel en stoelen in eiken',
    intro: 'Danske legt de nadruk op hout, afgeronde vormen en een informele zitplek. De lijn past goed bij keukens waar de eettafel dagelijks wordt gebruikt.',
    gallery: [
      { image: '/media/extendo/extendo-danske-tafel-en-stoelen-eiken-1.jpg', title: 'Danske tafel en stoelen in eiken' },
      { image: '/media/extendo/extendo-danske-tafel-en-stoelen-eiken-2.jpg', title: 'Danske tafel en stoelen' }
    ],
    uses: [
      'Een dagelijkse gezinstafel bij een eiland of wandopstelling',
      'Een houten accent naast rustige bulthaup-fronten',
      'Een compacte eethoek waar stoelen en tafel als set gelezen mogen worden'
    ],
    details: [
      'De overzichtsfoto’s tonen een eiken blad en stoelen met hetzelfde rustige materiaalbeeld.',
      'De afgeronde hoeken maken de tafel zachter in looplijnen rond een eiland.',
      'De slanke poten houden de eethoek luchtig, ook wanneer de tafel dicht bij de keuken staat.'
    ]
  },
  {
    slug: 'st35',
    title: 'Extendo ST35',
    eyebrow: 'Uittrekbare tafel',
    summary: 'Een rustige uittrekbare tafel voor situaties waarin de eethoek flexibel moet blijven.',
    image: '/media/extendo/extendo-st35-tafel-uittrekbaar.jpg',
    alt: 'Extendo ST35 uittrekbare tafel',
    intro: 'ST35 is bedoeld voor keukens en woonruimtes waar de tafel soms compact en soms groter moet zijn. De vorm blijft terughoudend, zodat de functionaliteit niet dominant wordt.',
    gallery: [
      { image: '/media/extendo/extendo-st35-tafel-uittrekbaar.jpg', title: 'ST35 uittrekbare tafel' }
    ],
    uses: [
      'Appartementen of woonkeukens met wisselende bezetting',
      'Een compacte tafel die bij bezoek vergroot moet kunnen worden',
      'Keukens waar flexibiliteit belangrijk is, maar het meubelbeeld rustig moet blijven'
    ],
    details: [
      'De overzichtsfoto toont ST35 als lange tafel met een ingetogen onderstel.',
      'Een uittrekbare tafel vraagt altijd aandacht voor loopruimte, stoelen en positie ten opzichte van het eiland.',
      'Stadshaege beoordeelt de maatvoering samen met het keukenplan, zodat de tafel ook uitgetrokken bruikbaar blijft.'
    ]
  },
  {
    slug: 'atelier',
    title: 'Extendo Atelier',
    eyebrow: 'Meubels en tv-meubels',
    summary: 'Modulaire meubels met open en gesloten vakken die de woonkeuken doortrekken naar de leefruimte.',
    image: '/media/extendo/extendo-atelier-meubel.jpg',
    alt: 'Extendo Atelier meubel met open en gesloten vakken',
    intro: 'Atelier verbindt keuken en interieur. Open vakken, gesloten delen en ranke kaders maken het geschikt voor opbergen, tonen en een rustige overgang naar de woonkamer.',
    gallery: [
      { image: '/media/extendo/extendo-atelier-meubel.jpg', title: 'Atelier meubel' },
      { image: '/media/extendo/extendo-atelier-tv-meubel.jpg', title: 'Atelier tv-meubel' }
    ],
    uses: [
      'Een wandmeubel bij de eethoek of zithoek',
      'Een tv-meubel dat aansluit op de keukenmaterialen',
      'Een combinatie van boeken, objecten en gesloten opbergruimte'
    ],
    details: [
      'De foto’s tonen Atelier als laag tv-meubel en als hoger wandmeubel met open en gesloten delen.',
      'Het meubel kan helpen om de keuken niet als los object, maar als onderdeel van de woonruimte te ontwerpen.',
      'Materiaal, hoogte en vakverdeling worden afgestemd op zichtlijnen vanuit keuken en zithoek.'
    ]
  }
]

export function findExtendoProduct(slug) {
  return extendoProducts.find((product) => product.slug === slug)
}
