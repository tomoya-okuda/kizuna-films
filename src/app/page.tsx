import Header from '@/components/layout/Common/Header/Header';
import LINE from '@/components/layout/Common/Others/LINE';
import Blog from '@/components/layout/Page/Top/Blog';
import FV from '@/components/layout/Page/Top/FV';
import Flow from '@/components/layout/Page/Top/Flow';
import Location from '@/components/layout/Page/Top/Location';
import Menu from '@/components/layout/Page/Top/Menu';
import Message from '@/components/layout/Page/Top/Message';
import Sale from '@/components/layout/Page/Top/Sale';
import Work from '@/components/layout/Page/Top/Work';

export default function Home() {
  return (
    <main>
      <Header banner={true} />
      <FV />
      <Message />
      <Sale />
      <Work />
      <Menu />
      <Location />
      <Flow />
      <Blog />
      <LINE />
    </main>
  );
}
