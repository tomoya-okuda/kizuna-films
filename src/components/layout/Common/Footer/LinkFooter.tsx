import Arrow from '@/components/atoms/Arrow';
import Link from 'next/link';

type Props = {
  href: string;
  name: string;
};

function LinkFooter({ href, name }: Props) {
  return (
    <div className="relative block">
      <Link href={href} className="inline-flex items-center gap-1">
        <h4>{name}</h4>
        <Arrow />
      </Link>
    </div>
  );
}

export default LinkFooter;
