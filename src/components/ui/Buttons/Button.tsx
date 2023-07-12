import Arrow from '@/components/atoms/Arrow';
import Link from 'next/link';

type Props = {
  href: string;
  text: string;
  external?: boolean;
};

function Button({ href, text, external }: Props) {
  const linkProps = {
    href,
    className:
      'flex items-center gap-2 bg-White100 border border-Black100 font-bold py-2 px-8 tracking-wider',
  };

  if (external) {
    return (
      <>
        <Link {...linkProps} target="_blank" rel="noopener noreferrer">
          {text}
          <Arrow />
        </Link>
      </>
    );
  }

  return (
    <>
      <Link {...linkProps}>
        {text}
        <Arrow />
      </Link>
    </>
  );
}

export default Button;
