package com.inktrail.inktrail.mappers;

import org.springframework.stereotype.Component;

import com.inktrail.inktrail.DTO.UserDTO;
import com.inktrail.inktrail.DTO.UserRegisterRequestDTO;
import com.inktrail.inktrail.model.User;

@Component
public class UserDtoMapper {

  public UserDTO toDTO(User user) {
    UserDTO dto = new UserDTO(user.getId(), user.getName(), user.getEmail());
    return dto;
  }

  public User toEntity(UserRegisterRequestDTO dto) {
    User user = User.builder()
        .name(dto.name())
        .email(dto.email())
        .password(dto.password())
        .build();

    return user;
  }

}
