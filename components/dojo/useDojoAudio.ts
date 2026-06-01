"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/basePath";

export type DojoSound = "tap" | "confirm" | "success" | "miss";

const soundSources: Record<DojoSound, string> = {
  tap: "/sounds/monkeytype-pack/nk-creams/click4_1.opus",
  confirm: "/sounds/monkeytype-pack/nk-creams/click4_2.opus",
  success: "/sounds/monkeytype-pack/nk-creams/click4_11.opus",
  miss: "/sounds/monkeytype-pack/nk-creams/click4_22.opus"
};

function createAudio(src: string): HTMLAudioElement {
  const audio = new Audio(withBasePath(src));
  audio.preload = "auto";
  audio.volume = 0.55;
  return audio;
}

function createPool(sound: DojoSound): HTMLAudioElement[] {
  return [createAudio(soundSources[sound]), createAudio(soundSources[sound])];
}

export function useDojoAudio() {
  const [enabled, setEnabled] = useState(true);
  const [ready, setReady] = useState(false);
  const pools = useRef<Partial<Record<DojoSound, HTMLAudioElement[]>>>({});

  useEffect(() => {
    return () => {
      Object.values(pools.current).flat().forEach((audio) => {
        audio.pause();
        audio.removeAttribute("src");
      });
    };
  }, []);

  const playDirect = useCallback((sound: DojoSound) => {
    const pool = pools.current[sound] ?? createPool(sound);
    pools.current[sound] = pool;
    const audio = pool.find((item) => item.paused) ?? pool[0];
    audio.currentTime = 0;
    setReady(true);
    void audio.play().catch(() => setReady(false));
  }, []);

  const play = useCallback(
    (sound: DojoSound) => {
      if (enabled) playDirect(sound);
    },
    [enabled, playDirect]
  );

  const toggleSound = useCallback(() => {
    playDirect(enabled ? "tap" : "confirm");
    setEnabled((current) => !current);
  }, [enabled, playDirect]);

  return { enabled, ready, play, toggleSound };
}
