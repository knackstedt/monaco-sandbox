// Monaco has a UMD loader that requires this
// @ts-ignore
window.require = { paths: { 'vs': '/lib/monaco/vs' } };

const monacoFiles = [
    '/lib/monaco/vs/loader.js',
    '/lib/monaco/vs/editor/editor.main.nls.js',
    '/lib/monaco/vs/editor/editor.main.js',
];
let isInstalled = false;
function installMonaco() {
    if (isInstalled) return;

    for (let i = 0; i < monacoFiles.length; i++) {
        const script = document.createElement("script");
        script.setAttribute("defer", "");
        script.setAttribute("src", monacoFiles[i]);
        document.body.append(script);
    }
    isInstalled = true;
}
