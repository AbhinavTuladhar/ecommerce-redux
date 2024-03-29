import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface ColumnProps {
  title: string
  links: string[]
}

const FooterColumn: FC<ColumnProps> = ({ title, links }) => (
  <div className="flex flex-col gap-y-3">
    <h2 className="font-medium uppercase fluid-text-2xl"> {title}</h2>
    <ul className="flex flex-col gap-y-1">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={`/${link.split(' ').join('')}`}>{link}</NavLink>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  const footerLinks = [
    { title: 'About', links: ['Who are we?', 'Privacy Policy'] },
    { title: 'Help', links: ['Support', 'Help centre'] },
    { title: 'Contact', links: ['Terms and conditions', 'Return and exchange policy'] },
    { title: 'Follow us', links: ['Facebook', 'Instagram'] },
  ]

  return (
    <footer className="bg-lightmode-green py-8 text-white dark:bg-darkmode-green">
      <div className="mx-auto grid w-container grid-cols-footer-grid gap-x-2 gap-y-6">
        {footerLinks.map((column, index) => {
          const { title, links } = column
          return <FooterColumn title={title} links={links} key={index} />
        })}
      </div>
    </footer>
  )
}

export default Footer
