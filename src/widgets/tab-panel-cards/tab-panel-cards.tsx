import { TabPanelProps } from '@/shared/constants';
import { UserCard } from '@/shared/ui/user-card';
import { TabPanel } from '@mui/lab';
import React from 'react';

export const TabPanelCards: React.FC<TabPanelProps> = ({ value, users }) => {
  return (
    <TabPanel className="flex gap-5" value={value}>
      {users.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </TabPanel>
  );
};
