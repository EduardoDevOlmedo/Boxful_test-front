import { create }from 'zustand';
import { PackageState } from '@/components/Sections/types';

interface SectionOneState {
  packages: PackageState[];
  setPackages: (packages: PackageState[]) => void;
}

const useSectionTwoStore = create<SectionOneState>((set) => ({
  packages: [],
  setPackages: (packages) => set({ packages }),
}));

export default useSectionTwoStore;
