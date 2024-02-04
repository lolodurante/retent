'use client';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import CheckTable from 'components/admin/data-tables/CheckTable';

const tableData = [
  {
    name: ['John Doe', true],
    progress: '50%',
    quantity: 10,
    date: '12/12/2021', 
  },
  {
    name: ['Jane Doe', false],
    progress: '100%',
    quantity: 20,
    date: '12/12/2021',
  }


]
const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Dato 1'}
          subtitle={'$95'}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={'Dato 2'}
          subtitle={'0.5/1'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Dato 3'}
          subtitle={'$95'}
        />
      </div>
      <div className='mt-5'>
        <CheckTable tableData={tableData} tableName='Lista de clientes' />
      </div>
    </div>
  );
};

export default Dashboard;
