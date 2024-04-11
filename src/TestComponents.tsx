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
    PageWrapper,
} from './'

function TestComponents() {
    return(
        <>
        <AppWrapper>
            <PageWrapper>
            </PageWrapper>
        </AppWrapper>
        </>
    )
}

export default TestComponents