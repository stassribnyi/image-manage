import { LevelNavProps } from '../level-nav';

export interface HeroProps {
  readonly greeting: string;
  readonly title: string;
  readonly subtitle: string;
  readonly links: LevelNavProps['links'];
}
