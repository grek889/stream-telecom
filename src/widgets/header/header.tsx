import { View } from '@/shared/constants';
import { TabList } from '@mui/lab';
import { Tab } from '@mui/material';

interface HeaderProps {
  handleChange: (event: React.SyntheticEvent, newValue: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ handleChange }) => {
  return (
    <div className="flex items-center h-24 pl-6">
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="List" value={View.List} />
        <Tab label="Tiles" value={View.Tiles} />
      </TabList>
    </div>
  );
};
