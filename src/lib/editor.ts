import { MonacoEditorOptions } from 'src/lib/types';
import { editor } from 'monaco-editor';

declare const monaco: {
    editor: typeof editor;
};

export class MonacoEditor {
    constructor(options: MonacoEditorOptions) {

    }
}
