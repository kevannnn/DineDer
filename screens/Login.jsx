import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik/dist';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';

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
import {View} from 'react-native';
import api from '../../api';

//Colors
const {brand, darkLight, tertiary} = Colors;

//import { InnerContainer } from '../components/styles';
const Login = ({navigation}) => {
        const [hidePassword, setHidePassword] = useState(true);
        
        const handleLogin = async (values) => {
            console.log(values)
            console.log('Email:', values.email);
            console.log('Password:', values.password);
            try {
                const response = await api.get(`/user/${values.email}/${values.password}`);
                // const userID = response.data.id;
                // console.log(response)
                // console.log(userID)
                navigation.navigate('MealPreference');
    
            } catch (error) {
                console.error(error);
                Alert.alert('Error', 'Failed to Log in');
            }
        };

    return (
        <StyledContainer>
            <StatusBar style= "dark" />
            <InnerContainer>
                <PageLogo resizeMode = "cover" source={require('../../assets/dinder.png')} />
                <PageTitle>Let's Dine!</PageTitle>
                <SubTitle> Account Login</SubTitle>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={handleLogin}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => <StyledFormArea>
                        <MyTextInput 
                            label="Email Address"
                            icon = "mail"
                            placeholder = "e12345657@u.nus.edu"
                            placeholderTextColor = {darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />

                        <MyTextInput 
                            label="Password"
                            icon = "lock"
                            placeholder = "* * * * * * *"
                            placeholderTextColor = {darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry = {hidePassword}
                            isPassword = {true}
                            hidePassword = {hidePassword}
                            setHidePassword = {setHidePassword}
                            
                        />
                        <StyledButton onPress = {handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        <Line />
                        <Extraview>
                            <ExtraText>Don't have an account already? </ExtraText>
                            <TextLink onPress = {() => navigation.navigate('Signup')}>
                                <TextLinkContent>Sign up</TextLinkContent>
                            </TextLink>
                        </Extraview>
                        </StyledFormArea>}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (<View>
        <LeftIcon>
            <Octicons name={icon} size = {30} color = {tertiary} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
            <RightIcon onPress = {() => setHidePassword(!hidePassword)}>
                <Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'} size = {30} color = {darkLight} />
            </RightIcon>
        )}
    </View>);
    
};

export default Login;