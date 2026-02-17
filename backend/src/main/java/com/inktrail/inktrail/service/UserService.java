package com.inktrail.inktrail.service;

import com.inktrail.inktrail.DTO.UserDTO;
import com.inktrail.inktrail.DTO.UserLogRequest;
import com.inktrail.inktrail.DTO.UserRegisterRequestDTO;
import com.inktrail.inktrail.mappers.UserDtoMapper;
import com.inktrail.inktrail.model.User;
import com.inktrail.inktrail.repository.UserRepository;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

  private final UserRepository userRepository;
  private final UserDtoMapper userMapper;

  public UserService(UserRepository userRepository, UserDtoMapper userMapper) {
    this.userRepository = userRepository;
    this.userMapper = userMapper;
  }

  public UserDTO register(UserRegisterRequestDTO request) {
    if (userRepository.findByEmail(request.email()).isPresent()) {
      throw new RuntimeException("Email already registered");
    }
    User user = User.builder()
        .email(request.email())
        .password(request.password())
        .name(request.name())
        .build();
    User saved = userRepository.save(user);
    UserDTO dto = userMapper.toDTO(saved);
    return dto;
  }

  public Optional<UserDTO> login(UserLogRequest request) {
    return userRepository.findByEmail(request.email())
        .filter(user -> user.getPassword().equals(request.password()))
        .map(user -> new UserDTO(user.getId(), user.getName(), user.getEmail()));
  }
}
