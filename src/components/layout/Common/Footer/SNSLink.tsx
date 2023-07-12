import Link from 'next/link';
import Image from 'next/image';

type Props = {
  href: string;
  src: string;
};

function SNSLink({ href, src }: Props) {
  return (
    <>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-White100 rounded-full border border-Black100 cursor-pointer"
      >
        <Image src={src} alt="src" width={32} height={32} />
      </Link>
    </>
  );
}

export default SNSLink;
