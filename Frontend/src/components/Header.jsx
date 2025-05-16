import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate('/signin')
  }

  return (
    <header className='fixed top-0 w-[80vw] border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto px-4 h-18 flex items-center justify-between'>

        <div className='flex items-start justify-start'>
          <a href='/'>
            <img src='/logo.png' alt='Logo' className='h-10 w-auto' />
          </a>
        </div>

        <div className='flex space-x-4 justify-end items-end'>
          <SignedIn>
            <a href='/dashboard'>
              <Button className='flex items-center'>
                <LayoutDashboard className='w-5 h-5' />
                <span className='hidden md:block '>Industry Insights</span>
              </Button>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className='flex items-center'>
                  <StarsIcon className='w-5 h-5 mr-2' />
                  <span className='hidden md:block '>Growth Tools</span>
                  <ChevronDown className='w-4 h-4 ml-2' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Button className='flex items-center'>
                    <FileText className='w-5 h-5 mr-2' />
                    <span className='hidden md:block '>Build Resume</span>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className='flex items-center'>
                    <PenBox className='w-5 h-5 mr-2' />
                    <span className='hidden md:block '>Cover Letter</span>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className='flex items-center'>
                    <GraduationCap className='w-5 h-5 mr-2' />
                    <span className='hidden md:block '>Interview Prep</span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <Button onClick={handleSignIn}>Sign In</Button>
          </SignedOut>
          <SignedIn>
            <UserButton
              afterSignOutUrl='/'
              appearance={{
                elements: {
                  avatarBox: 'h-10 w-10',
                  userButtonAvatar: 'h-10 w-10 rounded-full',
                  userButtonPopoverCard: 'w-[200px] shadow-xl',
                  userButtonPopoverAction: 'w-full text-left',
                  userPreviewMainIdentifier: 'font-semibold'
                },
              }}
            />
          </SignedIn>

        </div>

      </nav>
    </header>
  )
}

export default Header
