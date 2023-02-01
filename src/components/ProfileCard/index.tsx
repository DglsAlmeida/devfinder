import { Buildings, Link, MapPin, TwitterLogo } from 'phosphor-react';
import { useResponsive } from '../../hooks/useResponsive';
import { UserGithubProfile } from '../../types/home/types';
import * as S from './styles';

export const ProfileCard = ({ 
  avatar_url, 
  followers, 
  following, 
  html_url, 
  location, 
  login,
  name, 
  reposQuantity, 
  twitter_username,
  created_at
}: UserGithubProfile) => {
  const { isMobile } = useResponsive()

  const date = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(created_at))

  const day = date.split(',')[0].split(' ')[1]
  const month = date.split(',')[0].split(' ')[0]
  const year = date.split(',')[1]

  return (
    <S.ProfileCardContainer>
       {!isMobile && <S.ProfilePhoto src={avatar_url} alt="avatar"/>}
      <S.ProfileInformations>
        <S.ProfileHeader>
          {isMobile && <S.ProfilePhoto src={avatar_url} alt="avatar"/>}
          <S.UserContent>
            <S.UserName>{name}</S.UserName>
            <S.UserShortName>@{login}</S.UserShortName>
            <S.AccountCreationDate>Joined {day} {month} {year}</S.AccountCreationDate>
          </S.UserContent>
        </S.ProfileHeader>
        <S.UserBio>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</S.UserBio>

        <S.ProfileNumbers>
          <S.ProfileNumbersInfoContent>
            <S.InfoTitle>Repos</S.InfoTitle>
            <S.Quantity>{reposQuantity}</S.Quantity>
          </S.ProfileNumbersInfoContent>

          <S.ProfileNumbersInfoContent>
            <S.InfoTitle>Followers</S.InfoTitle>
            <S.Quantity>{followers}</S.Quantity>
          </S.ProfileNumbersInfoContent>

          <S.ProfileNumbersInfoContent>
            <S.InfoTitle>Following</S.InfoTitle>
            <S.Quantity>{following}</S.Quantity>
          </S.ProfileNumbersInfoContent>
        </S.ProfileNumbers>

        <S.SocialMediasContainer>
          <S.SocialMedia>
            <MapPin size={20} />
            <S.Description>{location ?? 'Not Available'}</S.Description>
          </S.SocialMedia>

          <S.SocialMedia>
            <TwitterLogo size={20} />
            <S.Description>{twitter_username ?? 'Not Available'}</S.Description>
          </S.SocialMedia>

          <S.SocialMedia>
            <Link size={20} />
            <S.Description>{html_url}</S.Description>
          </S.SocialMedia>

          <S.SocialMedia>
            <Buildings size={20} />
            <S.Description>@github</S.Description>
          </S.SocialMedia>
        </S.SocialMediasContainer>
      </S.ProfileInformations>
    </S.ProfileCardContainer>
  )
}