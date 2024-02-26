import type { VoiceType } from "./Voice";
export interface Question {
  pkValue: number;
  korTitleValue: string;
  categories: {};
  voices: VoiceType[];
  bookmark: boolean;
}
