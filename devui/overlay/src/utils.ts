import { onUnmounted, watch, computed, ComputedRef } from 'vue';
import { OverlayProps } from './overlay-types';

interface CommonInfo {
  containerClass: ComputedRef<string[]>
  panelClass: ComputedRef<string[]>
  handleBackdropClick: (e: Event) => void
}

export function useOverlayLogic(props: OverlayProps): CommonInfo {
  const containerClass = computed(() => {
    if (props.hasBackdrop) {
      return ['d-overlay-container', props.backgroundClass];
    } else {
      return ['d-overlay-container', 'd-overlay-container__disabled'];
    }
  });
  const panelClass = computed(() => {
    if (props.hasBackdrop) {
      return ['d-overlay-panel'];
    } else {
      return ['d-overlay-panel', 'd-overlay-container__disabled'];
    }
  });

  const handleBackdropClick = (event: Event) => {
    event.preventDefault();

    props.backdropClick?.();
    if (props.backdropClose) {
      props['onUpdate:visible']?.(false);
    }
  };

  const body = document.body;
  const originOverflow = body.style.overflow;
  watch([() => props.visible, () => props.backgroundBlock], ([visible, backgroundBlock]) => {
    if (backgroundBlock) {
      body.style.overflow = visible ? 'hidden' : originOverflow;
    }
  });

  onUnmounted(() => {
    body.style.overflow = originOverflow;
  });

  return {
    containerClass,
    panelClass,
    handleBackdropClick
  }
}
