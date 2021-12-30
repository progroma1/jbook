import MonacoEditor from '@monaco-editor/react';

const CodeEditor = () => {
    return <MonacoEditor 
        height={500} 
        language='javascript' 
        theme="dark" 
        options={{
            wordWrap: 'on',
        }}
    />;
};

export default CodeEditor;