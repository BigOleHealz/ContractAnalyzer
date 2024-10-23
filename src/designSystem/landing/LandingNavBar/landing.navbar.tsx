'use client'

import { useDesignSystem } from '@/designSystem/provider'
import { LandingDesktopNavbar } from './landing.desktop.navbar'
import { LandingMobileNavbar } from './landing.mobile.navbar'
import { Link } from 'react-router-dom';

interface Props {
  navItems: {
    link: string
    title: string
            <Link to="/sprints">Sprints</Link>
    target?: '_blank'
            <Link to="/backlog">Backlog</Link>
  }[]
}

export const LandingNavBar: React.FC<Props> = ({ navItems }) => {
  const { isMobile } = useDesignSystem()

  return (
    <div className="max-w-7xl  pt-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
      <div className="hidden lg:block w-full">
        {!isMobile && <LandingDesktopNavbar navItems={navItems} />}
      </div>
      <div className="flex h-full w-full items-center">
        {isMobile && <LandingMobileNavbar navItems={navItems} />}
      </div>
    </div>
  )
}
