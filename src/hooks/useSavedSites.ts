import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'cham_ninh_binh_saved_sites_v1';
const LEGACY_STORAGE_KEY = 'cham_di_san_saved_sites_v1';

function readSavedFromStorage(): string[] {
  try {
    const raw =
      window.localStorage.getItem(STORAGE_KEY) ?? window.localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

export function useSavedSites() {
  const [savedIds, setSavedIds] = useState<string[]>(() => readSavedFromStorage());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch {
      // Ignore storage quota or private-mode restrictions
    }
  }, [savedIds]);

  const isSaved = useCallback((siteId: string) => savedIds.includes(siteId), [savedIds]);

  const toggleSave = useCallback((siteId: string) => {
    setSavedIds((prev) =>
      prev.includes(siteId) ? prev.filter((id) => id !== siteId) : [...prev, siteId]
    );
  }, []);

  return { savedIds, isSaved, toggleSave };
}
