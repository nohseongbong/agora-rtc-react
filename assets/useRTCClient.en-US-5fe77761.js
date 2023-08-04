import{j as e}from"./jsx-runtime-94f6e698.js";import{M as o,d as i}from"./index-ecd88e7f.js";import{u as a}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-c57a35ac.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-80ae7d84.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const s=`## useRTCClient

Returns the \`IAgoraRTCClient\` object.

#### Parameters

| Parameter | Type                                                                                                                     | Required | Description                                                                                                                                                                                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`client\`  | [\`IAgoraRTCClient\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html) &VerticalLine; \`null\` | No       | If provided, the passed \`IAgoraRTCClient\` object is returned. If not provided, the \`IAgoraRTCClient\` object obtained from the [parent component's context](https://api-ref.agora.io/en/video-sdk/reactjs/2.https://api-ref.agora.io/en/video-sdk/reactjs/2.x/functions/AgoraRTCProvider.html) is returned. |

#### Returns

| Type                                                                                               | Description                   |
| -------------------------------------------------------------------------------------------------- | ----------------------------- |
| [\`IAgoraRTCClient\`](https://api-ref.agora.io/en/video-sdk/web/4.x/interfaces/iagorartcclient.html) | The \`IAgoraRTCClient\` client. |

#### Sample code

\`\`\`jsx
import { useRTCClient } from "agora-rtc-react";

function App() {
  const client = useRTCClient();

  return <></>;
}
\`\`\`
`;function r(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"hooks/useRTCClient"}),`
`,e.jsx(i,{options:{namedCodesToUnicode:{VerticalLine:"|"}},children:s})]})}function j(t={}){const{wrapper:n}=Object.assign({},a(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r()}export{j as default};
//# sourceMappingURL=useRTCClient.en-US-5fe77761.js.map
