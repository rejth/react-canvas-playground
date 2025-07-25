import { useCallback } from 'react';

import { useActiveLayerContext } from '@/context';

import { LayerSerializer } from '@/services/LayerSerializer';
import { LayerDocument } from '@/services/Storage/interfaces';
import { RenderManager } from '@/services/RenderManager';

export const useSyncLayer = () => {
  const { activeLayer, lastActiveLayer } = useActiveLayerContext();

  const currentActiveLayer = activeLayer || lastActiveLayer;

  return useCallback(async () => {
    const renderManager = RenderManager.getInstance();
    if (!renderManager || !currentActiveLayer) return;

    const db = renderManager.getSyncDBInstance()?.database;
    if (!db) return;

    const serializedLayer = LayerSerializer.serialize(currentActiveLayer);
    if (!serializedLayer) return;

    const docId = serializedLayer.id;
    if (docId) {
      (serializedLayer as LayerDocument)._id = String(docId);
    }

    try {
      const doc = await db.get(String(docId));
      (serializedLayer as LayerDocument)._rev = doc._rev;

      if (JSON.stringify(doc) === JSON.stringify(serializedLayer)) return;

      await db.put(serializedLayer);
    } catch {
      // If the layer is not found, create it
      await db.put(serializedLayer);
    }
  }, [currentActiveLayer]);
};
