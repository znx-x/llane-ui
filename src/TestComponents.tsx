/*
 * Tests all the available components by rendering them on a React.js test page,
 * sequentially. You can run the test page using 'npm run start' in your console.
 */

import {
  Link,
  LinkWrapper,
  HeadingExtraLarge,
  HeadingLarge,
  Heading,
  HeadingSmall,
  HeadingExtraSmall,
  HeadingTiny,
  TextExtraLarge,
  TextLarge,
  Text,
  TextSmall,
  TextExtraSmall,
  TextDimmed,
  Button,
  AppWrapper,
  PageWrapper,
  ButtonAlt,
  Spacer,
  ButtonOutlined,
  ButtonOutlinedAlt,
  Divider,
  Input,
  InputOutlined,
  Box,
  BoxOutlined,
  ButtonLink,
  ButtonLinkAlt,
  ButtonLinkOutlined,
  ButtonLinkOutlinedAlt,
  FlexContainer,
  GridContainer,
  Span,
  TextArea,
  TextAreaOutlined,
  Header,
  HeaderSection,
  HeaderLink,
  Image,
  LlaneUi,
  ThemeToggle,
  ToggleButton,
  HeaderMobile,
  HeaderDesktop
} from "./";
import { Container } from "./Container";
import LlaneLogo from "./TestingAssets/logo.png";

