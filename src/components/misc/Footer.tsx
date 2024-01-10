import { FC } from "react"

interface ColumnProps {
  title: string,
  links: string[]
}

const FooterColumn: FC<ColumnProps> = ({ title, links }) => (
  <div className='flex flex-col gap-y-3'>
    <h2 className='text-2xl font-medium uppercase'> {title}</h2>
    <ul className='flex flex-col gap-y-1'>
      {links.map((link, index) => (
        <li key={index}>
          {link}
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
    <footer className='py-8 text-black bg-[#c6ead7] dark:bg-[#372D1F] dark:text-white'>
      <div className='grid mx-auto grid-cols-footer-grid w-container gap-x-2 gap-y-6'>
        {footerLinks.map((column, index) => {
          const { title, links } = column
          return <FooterColumn title={title} links={links} key={index} />
        })}
      </div>
    </footer>
  )
}

export default Footer