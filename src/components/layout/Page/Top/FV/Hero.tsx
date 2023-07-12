'use client';

import { useState } from 'react';
import Pause from '@/components/atoms/Pause';
import Play from '@/components/atoms/Play';
import Image from 'next/image';

type Props = {};

function Hero({}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div className="relative w-full min-h-[468px]">
      {/* 再生ボタン */}
      <div className="absolute top-2 right-2 z-10">
        {isPlaying ? (
          <Play display={isPlaying} onClick={togglePlayPause} />
        ) : (
          <Pause display={!isPlaying} onClick={togglePlayPause} />
        )}
      </div>

      {/* サムネイル */}
      <Image
        src="/images/hero.avif"
        alt="thumbnail"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default Hero;
