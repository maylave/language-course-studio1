export interface Course {
  id: string
  title: string
  description: string
  iconEmoji: string
  xp?: number
  badge?: string
  levels: string
  students: number
}

export const courses: Course[] = [
  {
    id: 'en',
    title: 'Английский',
    description: 'От разговорного сленга до подготовки к IELTS и собеседованиям.',
    iconEmoji: '🇬🇧',
    xp: 200,
    levels: 'A1 → C1',
    students: 140000,
  },
  {
    id: 'es',
    title: 'Испанский',
    description: 'Живой испанский язык для путешествий по Испании и Латинской Америке.',
    iconEmoji: '🇪🇸',
    xp: 180,
    levels: 'A1 → B2',
    students: 65000,
  },
  {
    id: 'de',
    title: 'Немецкий',
    description: 'Четкая грамматика без стресса, подготовка к Goethe-Zertifikat.',
    iconEmoji: '🇩🇪',
    xp: 250,
    levels: 'A1 → B2',
    students: 42000,
  },
  {
    id: 'zh',
    title: 'Китайский',
    description: 'Визуальная мнемоника иероглифов, пиньинь и тоновая постановка речи.',
    iconEmoji: '🇨🇳',
    badge: 'ТОП ХИТ',
    levels: 'HSK 1 → 4',
    students: 28000,
  },
  {
    id: 'fr',
    title: 'Французский',
    description: 'Мелодика произношения, связывание звуков и повседневные речевые обороты.',
    iconEmoji: '🇫🇷',
    xp: 190,
    levels: 'A1 → B2',
    students: 38000,
  },
]
