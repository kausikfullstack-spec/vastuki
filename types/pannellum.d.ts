declare module "pannellum";

interface Window {
  pannellum: {
    viewer(container: HTMLElement, options: {
      type: "equirectangular";
      panorama: string;
      autoLoad: boolean;
      autoRotate: number;
      mouseZoom: boolean;
      hfov: number;
      showFullscreenCtrl: boolean;
      showZoomCtrl: boolean;
      escapeHTML: boolean;
    }): {
      on(event: "load" | "error", callback: () => void): void;
      destroy(): void;
      getYaw(): number;
      getPitch(): number;
      setYaw(yaw: number, animated: boolean): void;
      setPitch(pitch: number, animated: boolean): void;
    };
  };
}
