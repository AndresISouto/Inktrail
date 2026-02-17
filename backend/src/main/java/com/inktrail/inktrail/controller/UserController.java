package com.inktrail.inktrail.controller;

import com.inktrail.inktrail.DTO.UserDTO;
import com.inktrail.inktrail.DTO.UserLogRequest;
import com.inktrail.inktrail.DTO.UserRegisterRequestDTO;
import com.inktrail.inktrail.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/register")
  public ResponseEntity<UserDTO> register(@RequestBody UserRegisterRequestDTO request) {
    UserDTO response = userService.register(request);
    return ResponseEntity.ok(response);
  }

  @PostMapping("/login")
  public ResponseEntity<UserDTO> login(@RequestBody UserLogRequest request) {
    return userService.login(request)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.status(401).build());
  }
}
