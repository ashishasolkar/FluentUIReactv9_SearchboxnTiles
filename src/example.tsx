import * as React from 'react';

import {
  makeStyles,
  Body1,
  Caption1,
  Button,
} from '@fluentui/react-components';
import { ArrowReplyRegular, ShareRegular } from '@fluentui/react-icons';
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from '@fluentui/react-components';

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    'https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/';

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    width: '400px',
    float: 'left',
    margin: '10px',
  },
});
interface cardProps {
  title: string;
  image: string;
}
export const Default = (props: cardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardPreview>
        <img
          // src={resolveAsset('doc_template.png')}
          src={props.image}
          style={{height:"270px"}}
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>
      <CardHeader
        header={
          <Body1>
            <b>{props.title}</b>
          </Body1>
        }
      />
    </Card>
  );
};
