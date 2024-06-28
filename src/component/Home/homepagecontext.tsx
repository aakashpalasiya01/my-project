'use client';
import { createContext, useState, useContext, ReactNode } from 'react';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { uniqueid } from '@/utils/CommonService';
import { RegisteredPagination } from './Register';

type RegisterSkillprops = {
  setPagination: Function;
  pagination: RegisteredPagination;
};

const PaginationContext = createContext<RegisterSkillprops | undefined>(undefined);

export const PaginationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const { Profile } = useAppSelector((state: RootState) => state.profile);
  
  

  const defaultPagination = {
    page: 1,
    per_page: 12,
    level_skills: '',
    search: '',
    order_by: 'title',
    order: 'asc',
    class_data: 0,
    total_data: 0,
    group: '',
    user_id: Profile?.user_id || '',
    cache: uniqueid(),
    class_id: '',
  };

  const [pagination, setPagination] = useState(defaultPagination);

  return (
    <PaginationContext.Provider value={{ pagination, setPagination }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider');
  }
  return context;
};
