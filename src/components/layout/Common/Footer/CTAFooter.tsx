import Image from 'next/image';
import Link from 'next/link';

type Props = {
  href: string;
  text: string;
  src: string;
  line?: boolean;
};

function CTAFooter({ href, text, src, line = false }: Props) {
  return (
    <Link
      href={href}
      className={`flex-1 flex items-center justify-center p-5 bg-White100 ${
        line ? 'border-r-black100' : ''
      } cursor-pointer`}
    >
      <div className="flex items-center gap-1">
        <span className="font-bold">{text}</span>
        <Image
          src={src}
          alt={text}
          width={24}
          height={24}
          className="mt-[-2px]"
        />
      </div>
    </Link>
  );
}

export default CTAFooter;
