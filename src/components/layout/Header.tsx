import Arrow from '@/components/atoms/Arrow';
import Image from 'next/image';
import Search from '@/components/atoms/Search';

type Props = {
  banner?: boolean;
  blog?: boolean;
};

function Header({ banner = false, blog = false }: Props) {
  return (
    <header>
      {banner && (
        <div className="bg-Green100 flex justify-between items-center py-3 px-4">
          <div className="flex items-center">
            <h5 className="mr-2 mt-[-2px]">📢</h5>
            <h5>LINEで気軽にご相談ください！☺️</h5>
          </div>
          <Arrow />
        </div>
      )}

      <div className="border-tb-black100 flex justify-center items-center py-3">
        {blog ? (
          <div className="flex justify-between w-full items-center px-4">
            <Image
              src="/images/logo-blog.svg"
              alt="logo-blog"
              width={148}
              height={16}
            />
            <Search />
          </div>
        ) : (
          <Image src="/images/logo.svg" alt="logo" width={82} height={16} />
        )}
      </div>
    </header>
  );
}

export default Header;
