import CountDate from '@/components/ui/Others/CountDate';
import CountTime from '@/components/ui/Others/CountTime';
import Hero from './Hero';

type Props = {};

function FV({}: Props) {
  return (
    <div className="relative border-b-black100 py-6 px-3 min-h-[80vh] w-full">
      {/* 日付と時間 */}
      <div className="flex justify-between mb-2">
        <CountDate />
        <CountTime />
      </div>
      {/* ヒーローセクション */}
      <Hero />
    </div>
  );
}

export default FV;
