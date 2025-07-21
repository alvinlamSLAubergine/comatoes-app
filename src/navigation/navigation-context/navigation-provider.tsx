import { PropsWithChildren, useState } from 'react';
import { NavSection } from '../../types';
import { NavigationContext } from './navigation-context';

export const NavigationProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<NavSection>(NavSection.clients);

  const updateActiveSection = (section: NavSection) => {
    setActiveSection(section);
  };

  return (
    <NavigationContext.Provider value={{ activeSection, updateActiveSection }}>{children}</NavigationContext.Provider>
  );
};
