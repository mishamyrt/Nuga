import { atom } from 'nanostores'

/**
 * List of all Views in the application
 */
export type SettingsView = 'lights' | 'device' | 'keys' | 'application'

export const view = atom<SettingsView>('lights')
