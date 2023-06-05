interface navLink {
  icon?: string | { svg: string }
  title: string
  desc?: string
  link: string
}
interface navLinks {
  title: string
  item: Array<navLink>
}

export { navLink, navLinks }
