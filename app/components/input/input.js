import React, { Component } from 'react';
import {
  View,
  TextInput,
  Image,
} from 'react-native';

import { Touchable } from '../';
import { COLOR } from '../../constants';
import styles from './input.styles';

class Input extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyles]}>
        {this.props.leftIcon?
        <Image source={this.props.leftIcon} style={this.props.leftIconStyles} />
        :
        null
        }
        <TextInput
          ref={ref => {
            if (this.props.addRef) {
              this.props.addRef(ref);
            } else {
              return this.input = ref;
            }
          }}
          // ref={ref => this.input = ref}
          underlineColorAndroi={'transparent'}
          placeholderTextColor={COLOR.BLACK}
          selectionColor={COLOR.BLACK}
          keyboardType = {this.props.keyboardType}
          onChangeText={this.props.onChangeText}
          {...this.props}
          style={[styles.input, this.props.style]}
        />
        {this.props.rightIcon && !this.props.onRightIconsPress?
        <Image source={this.props.rightIcon} style={[{ alignSelf: 'center' }, this.props.rightIconStyle]} />
        :
        this.props.rightIcon && this.props.onRightIconsPress?
        <Touchable
          onPress={() => this.props.onRightIconsPress()}
        >
          <Image source={this.props.rightIcon} style={[{ alignSelf: 'center' }, this.props.rightIconStyle]} />
        </Touchable>
        : null
        }
        {this.props.rightContent? this.props.rightContent.content : null}
      </View>
    );
  }
}

export {Input};
