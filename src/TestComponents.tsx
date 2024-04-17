/*
 * Tests all the available components by rendering them on a React.js test page,
 * sequentially. You can run the test page using 'npm run start' in your console.
 */
import {
  // ./Link
  Link,
  LinkWrapper,
  // ./Typography
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
  // Button
  Button,
  // ./Wrapper
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
  ButtonLinkOutlinedAlt
} from "./";

function TestComponents() {
  return (
    <>
      <AppWrapper>
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
          <Box>
            <HeadingLarge>Link Components</HeadingLarge>
            <Link href="#">Example of a link.</Link>
            <LinkWrapper href="#">
              <BoxOutlined>
                <Text>
                  <b>
                    Here a LinkWrapper component wraps around the BoxOutlined to
                    make the entire component clickable.
                  </b>
                </Text>
              </BoxOutlined>
            </LinkWrapper>
          </Box>
          <Spacer />
          <Box>
            <HeadingLarge>Buttons</HeadingLarge>
            <Button width="300px">Button</Button>
            <ButtonAlt width="300px">Button Alternative</ButtonAlt>
            <ButtonOutlined width="300px">Button Outlined</ButtonOutlined>
            <ButtonOutlinedAlt width="300px">
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
            <ButtonLink width="300px">Button Link</ButtonLink>
            <ButtonLinkAlt width="300px">Button Link Alternative</ButtonLinkAlt>
            <ButtonLinkOutlined width="300px">
              Button Link Outlined
            </ButtonLinkOutlined>
            <ButtonLinkOutlinedAlt width="300px">
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
            <Input width="300px" placeholder="Input component..." />
            <InputOutlined width="300px" placeholder="Input outlined..." />
          </BoxOutlined>
          <Spacer />
          <BoxOutlined>
            <HeadingLarge>Box Components</HeadingLarge>
            <Box>
              <Text>Text Nested in Box Element</Text>
            </Box>
            <BoxOutlined alignHorizontal="center">
              <HeadingLarge>Heading Nested in Box Component</HeadingLarge>
              <Text>Text Nested in Box Component</Text>
              <ButtonLink width="300px">Example Button</ButtonLink>
            </BoxOutlined>
          </BoxOutlined>
        </PageWrapper>
      </AppWrapper>
    </>
  );
}

export default TestComponents;
