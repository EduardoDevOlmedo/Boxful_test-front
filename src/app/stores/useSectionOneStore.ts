import { create }from 'zustand';
import { FormState } from '@/components/Sections/types';

interface SectionOneState {
  formState: FormState;
  setFormState: (state: FormState) => void;
}

const useSectionOneStore = create<SectionOneState>((set) => ({
  formState: {
    collectionAddress: '',
    scheduledDate: '',
    date: null,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    referencePoint: '',
    instructions: '',
    phone: '+503 ',
    department: '',
    municipality: '',
  },
  setFormState: (state) => set({ formState: state }),
}));

export default useSectionOneStore;
