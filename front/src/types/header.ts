export interface HeaderLanguage {
  flag: string
  name: string
}

export interface HeaderUser {
  name: string
  level: number
  avatarUrl: string
  online?: boolean
}

export type HeaderStatKey = 'streak' | 'xp' | 'hearts'

export interface HeaderStat {
  key: HeaderStatKey
  icon: string
  iconSize: string
  label: string
  pulse?: boolean
  bgColor: string
  hoverColor: string
  borderColor: string
  shadowColor: string
}
