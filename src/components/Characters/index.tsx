import React, { FC } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { parse } from "query-string";
import Helmet from "react-helmet";
import { Button, Divider, Icon } from "semantic-ui-react";

import { characterData } from "../../characterData";
import Spinner from "../common/Spinner";
import CharacterList from "./CharacterList";

import "./index.css";

// RouteComponentPropsは history,location,matchを所有するinterface
// RouteComponentProps<{ code: string }>;

// ここの箇所はP134を確認したほうが良い
// src/App.tsx の該当するルーティングエントリのところに戻ってみて」
// => <Route path="/characters/:code" component={Characters} />
// 注目してほしいのは :code のところ。
// RouteComponentProps の型引数に与えてるのと同じ code だね。
// こうすることでコンポーネント内部でPropsからmatch.params.code のようにURLの:codeの部分 が文字列として抽出できる
// ちなみに型は string でしか定義できない
type CharacterProps = {} & RouteComponentProps<{ code: string }>;

const Characters: FC<CharacterProps> = ({ history, location, match }) => {
  const codes = Object.keys(characterData);
  const targetCode = match.params.code;
  // http://localhost:3000/characters/furejo?loading=true
  const isLoading = parse(location.search).loading === "true";

  return codes.includes(targetCode) ? (
    <>
      <Helmet>
        <title>Character List</title>
      </Helmet>
      <header>
        <h1>はねバド キャラ一覧</h1>
      </header>
      {isLoading ? (
        <Spinner />
      ) : (
        <CharacterList
          school={characterData[targetCode].school}
          characters={characterData[targetCode].players}
        />
      )}

      <Divider hidden />
      {/* buttonの onClickでhistory.push()させることでhooksの中でもリダイレクトさせることができる */}
      <Button
        basic
        color="grey"
        onClick={() => {
          history.push("/");
        }}
      >
        <Icon name="home" />
        ホームへ{" "}
      </Button>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default withRouter(Characters);
