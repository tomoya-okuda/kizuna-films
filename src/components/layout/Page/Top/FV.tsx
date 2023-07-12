import CountDate from '@/components/ui/Others/CountDate';
import CountTime from '@/components/ui/Others/CountTime';
import Image from 'next/image';

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
      <div className="relative w-full min-h-[468px]">
        <Image
          src="/images/hero.avif"
          alt="thumbnail"
          loading="eager"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default FV;
