export const siteConfig = {
  name: 'Dream Gym',
  shortName: 'DG',
  slogan: 'No Pain. No Gain. Just Results.',
  sloganFr: 'Transforme ta discipline en résultats.',
  description:
    'Salle de sport et de remise en forme pour femmes, hommes et enfants. Musculation, fitness, kung-fu, aérobic, gymnastique et remise en forme.',

  /**
   * Format: '+216 74 893 589' (à compléter avec l'indicatif international confirmé)
   * phoneHref: laisser vide tant que le format international n'est pas confirmé.
   */
  phoneDisplay: '97 677 309',
  phoneHref: '',

  facebookUrl: 'https://www.facebook.com/dream.gym.sport/?locale=fr_FR',

  /**
   * À compléter lorsque l'adresse exacte sera disponible.
   */
  address: '',

  /**
   * À compléter lorsque les horaires officiels seront disponibles.
   */
  openingHours: '',

  assets: {
    logo: 'images/logo.png',
    hero: 'images/dg.jpg',
  },

  nav: [
    { label: 'Accueil', href: '#accueil' },
    { label: 'La salle', href: '#la-salle' },
    { label: 'Activités', href: '#activites' },
    { label: 'Pourquoi nous', href: '#experience' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'Coach', href: '#coach' },
    { label: 'Contact', href: '#contact' },
  ],
}
