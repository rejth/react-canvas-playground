import { useState } from 'react';
import { LayerInterface } from '@/entities/interfaces';

import { ActiveLayerContext } from './ActiveLayerContext';

type Props = {
  children: React.ReactNode;
};

export const ActiveLayerProvider = ({ children }: Props) => {
  const [activeLayer, setActiveLayer] = useState<LayerInterface | null>(null);
  const [lastActiveLayer, setLastActiveLayer] = useState<LayerInterface | null>(null);

  return (
    <ActiveLayerContext.Provider value={{ activeLayer, setActiveLayer, lastActiveLayer, setLastActiveLayer }}>
      {children}
    </ActiveLayerContext.Provider>
  );
};
