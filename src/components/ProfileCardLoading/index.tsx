import { useResponsive } from '../../hooks/useResponsive';
import * as S from '../ProfileCard/styles';
import { SkeletonLoading } from '../SkeletonLoading';

export const ProfileCardLoading = () => {
  const { isMobile } = useResponsive()

  return (
    <S.ProfileCardContainer>
    {!isMobile && <SkeletonLoading borderRadius='50%' width='80px' height='80px' mr="20px"/>}
   <S.ProfileInformations>
     <S.ProfileHeader>
       {isMobile && <SkeletonLoading borderRadius='50%' width='80px' height='80px'/>}
       <S.UserContent>
        <SkeletonLoading width='50%' />
        <SkeletonLoading width='50%' mt="10px"/>
        <SkeletonLoading width='50%' mt="10px"/>
       </S.UserContent>
     </S.ProfileHeader>
     <SkeletonLoading height='40px' mt="30px"/>

     <S.SocialMediasContainer>
       <S.SocialMedia>
        <SkeletonLoading width='90%' height='20px'/>
       </S.SocialMedia>

       <S.SocialMedia>
        <SkeletonLoading width='90%' height='20px'/>
       </S.SocialMedia>

       <S.SocialMedia>
        <SkeletonLoading width='90%' height='20px'/>
       </S.SocialMedia>

       <S.SocialMedia>
        <SkeletonLoading width='90%' height='20px'/>
       </S.SocialMedia>
     </S.SocialMediasContainer>
   </S.ProfileInformations>
 </S.ProfileCardContainer>
  )
}