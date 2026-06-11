export const mockClients = [
  { id: '1', name: 'Mario Rossi', email: 'mario.rossi@email.com', phone: '333-1234567', status: 'active', plan: 'Pro Annuale', joinDate: '2023-01-15' },
  { id: '2', name: 'Laura Bianchi', email: 'laura.b@email.com', phone: '333-7654321', status: 'active', plan: 'Starter Mensile', joinDate: '2023-03-22' },
  { id: '3', name: 'Giuseppe Verdi', email: 'g.verdi@email.com', phone: '338-9876543', status: 'inactive', plan: 'Starter Mensile', joinDate: '2022-11-10' },
  { id: '4', name: 'Anna Neri', email: 'anna.neri@email.com', phone: '339-1122334', status: 'active', plan: 'Pro Mensile', joinDate: '2023-06-05' },
  { id: '5', name: 'Marco Gialli', email: 'm.gialli@email.com', phone: '331-5566778', status: 'pending', plan: 'Pro Annuale', joinDate: '2023-10-01' }
];

export const mockRevenueData = [
  { name: 'Gen', revenue: 4000 },
  { name: 'Feb', revenue: 4500 },
  { name: 'Mar', revenue: 5200 },
  { name: 'Apr', revenue: 4800 },
  { name: 'Mag', revenue: 6000 },
  { name: 'Giu', revenue: 6500 },
  { name: 'Lug', revenue: 7000 },
];

export const mockBookings = [
  { id: '1', client: 'Mario Rossi', class: 'Crossfit', date: '2023-10-25', time: '18:00', status: 'confirmed' },
  { id: '2', client: 'Laura Bianchi', class: 'Yoga', date: '2023-10-25', time: '19:00', status: 'confirmed' },
  { id: '3', client: 'Anna Neri', class: 'Pilates', date: '2023-10-26', time: '10:00', status: 'waitlist' },
];