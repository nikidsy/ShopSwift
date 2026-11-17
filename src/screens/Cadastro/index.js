import { Image, View } from "react-native";
import logo from "../../assets/logoShopSwift.png";
import {
  Container,
  ContentCadastro,
  CreateAccountButton,
  FormContainer,
  Input,
  InputsContainer,
  TextButton,
  TextHighlight,
  TextLabel,
  TextLogin,
  TextNavigation,
  TextTitle,
} from "./style";

export const Cadastro = ({ navigation }) => {
  return (
      <Container>
        <Image source={logo} />

        <ContentCadastro>
          <TextTitle>
            Crie uma conta <TextHighlight>e se surpreenda</TextHighlight>
          </TextTitle>

          <FormContainer>
            <InputsContainer>
              <View>
                <TextLabel>E-mail:</TextLabel>
                <Input keyboardType="email-address" />
              </View>

              <View>
                <TextLabel>Senha:</TextLabel>
                <Input secureTextEntry={true} />
              </View>
            </InputsContainer>

            <CreateAccountButton onPress={() => navigation.replace("home")}>
              <TextButton>Criar conta</TextButton>
            </CreateAccountButton>
          </FormContainer>

          <TextLogin>
            Já tem conta?{" "}
            <TextNavigation onPress={() => navigation.navigate("login")}>
              Fazer login
            </TextNavigation>
          </TextLogin>
        </ContentCadastro>
      </Container>
  );
};
