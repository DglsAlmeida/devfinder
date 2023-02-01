import * as S from './styles';

export interface SkeletonLoadingProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  mt?: string;
  mr?: string;
  ml?: string;
  mb?: string;
  margin?: string
}

export const SkeletonLoading = ({ 
  width, 
  height, 
  borderRadius, 
  mt, 
  ml, 
  mr, 
  mb, 
  margin 
}: SkeletonLoadingProps) => {
  return (
    <S.Skeleton 
      width={width} 
      height={height} 
      borderRadius={borderRadius}
      mt={mt}
      mr={mr}
      ml={ml}
      mb={mb}
      margin={margin}
    />
  )
}
