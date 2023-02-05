import type { DocumentData } from 'firebase-admin/firestore';
/**
 * Convert Firestore data into an object of type T
 */
export declare function ofFirestore<T>(document: DocumentData, hasTimestamp?: boolean): T;
