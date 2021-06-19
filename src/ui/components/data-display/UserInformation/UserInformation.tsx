import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInformation.style";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  //extraindo do objeto props
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      {/* Caso não tenha foto, mostra a primeira letra no nome */}
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription> {description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
