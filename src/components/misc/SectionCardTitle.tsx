import { FC } from 'react';

interface CardProps {
  children: React.ReactNode;
}

const SectionCardTitle: FC<CardProps> = ({ children }) => {
  return (
    <div className="border-b border-gray-300 bg-gray-50 py-4 dark:border-slate-700 dark:bg-complementary">
      <div className="mx-auto w-11/12 text-2xl font-bold ">{children}</div>
    </div>
  );
};

export default SectionCardTitle;
