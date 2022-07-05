package com.codeclan.example.chooseit.controllers;

import com.codeclan.example.chooseit.models.ProfilePicture;
import com.codeclan.example.chooseit.models.Profile;
import com.codeclan.example.chooseit.repositories.ProfilePictureRepository;
import com.codeclan.example.chooseit.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class ProfilePictureController {
    @Autowired
    ProfilePictureRepository profilePictureRepository;

    @Autowired
    UserProfileRepository userProfileRepository;




//  ******************      GET ALL PICTURES       ******************

    @GetMapping(value = "/profilepictures")
    public ResponseEntity<List<ProfilePicture>> getProfilePictures(){
        return new ResponseEntity<>(profilePictureRepository.findAll(), HttpStatus.OK);
    }


//  ******************      POST PICTURE        ******************

    @PostMapping(value = "/userprofile/{id}/profilepicture/add")
    public String addProfilePicture(@PathVariable Long id,
                                         @RequestParam("profilepicture") MultipartFile pic, Model model)
            throws IOException {
        ProfilePicture picToSave = new ProfilePicture();
        picToSave.setPicture(pic.getBytes());
        Profile profile = userProfileRepository.getById(id);
        profile.setProfilepicture(picToSave);

        profilePictureRepository.save(picToSave);
        return userProfileRepository.getById(id).getName();
    }

    @PutMapping(value = "/userprofile/{id}/profilepicture/add")
    public String updateProfilePicture(@PathVariable Long id,
                                    @RequestParam("profilepicture") MultipartFile pic, Model model)
            throws IOException {
        ProfilePicture picToSave = new ProfilePicture();
        picToSave.setPicture(pic.getBytes());
        picToSave.setId((id));
        Optional<Profile> userProfile = userProfileRepository.findById(id);
        userProfile.get().setProfilepicture(picToSave);
        profilePictureRepository.save(picToSave);
//        userProfileRepository.getById(id).setProfilepicture(picToSave);

        return userProfileRepository.getById(id).getName();
    }


//  ******************      GET PICTURE by ID       ******************

    @GetMapping(value = "/profilepictures/{id}")
    public ResponseEntity<byte[]> getProfilePictureById(@PathVariable Long id) {
        Optional<ProfilePicture> profilePicture = profilePictureRepository.findById(id);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        headers.setContentDispositionFormData("output.jpg","output.jpg");
        headers.setCacheControl("must-revalidate, post-check=0,pre-check=0");
        ResponseEntity<byte[]> response = new ResponseEntity<>(profilePicture.get().getPicture(),headers, HttpStatus.OK);
        return response;
    }

    @GetMapping(value = "/userprofile/{id}/picture")
    public ResponseEntity<byte[]> getProfilePictureByProfileId(@PathVariable Long id) {
        Optional<Profile> profile = userProfileRepository.findById(id);
        Optional<ProfilePicture> profilePicture = profilePictureRepository.findById(profile.get().getId());

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        headers.setContentDispositionFormData("output.jpg","output.jpg");
        headers.setCacheControl("must-revalidate, post-check=0,pre-check=0");
        ResponseEntity<byte[]> response = new ResponseEntity<>(profilePicture.get().getPicture(),headers, HttpStatus.OK);
        return response;
    }
}
