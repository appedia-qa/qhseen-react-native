import React from 'react';

import {Touchable} from '../touchable';
import { COLOR,} from '../../constants';
import styles from './button.style';

class Button extends React.Component {
  render() {
    return (
      <Touchable
        onPress={this.props.onPress}
        style={[
          styles.buttonContainer,
          this.props.buttonStyles? this.props.buttonStyles : null,
          this.props.disabled? { opacity: 0.8 } : null
        ]}
        disabled={this.props.disabled}
      >
        {
          this.props.icon?
          // <Icon name="arrowright" color={COLOR.WHITE} size={26} />
          this.props.icon
          : null
        }
      </Touchable>
    );
  }
}

export { Button };