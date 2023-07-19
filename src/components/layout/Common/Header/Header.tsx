import Arrow from '@/components/atoms/Arrow';
import Image from 'next/image';
import Search from '@/components/atoms/Search';
import Link from 'next/link';

type Props = {
  banner?: boolean;
  blog?: boolean;
};

function Header({ banner = false, blog = false }: Props) {
  return (
    <header>
      {banner && (
        <Link
          href="/line"
          passHref
          className="bg-Green100 flex justify-between items-center py-3 px-4 cursor-pointer"
        >
          <div className="flex items-center">
            <h5 className="mr-2 mt-[-2px]">📢</h5>
            <h5>LINEで気軽にご相談ください！☺️</h5>
          </div>
          <Arrow color="var(--Black100)" />
        </Link>
      )}

      <div className="border-tb-black100 flex justify-center items-center py-3">
        {blog ? (
          <Link
            href="/blog"
            passHref
            className="flex justify-between w-full items-center px-4 cursor-pointer"
          >
            <Image
              src="/images/logo/logo-blog.svg"
              alt="logo-blog"
              width={148}
              height={16}
              loading="eager"
            />
            <Search />
          </Link>
        ) : (
          <Link href="/" className="cursor-pointer" passHref>
            <Image
              src="/images/logo/logo.svg"
              alt="logo"
              width={82}
              height={16}
              loading="eager"
            />
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
