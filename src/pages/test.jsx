import React from 'react';
import Markdown from "markdown-to-jsx"


const md = `
# [toto](http://www.sarenza.com)

# mon titre d'article 

ma grand mère fait du

> vélo





<!--Mon commentaire-->






elle a un beau

> maillot

\`\`\`code block\`\`\`

<span style="color:red;font-weight:bold;">toto</span>
`
function test(props) {


    return (
        <div>
            <Markdown>
                {md}
            </Markdown>
        </div>
    );
}

export default test;