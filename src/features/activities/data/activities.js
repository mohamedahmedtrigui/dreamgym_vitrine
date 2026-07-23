import { Dumbbell, Zap, Shield, Music, Star, Heart } from 'lucide-react'

export const activities = [
  {
    id: '01',
    title: 'Musculation',
    description: "Développer la force, l'endurance et la condition physique.",
    icon: Dumbbell,
    span: 'wide',
  },
  {
    id: '02',
    title: 'Fitness',
    description: 'Améliorer la mobilité, le cardio et la forme générale.',
    icon: Zap,
    span: 'tall',
  },
  {
    id: '03',
    title: 'Kung-fu',
    description: 'Discipline, maîtrise, agilité et confiance pour adultes et enfants.',
    icon: Shield,
    span: 'normal',
  },
  {
    id: '04',
    title: 'Aérobic',
    description: "Un espace 100% femmes pour bouger, respirer et s'épanouir avec Coach Hazar.",
    icon: Music,
    span: 'wide',
    featured: true,
    eyebrow: 'La forme au féminin',
    coach: 'Coach Hazar',
    tags: ['100% femmes', 'Énergie & tonus', 'Grâce & féminité'],
    details: [
      'Aérobic pour renforcer le cardio, brûler les calories et retrouver le tonus.',
      'Danse orientale pour travailler la grâce, la féminité et la coordination.',
      "Yoga pour améliorer l'équilibre, la respiration et la sérénité.",
    ],
    schedule: [
      { day: 'Lundi', time: '18.30 à 19.30' },
      { day: 'Mercredi', time: '18.30 à 19.30' },
      { day: 'Vendredi', time: '18.30 à 19.30' },
    ],
  },
  {
    id: '05',
    title: 'Gymnastique',
    description: "Développer la souplesse, l'équilibre et la coordination.",
    icon: Star,
    span: 'tall',
  },
  {
    id: '06',
    title: 'Remise en forme',
    description: 'Reprendre une activité sportive et progresser à son rythme.',
    icon: Heart,
    span: 'wide',
  },
]
