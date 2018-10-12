import { ReactNode } from 'react';
import { Store } from '@dump247/storybook-state';
import { ExampleModel } from './store/interfaces';
declare type Props = {
    store: Store<ExampleModel>;
};
export default function WidthResizeStory(props: Props): ReactNode;
export {};