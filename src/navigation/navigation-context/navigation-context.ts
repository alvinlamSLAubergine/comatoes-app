import { createContext, useContext } from 'react';
import { NavSection } from '../../types';

interface NavigationContextType {
  activeSection: NavSection;
  updateActiveSection: (section: NavSection) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  activeSection: NavSection.clients,
  updateActiveSection: () => {},
});

export const useNavigation = () => useContext(NavigationContext);
