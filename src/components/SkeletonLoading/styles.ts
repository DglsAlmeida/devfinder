import styled, { keyframes } from 'styled-components'
import { SkeletonLoadingProps } from '.'

const skeletonAnimation = keyframes`
 0% { 
    background-color: hsl(200, 20%, 65%);
  }
 
  100% { 
    background-color: hsl(200, 20%, 95%); 
  }
`

export const Skeleton = styled.div<SkeletonLoadingProps>`
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : '10px'};
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : '6px'};
  display: flex;
  opacity: 0.7;
  margin-top: ${({ mt }) => mt};
  margin-left: ${({ ml }) => ml };
  margin-right: ${({ mr }) => mr };
  margin-bottom: ${({ mb }) => mb };
  margin: ${({ margin }) => margin };
`