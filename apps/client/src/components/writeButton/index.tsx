import { ArrowIcon } from 'client/assets';
import * as S from './style';
import Link from 'next/link';

interface PropsType {
  disabled: boolean;
}

const WriteButton = ({ disabled }: PropsType) => {
  const getArrowIcon = (stroke: string) => <ArrowIcon stroke={stroke} />;

  return (
    <S.ButtonContainer>
      <Link href='/'>
        <S.BeforeButton>
          {getArrowIcon('#6F6B63')}
          이전
        </S.BeforeButton>
      </Link>
      <S.NextButton disabled={disabled}>
        다음
        {disabled ? getArrowIcon('#6F6B63') : getArrowIcon('#F2EDE5')}
      </S.NextButton>
    </S.ButtonContainer>
  );
};

export default WriteButton;
