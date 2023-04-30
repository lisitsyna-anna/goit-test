import welcome from '../../images/welcome.gif';
import {
  Wrapper,
  Title,
  Text,
  ImgWrapper,
  Img,
  StyledLink,
} from './WelcomeComponent.styled';

const WelcomeComponent = () => {
  return (
    <Wrapper>
      <Title>Welcome to our app!</Title>
      <ImgWrapper>
        <Img src={welcome} alt="Welcome to our app" width={288} />
      </ImgWrapper>

      <Text>
        Here you can follow the tweets of your acquaintances and friends! Hurry
        up and follow <StyledLink to={'/tweets'}>the link</StyledLink> to
        subscribe to your friends!
      </Text>
    </Wrapper>
  );
};

export default WelcomeComponent;
