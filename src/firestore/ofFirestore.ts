import type { DocumentData } from 'firebase-admin/firestore';

import { toNativeTypes } from './toNativeTypes.js';

/**
 * Convert Firestore data into an object of type T
 */
export function ofFirestore<T>(document: DocumentData, hasTimestamp = false): T {
  const data = { id: document.id, ...document.data() };

  if (hasTimestamp) {
    return toNativeTypes(data);
  }

  return data;
}
