import React from 'react';
import { Header, TabPanelCards, TabPanelList } from '@/widgets';
import { TabContext } from '@mui/lab';

import { View, users } from '@/shared/constants';

export const App = () => {
  const [value, setValue] = React.useState<View>(View.List);

  const handleChange = (event: React.SyntheticEvent, newValue: View) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Header handleChange={handleChange}></Header>
      <TabPanelList value={View.List} users={users} />
      <TabPanelCards value={View.Tiles} users={users} />
    </TabContext>
  );
};
