export type CategoryTitleProps = {
  link: string
  children: string
  currentPage: string
}

export type LayoutProps = {
  children?: any
  pageTitle: string
  pageDes?: string
}

export type PostProps = {
  slug: string
  title: string
  description: string
  date: string
  link: string
}

export type PostListProps = {
  postData: any
  link: string
  isOpen?: boolean
}

export type SeoProps = {
  description: string
  lang: string
  meta: MetaProps[]
  title: string
}

type MetaProps = {
  name: string
  content: any
  property: undefined
}

export type SideBarProps = {
  pageTitle?: string
  isOpen: boolean
}

export type UtterancesProps = {
  repo: string
  theme: string
}
