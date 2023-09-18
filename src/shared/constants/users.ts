export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export const users = [
  {
    id: 1,
    name: 'Иванов Иван Иванович',
    email: 'ivanov@ivan.ivan',
    phone: '+7 (999) 999-99-99'
  },
  {
    id: 2,
    name: 'Петров Петр Петрович',
    email: 'petrov@petr.petr',
    phone: '+7 (888) 888-88-88'
  },
  {
    id: 3,
    name: 'Сидоров Сидор Сидорович',
    email: 'sidorov@sidor.sidor',
    phone: '+7 (777) 777-77-77'
  }
];
