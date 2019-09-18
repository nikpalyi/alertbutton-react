import React from 'react';
import { Button } from './Button';
import { Example } from './Example';

export class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }

  render() {
    return (
      <div>
        <Button talk={this.talk} />
        <Example />
      </div>
    );
  }
}
