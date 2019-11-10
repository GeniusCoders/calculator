import React, {useState} from 'react';
import {Switch, View, StyleSheet, StatusBar, Text} from 'react-native';
import {colors} from '../style/colors';
import CalButton from './CalButton';

const CalView = () => {
  const [switchValue, setSwitchValue] = useState(false); //hooks see doc
  const [display, setDisplay] = useState('0');

  const onSwitch = value => {
    // function to switch light to dark
    setSwitchValue(value);
  };

  //change colors according switch
  const topViewBackground = switchValue
    ? colors.secondaryBackground
    : colors.background;
  const textColor = switchValue ? colors.primaryColor : colors.textColor;
  const bottomViewColor = switchValue
    ? colors.secondaryBottomViewColor
    : colors.bottomViewColor;
  const digitColor = switchValue ? colors.secondaryTextColor : colors.textColor;
  const splCharColor = switchValue ? colors.primaryColor : colors.textColor;
  const splCharBackColor = switchValue
    ? colors.secondaryBackground
    : colors.background;

  //set digit on screen
  const onDigit = text => {
    if (display === '0' || display === 'Invalid Expression') {
      setDisplay(text);
    } else {
      setDisplay(display + text);
    }
  };

  //when we click on equal button it will calculate
  const onCalculate = () => {
    let lastChar = display.charAt(display.length - 1);
    if (
      lastChar === '0' ||
      lastChar === '1' ||
      lastChar === '2' ||
      lastChar === '3' ||
      lastChar === '4' ||
      lastChar === '5' ||
      lastChar === '6' ||
      lastChar === '7' ||
      lastChar === '8' ||
      lastChar === '9'
    ) {
      const data = eval(display); // inbuild  javascript function to calculate
      setDisplay(data);
    } else {
      setDisplay('Invalid Expression');
    }
  };

  // when click on clear button
  const onClear = () => {
    setDisplay('0');
  };

  return (
    <View style={{...styles.container, backgroundColor: topViewBackground}}>
      <StatusBar
        backgroundColor={topViewBackground}
        barStyle={switchValue ? 'light-content' : 'dark-content'} // change status bar color
      />
      <View style={{...styles.topViewContainer}}>
        <Switch
          thumbColor={
            switchValue ? colors.primaryColor : colors.bottomViewColor
          }
          value={switchValue}
          onValueChange={onSwitch} // switch to light to dark
        />
        <Text style={{...styles.resultText, color: textColor}}>{display}</Text>
      </View>
      <View
        style={{
          ...styles.bottomViewContainer,
          backgroundColor: bottomViewColor
        }}>
        <View style={{...styles.buttonView}}>
          <CalButton
            onPress={() => onClear()}
            splCharBackColor={splCharBackColor}
            textColor={splCharColor}
            isRadius={true}
            text="C"
          />
          <CalButton
            splCharBackColor={splCharBackColor}
            textColor={splCharColor}
            isRadius={true}
            text="±"
          />
          <CalButton
            onPress={() => onDigit('%')}
            splCharBackColor={splCharBackColor}
            textColor={splCharColor}
            isRadius={true}
            text="%"
          />
          <CalButton
            onPress={() => onDigit('/')}
            splCharBackColor={splCharBackColor}
            textColor={splCharColor}
            isRadius={true}
            text="/"
          />
        </View>
        <View style={{...styles.buttonView, backgroundColor: bottomViewColor}}>
          <CalButton
            onPress={() => onDigit('7')}
            textColor={digitColor}
            text="7"
          />
          <CalButton
            onPress={() => onDigit('8')}
            textColor={digitColor}
            text="8"
          />
          <CalButton
            onPress={() => onDigit('9')}
            textColor={digitColor}
            text="9"
          />
          <CalButton
            onPress={() => onDigit('*')}
            splCharBackColor={splCharBackColor}
            textColor={splCharColor}
            isRadius={true}
            text="x"
          />
        </View>
        <View style={{...styles.buttonView, backgroundColor: bottomViewColor}}>
          <CalButton
            onPress={() => onDigit('4')}
            textColor={digitColor}
            text="4"
          />
          <CalButton
            onPress={() => onDigit('5')}
            textColor={digitColor}
            text="5"
          />
          <CalButton
            onPress={() => onDigit('6')}
            textColor={digitColor}
            text="6"
          />
          <CalButton
            onPress={() => onDigit('-')}
            splCharBackColor={splCharBackColor}
            textColor={splCharColor}
            isRadius={true}
            text="-"
          />
        </View>
        <View style={{...styles.buttonView, backgroundColor: bottomViewColor}}>
          <CalButton
            onPress={() => onDigit('1')}
            textColor={digitColor}
            text="1"
          />
          <CalButton
            onPress={() => onDigit('2')}
            textColor={digitColor}
            text="2"
          />
          <CalButton
            onPress={() => onDigit('3')}
            textColor={digitColor}
            text="3"
          />
          <CalButton
            onPress={() => onDigit('+')}
            splCharBackColor={splCharBackColor}
            textColor={splCharColor}
            isRadius={true}
            text="+"
          />
        </View>
        <View style={{...styles.buttonView, backgroundColor: bottomViewColor}}>
          <CalButton
            onPress={() => onDigit('0')}
            textColor={digitColor}
            text="0"
          />
          <CalButton textColor={digitColor} text="." />
          <CalButton text="" />
          <CalButton
            onPress={() => onCalculate()}
            isRadius={true}
            isEqualButton={true}
            text="="
            textColor={
              switchValue ? colors.secondaryBackground : colors.background
            }
            background={colors.primaryColor}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topViewContainer: {
    alignItems: 'flex-end',
    padding: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  resultText: {
    fontSize: 40
  },
  bottomViewContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  }
});

export default CalView;
