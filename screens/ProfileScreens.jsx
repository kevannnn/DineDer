import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, ScrollView, Image} from 'react-native';
import {ActionSheet} from "native-base";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraText,
    Extraview,
    TextLink,
    TextLinkContent
} from '../components/styles'

//Colors
const {brand, darkLight, tertiary} = Colors;
const width = Dimensions.get('window').width;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: []
        }
    }

    onClickAddImage = () => {
        const BUTTONS = ['Take Photo', 'Choose Photo Library', 'Cancel'];
        ActionSheet.show(
            {options: BUTTONS, 
                cancelButtonIndex: 2, 
                title: 'Select a Photo'},
                buttonIndex => {
                    switch (buttonIndex) {
                        case 0:
                            break;
                        case 1:
                            break;
                        default:
                            break;
                    }
                }
            )
        
    };

    renderItem = ({item, index}) => {
        return (
            <View>
                <Image source = {item.url} style = {styles.itemImage} />
            </View>
        )
    };

    render() {
        let {content, btnPressStyle} = styles;
        let {fileList} = this.state;
        return (
            <View style = {content}>
                <Text>Add Images</Text>
                    <FlatList
                        data = {fileList}
                        renderItem = {this.renderItem}
                        keyExtractor = {(item, index) => index.toString()}
                        extraData = {this.state}
                    />

                    <StyledButton onPress = {this.onClickAddImage}>
                        <ButtonText>Press Add Image</ButtonText>
                    </StyledButton>
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50

    },
    btnPressStyle: {
        backgroundColor: '#0080ff',
        height: 50,
        width: width - 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemImage: {
        backgroundColor: '#2F455C',
        height: 150,
        width: width - 60,
        borderRadius: 8,
        resizeMode: 'contain'
    }
});
