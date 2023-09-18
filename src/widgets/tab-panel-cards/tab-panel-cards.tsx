import { User } from '@/shared/constants';
import { UserCard } from '@/shared/ui/user-card';
import { TabPanel } from '@mui/lab';
import React from 'react';

interface TapPanelCardsProps {
  users: User[];
  value: string;
}

export const TabPanelCards: React.FC<TapPanelCardsProps> = ({
  value,
  users
}) => {
  return (
    <TabPanel className="flex gap-5" value={value}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </TabPanel>
  );
};
