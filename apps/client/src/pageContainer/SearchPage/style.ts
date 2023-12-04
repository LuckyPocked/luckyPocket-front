import styled from '@emotion/styled';

export const Search = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: relative;
  width: 38rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.ivory['010']};
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  top: 7rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    right: 1rem;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 33rem;
  height: 3rem;
  border-radius: 0.625rem;
  background: none;
  outline: none;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray['040']};
  padding-left: 1rem;
  padding-right: 2.5rem;

  &:focus {
    border: 0.0625rem solid ${({ theme }) => theme.color.gray['090']};

    & ~ svg path {
      fill: ${({ theme }) => theme.color.gray['090']};
    }
  }
`;

export const UserListWrapper = styled.div`
  width: 33rem;
  height: 75vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BackgroundFilter = styled.div`
  width: 100%;
  height: 5.625rem;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0, #f2ede5 3.22%, rgba(242, 237, 229, 0) 94.49%);
`;
