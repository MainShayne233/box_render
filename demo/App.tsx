/* eslint import/no-extraneous-dependencies: "off" */
import * as React from 'react';
import { hot } from 'react-hot-loader';
import NeatComponent from '../src/NeatComponent';

const INITIAL_STATE = {
  length: 6,
  width: 6,
  depth: 4,
};

type Props = {};

type State = {
  length: number;
  width: number;
  depth: number;
  [key: string]: number;
};

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = INITIAL_STATE;
  }

  render() {
    return (
      <div>
        <div>
          {['length', 'width', 'depth'].map((dimension) => (
            <div key={dimension}>
              <label>{dimension}</label>
              <input
                type="range"
                min={1}
                max={10}
                value={`${this.state[dimension]}`}
                onChange={({ target }) =>
                  this.setState({
                    ...this.state,
                    [dimension]: parseInt(target.value),
                  })
                }
              />
              <span>{this.state[dimension]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
