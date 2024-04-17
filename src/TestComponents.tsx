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
  InputOutlined
} from "./";

function TestComponents() {
  return (
    <>
      <AppWrapper>
        <PageWrapper>

          <HeadingExtraLarge>Heading Extra Large</HeadingExtraLarge>
          <HeadingLarge>Heading Large</HeadingLarge>
          <Heading>Heading</Heading>
          <HeadingSmall>Heading Small</HeadingSmall>
          <HeadingExtraSmall>Heading Extra Small</HeadingExtraSmall>
          <HeadingTiny>Heading Tiny</HeadingTiny>

          <Spacer />

          <TextExtraLarge>Text Extra Large</TextExtraLarge>
          <TextLarge>Text Large</TextLarge>
          <Text>Text</Text>
          <TextSmall>Text Small</TextSmall>
          <TextExtraSmall>Text Extra Small</TextExtraSmall>
          <TextDimmed>Text Dimmed</TextDimmed>

          <Spacer />

          <Link href="#">Link</Link>
          <LinkWrapper href="#">
            <div>
              <p>
                <b>Link Wrapper on Raw HTML Elements</b>
              </p>
            </div>
          </LinkWrapper>

          <Spacer />

          <Button>Button</Button>
          <Spacer />
          <ButtonAlt>Button Alternative</ButtonAlt>
          <Spacer />
          <ButtonOutlined>Button Outlined</ButtonOutlined>
          <Spacer />
          <ButtonOutlinedAlt>Button Outlined Alternative</ButtonOutlinedAlt>

          <Spacer />

          <Divider />

          <Spacer />

          <Input placeholder="Input component..." />
          <Spacer />
          <InputOutlined placeholder="Input outlined..." />
        </PageWrapper>
      </AppWrapper>
    </>
  );
}

export default TestComponents;
