import React from 'react';
import { Sparkles } from 'lucide-react';

const HeroImage = () => {
  return (
    <div className="relative w-8 h-8 shrink-0" data-name="ic-sparkles">
      <Sparkles className="w-full h-full text-white" fill="white" />
    </div>
  );
};

export default HeroImage;