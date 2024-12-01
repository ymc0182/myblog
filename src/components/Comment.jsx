import Giscus from '@giscus/react';

export default function MyApp() {
  return (
    <Giscus
      id="comments"
      repo="ymc0182/myblog"
      repoId="R_kgDOMiAgoA"
      category="General"
      categoryId="DIC_kwDOMiAgoM4Chifv"
      mapping="title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="https://res.jb18.cm/css/giscus_theme.css"
      lang="zh-CN"
    />
  );
}
