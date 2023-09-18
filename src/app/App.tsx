import React from 'react';
import { Header, TabPanelCards, TabPanelList } from '@/widgets';
import { TabContext } from '@mui/lab';
import { users } from '@/shared/constants';

export const App = () => {
  const [value, setValue] = React.useState<string>('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Header handleChange={handleChange}></Header>
      <TabPanelList value="1" users={users} />
      <TabPanelCards value="2" users={users} />
    </TabContext>
  );
};
