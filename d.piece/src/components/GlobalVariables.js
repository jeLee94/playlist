import { Dimensions } from 'react-native';

export const GlobalVar = {
    FigmaScreenHeight: 844,
    ScreenHeight: Dimensions.get('screen').height, // 05-20 : window -> screen으로 변경
    ScreenWidth: Dimensions.get('screen').width, // 05-20 : window -> screen으로 변경
    FlexHeight: 211,
    FlexWidth: 100, // 05-20 : 86 -> 100으로 변경
    ValueMultiplied: 1.1,
};

export function setHeight(ratio) {
    const height = GlobalVar.ScreenHeight / (GlobalVar.FlexHeight / ratio);
    // console.log('GlobalVar.ScreenHeight : ' + GlobalVar.ScreenHeight);
    // console.log("height : " + height)
    return height;
}

export function setWidth(ratio) {
    const width = GlobalVar.ScreenWidth / (GlobalVar.FlexWidth / ratio);
    // console.log('GlobalVar.ScreenWidth : ' + GlobalVar.ScreenWidth);
    // console.log("width : " + width)
    return width;
}
