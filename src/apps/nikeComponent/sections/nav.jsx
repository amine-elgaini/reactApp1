import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

function Nav() {
    return (
        <header className=''>
            <nav className='px-8 py-4 flex justify-between items-center'>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29}/>
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
                    {navLinks.map((i)=>(
                        <li key={i.label}>
                            <a href={i.href} className=''>
                                {i.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='md:hidden'>
                    <img src={hamburger} alt="Menu" width={25} height={25}/>
                </div>
            </nav>
        </header>
    )
}

export default Nav