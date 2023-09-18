import { TabList } from '@mui/lab';
import { Tab } from '@mui/material';

interface HeaderProps {
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ handleChange }) => {
  return (
    <div className="flex items-center h-24 pl-6">
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Item One" value="1" />
        <Tab label="Item Two" value="2" />
      </TabList>
    </div>
  );
};
