import {StackNavigationProp} from '@react-navigation/stack';

export interface iInitialProps {
  navigation: StackNavigationProp<any, any>;
  route: any;
}

export interface iLoginProps {
  navigation: StackNavigationProp<any, any>;
}

export interface iSignUpProps {
  navigation: StackNavigationProp<any, any>;
}
