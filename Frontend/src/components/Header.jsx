import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Home, Menu, User, Text, Contact } from 'lucide-react'

function Header() {
  return (
    <header className='fixed top-0 left-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-end pr-5'>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-2'>
          <a href='#home'>
            <Button variant='ghost' className='flex items-center space-x-1'>
              <Home className='w-5 h-5' />
              <span>Home</span>
            </Button>
          </a>
          <a href='#about'>
            <Button variant='ghost' className='flex items-center space-x-1'>
              <User className='w-5 h-5' />
              <span>About</span>
            </Button>
          </a>
          <a href='#projects'>
            <Button variant='ghost' className='flex items-center space-x-1'>
              <Text className='w-5 h-5' />
              <span>Projects</span>
            </Button>
          </a>
          <a href='#contact'>
            <Button variant='ghost' className='flex items-center space-x-1'>
              <Contact className='w-5 h-5' />
              <span>Contact</span>
            </Button>
          </a>
        </div>

        {/* Mobile Dropdown */}
        <div className='md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <Menu className='w-6 h-6' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem asChild>
                <a href='#home' className='flex items-center gap-2'>
                  <Home className='w-4 h-4' /> Home
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href='#about' className='flex items-center gap-2'>
                  <User className='w-4 h-4' /> About
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href='#projects' className='flex items-center gap-2'>
                  <Text className='w-4 h-4' /> Projects
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href='#contact' className='flex items-center gap-2'>
                  <Contact className='w-4 h-4' /> Contact
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  )
}

export default Header
