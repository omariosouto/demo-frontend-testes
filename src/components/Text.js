import styled from 'styled-components';

const StyledText = styled.span`
    font-family: sans-serif;
`;

export function Text({ tag, children }) {
    return (
        <StyledText as={tag}>
            {children}
        </StyledText>
    )
} 