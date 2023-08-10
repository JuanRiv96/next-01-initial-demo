import { ActiveLink } from "./ActiveLink"

export const Navbar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
  return (
    <nav className={'menu-container'}>
        {/* <ActiveLink text = "Home" href = "/"/>
        <ActiveLink text = "About" href = "/about"/>
        <ActiveLink text = "Contact" href = "/contact"/>
        <ActiveLink text = "Pricing" href = "/pricing"/> */}

        {menuItems.map( item => {
          return (
            <ActiveLink key={item.href} text={ item.text} href={item.href}/>
          )
        })}
    </nav>
    
  )
}
