export interface CourseItem {
  id: string
  title: string
  description: string
  iconSrc: string
  xp: number
  levels: string
  students: number
}

const flag = (code: string) => `https://flagcdn.com/w80/${code}.png`

export const courses: CourseItem[] = [
  {
    id: 'en',
    title: 'Английский',
    description: 'От разговорного сленга до подготовки к IELTS и собеседованиям.',
    iconSrc: flag('gb'),
    xp: 200,
    levels: 'A1 → C1',
    students: 140_000,
  },
  {
    id: 'de',
    title: 'Немецкий',
    description: 'Грамматика без боли: артикли, падежи и деловая переписка.',
    iconSrc: flag('de'),
    xp: 180,
    levels: 'A1 → B2',
    students: 62_000,
  },
  {
    id: 'es',
    title: 'Испанский',
    description: 'Живая речь, путешествия и основа для работы с Латинской Америкой.',
    iconSrc: flag('es'),
    xp: 160,
    levels: 'A1 → B2',
    students: 88_000,
  },
  {
    id: 'fr',
    title: 'Французский',
    description: 'Произношение, быт и подготовка к экзаменам DELF.',
    iconSrc: flag('fr'),
    xp: 170,
    levels: 'A1 → B2',
    students: 47_000,
  },
  {
    id: 'ja',
    title: 'Японский',
    description: 'Хирагана, катакана, базовые кандзи и первые диалоги.',
    iconSrc: flag('jp'),
    xp: 250,
    levels: 'N5 → N3',
    students: 53_000,
  },
  {
    id: 'zh',
    title: 'Китайский',
    description: 'Тоны, иероглифы и разговорный минимум для работы и поездок.',
    iconSrc: flag('cn'),
    xp: 240,
    levels: 'HSK 1 → 4',
    students: 39_000,
  },
  {
    id: 'zh',
    title: 'Китайский',
    description: 'Тоны, иероглифы и разговорный минимум для работы и поездок.',
    iconSrc: flag('cn'),
    xp: 240,
    levels: 'HSK 1 → 4',
    students: 39_000,
  },
]
