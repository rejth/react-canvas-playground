import { Tools } from '@/shared/interfaces';

import { useCanvasContext } from '@/context';
import { useToolbarContext } from '@/context';

import { useCreateSticker } from '@/features/useCreateSticker';
import { useSelectTool } from '@/features/useSelectTool';

export const useCanvasOnClick = () => {
  const { camera } = useCanvasContext();
  const { tool } = useToolbarContext();

  const createSticker = useCreateSticker();
  const selectTool = useSelectTool();

  return (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!camera) return;

    const currentTransformedPosition = camera.handleClick(e.nativeEvent);

    if (tool === Tools.STICKER) {
      createSticker(e, currentTransformedPosition);
    } else if (tool === Tools.SELECT) {
      selectTool(e, currentTransformedPosition);
    }
  };
};
