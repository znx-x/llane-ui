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
  // ./Wrapper
  AppWrapper,
  PageWrapper
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
          <Link href="#">Link</Link>
          <LinkWrapper href="#">
            <div>
              <p>
                <b>Link Wrapper on Raw HTML Elements</b>
              </p>
            </div>
          </LinkWrapper>
        </PageWrapper>
      </AppWrapper>
    </>
  );
}

export default TestComponents;
