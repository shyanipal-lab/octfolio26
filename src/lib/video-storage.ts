// Utility for persisting user-uploaded showcase video in IndexedDB
// Ensures uploaded videos persist across browser reloads without modifying or re-encoding the file

const DB_NAME = 'PortfolioMediaDB';
const STORE_NAME = 'videos';
const VIDEO_KEY = 'mercedes_uploaded_video';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not available in this environment'));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveUploadedVideo(file: File): Promise<void> {
  try {
    // Read the buffer or blob FIRST before starting the IndexedDB transaction
    // Otherwise, awaiting arrayBuffer() allows the transaction to auto-commit and finish
    const buffer = await file.arrayBuffer();
    const db = await openDB();
    
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);

      tx.onabort = () => reject(tx.error || new Error('Transaction aborted'));
      tx.onerror = () => reject(tx.error || new Error('Transaction error'));
      tx.oncomplete = () => resolve();

      store.put(
        {
          data: buffer,
          type: file.type || 'video/mp4',
          name: file.name,
          savedAt: Date.now(),
        },
        VIDEO_KEY
      );
    });
  } catch (err) {
    console.error('Failed to save uploaded video to IndexedDB:', err);
  }
}

export async function getStoredVideo(): Promise<{ url: string; name: string } | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(VIDEO_KEY);
      req.onsuccess = () => {
        const item = req.result;
        if (item && item.data) {
          const blob = new Blob([item.data], { type: item.type || 'video/mp4' });
          const url = URL.createObjectURL(blob);
          resolve({ url, name: item.name || 'Uploaded Video' });
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch (err) {
    console.error('Failed to load video from IndexedDB:', err);
    return null;
  }
}

export async function clearStoredVideo(): Promise<void> {
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error('Transaction error'));
      store.delete(VIDEO_KEY);
    });
  } catch (err) {
    console.error('Failed to clear video from IndexedDB:', err);
  }
}