function TestComponents() {
  return (
    <LlaneUi initialTheme="dark">
      <AppWrapper>
        <Header sticky={true} glassEffect={true}>
          <HeaderDesktop>
            <HeaderSection alignHorizontal="left">
              <LinkWrapper href="#">
                <Image src={LlaneLogo} width="48px" />
              </LinkWrapper>
              <Heading margin="0 1rem">
                <b>Llane UI</b>
              </Heading>
              <HeaderLink href="#">Link 1</HeaderLink>
              <HeaderLink href="#">Link 2</HeaderLink>
            </HeaderSection>
            <HeaderSection alignHorizontal="right">
              <ThemeToggle />
              <Input placeholder="Search..." width="240px" margin="0 1rem" />
              <ButtonLink>Action Button</ButtonLink>
            </HeaderSection>
          </HeaderDesktop>
          <HeaderMobile>
            <HeaderSection>
              <LinkWrapper href="#">
                <Image src={LlaneLogo} width="48px" />
              </LinkWrapper>
            </HeaderSection>
            <HeaderSection>
              <ThemeToggle />
              <HeaderLink href="#">Link 1</HeaderLink>
              <HeaderLink href="#">Link 2</HeaderLink>
            </HeaderSection>
          </HeaderMobile>
        </Header>
        <PageWrapper>
          <Box>
            <HeadingExtraLarge>Heading Extra Large</HeadingExtraLarge>
            <HeadingLarge>Heading Large</HeadingLarge>
            <Heading>Heading</Heading>
            <HeadingSmall>Heading Small</HeadingSmall>
            <HeadingExtraSmall>Heading Extra Small</HeadingExtraSmall>
            <HeadingTiny>Heading Tiny</HeadingTiny>
          </Box>
          <Spacer />
          <Box>
            <TextExtraLarge>Text Extra Large</TextExtraLarge>
            <TextLarge>Text Large</TextLarge>
            <Text>Text</Text>
            <TextSmall>Text Small</TextSmall>
            <TextExtraSmall>Text Extra Small</TextExtraSmall>
            <TextDimmed>Text Dimmed</TextDimmed>
          </Box>
          <Spacer />
          <BoxOutlined>
            <HeadingLarge>Link Components</HeadingLarge>
            <Link href="#">Link Example</Link>
            <LinkWrapper href="#">
              <Box>
                <Text>
                  Here a LinkWrapper component wraps around the BoxOutlined to
                  make the entire component clickable.
                </Text>
              </Box>
            </LinkWrapper>
          </BoxOutlined>
          <Spacer />
          <Box>
            <HeadingLarge>Buttons</HeadingLarge>
            <Button width="240px">Button</Button>
            <ButtonAlt width="240px">Button Alternative</ButtonAlt>
            <ButtonOutlined width="240px">Button Outlined</ButtonOutlined>
            <ButtonOutlinedAlt width="240px">
              Button Outlined Alternative
            </ButtonOutlinedAlt>
          </Box>
          <Spacer />
          <Box>
            <HeadingLarge>Button Links</HeadingLarge>
            <TextSmall>
              * The difference between Buttons and Button Links is that the
              second is rendered as a link, therefore it accepts direct link
              props, such as <b>href</b> or <b>target</b>.
            </TextSmall>
            <ButtonLink width="240px">Button Link</ButtonLink>
            <ButtonLinkAlt width="240px">Button Link Alternative</ButtonLinkAlt>
            <ButtonLinkOutlined width="240px">
              Button Link Outlined
            </ButtonLinkOutlined>
            <ButtonLinkOutlinedAlt width="240px">
              Button Link Outlined Alternative
            </ButtonLinkOutlinedAlt>
          </Box>
          <Spacer />
          <Box>
            <HeadingLarge>Divider Component</HeadingLarge>
            <Divider />
          </Box>
          <Spacer />
          <BoxOutlined>
            <HeadingLarge>Input Components</HeadingLarge>
            <Input placeholder="Input component..." />
            <InputOutlined placeholder="Input outlined..." />
          </BoxOutlined>
          <Spacer />
          <BoxOutlined>
            <HeadingLarge>Box Components</HeadingLarge>
            <Box>
              <Text>Text Nested in Box Element</Text>
            </Box>
            <Box alignHorizontal="center">
              <HeadingLarge>Heading Nested in Box Component</HeadingLarge>
              <Text>Text Nested in Box Component</Text>
              <ButtonLink>Example Button</ButtonLink>
            </Box>
          </BoxOutlined>
          <Spacer />
          <Box>
            <HeadingLarge>Containers</HeadingLarge>
            <Container>
              <Text>
                Example of a text nested in a simple Container component.
              </Text>
            </Container>
          </Box>
          <Spacer />
          <BoxOutlined>
            <HeadingLarge>Flex Containers (Row Direction)</HeadingLarge>
            <TextSmall>* Automatically adjusts for mobile screens.</TextSmall>
            <FlexContainer breakDirection="row" gap="1rem">
              <Box width="100%">Example of Box Inside Flex Container (ROW)</Box>
              <Box width="100%">Example of Box Inside Flex Container (ROW)</Box>
              <Box width="100%">Example of Box Inside Flex Container (ROW)</Box>
            </FlexContainer>
          </BoxOutlined>
          <Spacer />
          <BoxOutlined>
            <HeadingLarge>Flex Containers (Column Direction)</HeadingLarge>
            <TextSmall>* Automatically adjusts for mobile screens.</TextSmall>
            <FlexContainer breakDirection="column" gap="1rem">
              <Box>Example of Box Inside Flex Container (COLUMN)</Box>
              <Box>Example of Box Inside Flex Container (COLUMN)</Box>
              <Box>Example of Box Inside Flex Container (COLUMN)</Box>
            </FlexContainer>
          </BoxOutlined>
          <Spacer />
          <BoxOutlined>
            <HeadingLarge>Grid Containers</HeadingLarge>
            <GridContainer gap="1rem">
              <Box>Example of Box Inside Grid Container</Box>
              <Box>Example of Box Inside Grid Container</Box>
              <Box>Example of Box Inside Grid Container</Box>
            </GridContainer>
          </BoxOutlined>
          <Spacer />
          <Box>
            <HeadingLarge>Span Components</HeadingLarge>
            <Text>
              Example of{" "}
              <Span>
                <b>SPAN text</b>
              </Span>{" "}
              inside a Box component
            </Text>
          </Box>
          <Spacer />
          <BoxOutlined>
            <HeadingLarge>Text Area</HeadingLarge>
            <TextArea placeholder="This is a text area component..." />
            <TextAreaOutlined placeholder="This is a text area component..." />
          </BoxOutlined>
          <Spacer />
          <Box>
            <HeadingLarge>Toggle Button</HeadingLarge>
            <ToggleButton toggled={false} />
          </Box>
        </PageWrapper>
      </AppWrapper>
    </LlaneUi>
  );
}

export default TestComponents;
