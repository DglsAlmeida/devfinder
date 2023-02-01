import styled from 'styled-components';
import { theme } from '../../styles/defaultTheme';

export const ProfileCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.body};
  border-radius: 0.937rem;
  margin-top: 1.5rem;

  @media screen and (max-width: ${theme.screens.md}){
   padding: 2.5rem;
  }

  @media screen and (max-width: ${theme.screens.sm}){
    padding: 2rem 1.5rem 3rem;
  }
`

export const ProfilePhoto = styled.img`
  border-radius: 50%;
  height: 7.312rem;
  width: 7.312rem;
  margin-right: 2.312rem;

  @media screen and (max-width: ${theme.screens.sm}){
    height: 4.375rem;
    width: 4.375rem;
  }

  @media screen and (max-width: ${theme.screens.sm}){
    margin-right: 1.1875rem;
  }
`

export const ProfileInformations = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`

export const ProfileHeader = styled.header`
  display: flex;
`

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

export const UserName = styled.span`
  font-weight: 700;
  font-size: 1.625rem;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: ${theme.screens.sm}){
    font-size: 1rem;
  }
`

export const UserShortName = styled.span`
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: ${theme.screens.sm}){
    font-size: 0.75rem;
  }
`

export const UserBio = styled.span`
  margin-top: 1.25rem;
  color: ${({ theme }) => theme.colors.description};
  font-size: 0.9375rem;

  @media screen and (max-width: ${theme.screens.sm}){
    font-size: 0.75rem;
  }
`

export const AccountCreationDate = styled.span`
  color: ${({ theme }) => theme.colors.grayLight};
  position: absolute;
  right: 0;
  top: 8px;

  @media screen and (max-width: ${theme.screens.md}){
    position: initial;
    right: 0;
    top: 0;
    margin-top: 0.5rem;
    font-size: 0.75rem;
  }
`

export const ProfileNumbers = styled.div`
  display: flex;
  gap: 0px 6.1875rem;
  text-align: center;
  padding: 0.937rem 0 1.0625rem 2rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 2rem;

  @media screen and (max-width: ${theme.screens.sm}){
    font-size: 0.75rem;
    gap: 0px 3.125rem;
    padding: 0.875rem 1.1875rem;
  }
`

export const ProfileNumbersInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
`

export const InfoTitle = styled.span`
  font-size: 0.812rem;
  
  @media screen and (max-width: ${theme.screens.sm}){
    font-size: 0.6875rem;
  }
`

export const Quantity = styled.span`
  font-size: 1.375rem;
  font-weight: 700;

  @media screen and (max-width: ${theme.screens.sm}){
    font-size: 1rem;
  }
`

export const SocialMediasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 0;
  margin-top: 2.312rem;

  @media screen and (max-width: ${theme.screens.sm}){
    grid-template-columns: 1fr;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.description};
  }
`

export const Description = styled.div`
  display: flex;
  margin-left: 0.75rem;
  color: ${({ theme }) => theme.colors.description};
  font-size: 0.9375rem;
  
  @media screen and (max-width: ${theme.screens.sm}){
    font-size: 0.75rem;
  }
`