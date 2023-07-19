import Arrow from '@/components/atoms/Arrow';
import Comment from '@/components/ui/Others/Comment';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

function Sale({}: Props) {
  return (
    <div className="bg-White100 border-b-black100 flex flex-col items-center gap-4  py-10 px-4">
      <Comment text="今だけ、お得なキャンペーン実施中" />
      <div className="flex items-end gap-7">
        {/* left */}
        <div className="flex items-end gap-2">
          <p className="leading-none font-[800] text-[88px] text-Yellow100 stroke-Black100">
            30
          </p>
          <div className="font-bold mb-1">
            <p className="font-bold text-2xl">%</p>
            <p className="font-bold text-2xl">OFF</p>
          </div>
        </div>
        {/* right */}
        <div className="mb-5 relative">
          <Link
            href="/line"
            className="bg-Black100 text-White100 py-2 px-5 flex justify-center items-center gap-2"
          >
            見る
            <Arrow color="var(--White100)" />
          </Link>
          <Image
            src="/icons/double-arrow.svg"
            alt="double arrow icon"
            width={52}
            height={46}
            className="absolute right-[-24px] top-[24px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Sale;
