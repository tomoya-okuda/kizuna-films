import Arrow from '@/components/atoms/Arrow';
import Link from 'next/link';

type Props = {
  href: string;
  name: string;
};

function LinkFooter({ href, name }: Props) {
  return (
    <>
      <Link href={href} className="flex items-center gap-1">
        <h4>{name}</h4>
        <Arrow />
      </Link>
    </>
  );
}

export default LinkFooter;
