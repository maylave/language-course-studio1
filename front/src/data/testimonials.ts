export interface Testimonial {
  id: string
  rating: number
  badgeText: string
  badgeClasses: string
  text: string
  authorName: string
  authorRole: string
  authorAvatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    rating: 5,
    badgeText: 'Сдал IELTS на 7.5',
    badgeClasses: 'bg-emerald-50 text-emerald-800',
    text: '«Стрик в 120 дней стал моей лучшей привычкой! До SkillQuest бросал английский три раза. ИИ-куратор помог перестать бояться спикинга на экзамене.»',
    authorName: 'Артем Васильев',
    authorRole: 'Frontend Разработчик • Английский',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9Z9msJfvDT7s4ZLgQkk5UCTRq8tFPBVCCi7SPPgJhRa1QJzSvMXjXADVkzHv9mUWijyycuYkadYbHz7HJ9LxvKrxKmOXSVy1P_VejRAmP601P2rAFYKFud2wm7shDf7wAECzAwYE41CtWkqK6WnMPsoDiv4qYk0C7t3guBgrjY57Oqdsj3Mq_E3c2ZPkLAxBD77paKz39NIDM6-d0snbIUQS6t8AyLqITaJFQ4leSWiSoW_vAxINTiQ',
  },
  {
    id: '2',
    rating: 5,
    badgeText: 'Путешествие в Мадрид',
    badgeClasses: 'bg-blue-50 text-blue-800',
    text: '«Учила испанский всего по 10 минут перед сном. В поездке легко заказывала тапас, общалась с консьержами и даже помогла туристу на вокзале!»',
    authorName: 'Елена Романова',
    authorRole: 'Дизайнер интерьеров • Испанский',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmQuEPABVrCJRQrRpzKyH7EjkNgiKGma3pkIx83ukUWJCuD49cAiWAOEvhCVOHU8iO-9wmpDRpz1NpRo-wlVCEhu-bhLTfyBjYnzFhCJmmY-PI-b07I2VXwLUlmsQ2n8F0j_Eo6COofe8h0X1ecchFaKx6MDHUlxM_gjikpqXCYlh8We9nUjfWcGmete9AwPLmHb7R2MLduSBvW0aalUpdBm6kEVZGnIDZYtSRGKS_BQ4LzWmcsISzuA',
  },
  {
    id: '3',
    rating: 5,
    badgeText: 'Оффер в Берлине',
    badgeClasses: 'bg-purple-50 text-purple-800',
    text: '«Немецкая грамматика всегда казалась кошмаром. Но микро-спринты SkillQuest разложили артикли и падежи по полочкам за 3 месяца регулярных игр.»',
    authorName: 'Максим Орлов',
    authorRole: 'Product Manager • Немецкий',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAd0T_jH28OLODtLOuQmZBBIuZvki1a6iWPwUHiE6EXj2LCJKpMpLTl32iyJNj2TAXYCUjTn48fUGozUQRb7eOm3XGEigD8U86VCVwa73saPc1YCtRhLT7OHSlsTos5cwiWS0tSRRAxIYITlm43Mns-zKY2CAIPQxPbR8YAh6ZkNFYQyOn6XWfRD-M5QgQFqOYSGEpNGh2vcUfCPBUyGrTsUra7ubaDBt5-H-l4JejjnRf2ah-yPjRP0w',
  },
]
