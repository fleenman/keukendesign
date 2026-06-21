export const extendoProducts = [
  {
    slug: 'libell',
    title: 'Extendo Libell',
    eyebrow: 'Uitschuifplateau',
    summary: 'Een volledig uitschuifbaar stalen plateau voor hoge kasten, voorraadkasten en diepe onderkasten.',
    image: '/media/projecten/bulthaup-b3-en-b2-kast-noten-1616x1077.jpg',
    alt: 'Open kast en keukenopstelling als voorbeeld van toegankelijke opbergruimte',
    intro: 'Extendo Libell maakt diepe kastruimte direct toegankelijk. Het plateau schuift naar voren, waardoor servies, pannen of voorraad niet achter in de kast verdwijnen.',
    uses: [
      'Hoge voorraadkasten met een draaideur',
      'Servieskasten waar overzicht belangrijk is',
      'Onderkasten waar traditionele legplanken onpraktisch worden'
    ],
    details: [
      'De bronnen beschrijven Extendo als een dun maar stabiel stalen plateau dat weinig kastruimte inneemt.',
      'De open voorzijde geeft direct zicht op de inhoud, terwijl de verhoogde randen helpen om spullen op hun plek te houden.',
      'Libell wordt in productoverzichten genoemd als pull-out shelf binnen de Extendo-familie.'
    ]
  },
  {
    slug: 'fioro',
    title: 'Extendo Fioro',
    eyebrow: 'Plateau met houtaccent',
    summary: 'Een uitschuifplateau met eiken frontlijst voor keukens waar techniek en materiaalbeeld samen moeten vallen.',
    image: '/media/projecten/bulthaup-b3-dekton-blad-ahorn-kast-2-1616x1077.jpg',
    alt: 'Lichte keuken met houtaccenten en geïntegreerde kastruimte',
    intro: 'Extendo Fioro combineert de praktische werking van een uitschuifplateau met een warmer detailbeeld. De eiken lijst sluit aan bij keukens waarin hout zichtbaar onderdeel is van het ontwerp.',
    uses: [
      'Koffie- of ontbijtstations achter een deur',
      'Voorraad- en servieskasten met zichtbaar houtdetail',
      'Keukens waarin interieuraccessoires rustig in het kastbeeld moeten passen'
    ],
    details: [
      'Online productvermeldingen noemen Fioro als Extendo-uitvoering met een eiken lijst en lage plateauhoogte.',
      'Het plateau blijft bedoeld als functionele kastinrichting: zichtbaar, uitschuifbaar en eenvoudig schoon te houden.',
      'De materiaaltoon maakt Fioro vooral interessant wanneer het interieur niet volledig technisch of antraciet mag ogen.'
    ]
  },
  {
    slug: 'click-stop',
    title: 'Extendo Click Stop',
    eyebrow: 'Vergrendeling',
    summary: 'Een vergrendelmechanisme waarmee een uitschuifplateau tijdelijk als vaste werkplek kan functioneren.',
    image: '/media/projecten/bulthaup-b3-eiland-kiezel-kast-donker-aluminium-1616x909.jpg',
    alt: 'Keukenopstelling met hoge kasten en werkruimte als context voor een uitschuifbaar plateau',
    intro: 'Click Stop is bedoeld voor situaties waarin een uitschuifplateau niet alleen bereikbaar moet zijn, maar tijdelijk stabiel moet blijven staan.',
    uses: [
      'Een koffiemachine op een uitschuifbaar plateau',
      'Een extra werkvlak voor voorbereiding of serveren',
      'Een kastoplossing waarbij apparatuur alleen tijdens gebruik naar voren komt'
    ],
    details: [
      'Daro beschrijft Click Stop als mechanisme dat een beweegbaar uitschuifplateau tijdelijk verandert in een vaste werkoppervlakte.',
      'De vergrendeling is vooral logisch bij apparaten of werkzaamheden waarbij het plateau niet vanzelf terug mag schuiven.',
      'In een keukenontwerp wordt dit altijd afgestemd op kastmaat, belasting, apparaatdiepte en gebruiksritme.'
    ]
  }
]

export function findExtendoProduct(slug) {
  return extendoProducts.find((product) => product.slug === slug)
}
