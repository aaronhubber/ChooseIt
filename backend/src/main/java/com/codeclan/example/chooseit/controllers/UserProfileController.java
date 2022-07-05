package com.codeclan.example.chooseit.controllers;

import com.codeclan.example.chooseit.models.*;
import com.codeclan.example.chooseit.repositories.ProfilePictureRepository;
import com.codeclan.example.chooseit.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
public class UserProfileController {

    @Autowired
    UserProfileRepository userProfileRepository;
    @Autowired
    ProfilePictureRepository profilePictureRepository;


    @GetMapping(value = "/userprofiles")
    public ResponseEntity<List<Profile>> getUserProfiles(){
        return new ResponseEntity<>(userProfileRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/userprofiles/{id}")
    public ResponseEntity<Optional<Profile>> getUserProfiles(@PathVariable(name = "id") Long id){
        return new ResponseEntity<>(userProfileRepository.findById(id), HttpStatus.OK);
    }


    //Update old image with new one
    @PutMapping (value = "/userprofiles/{id}")
    public Profile addUser(@PathVariable(name = "id") Long id,
                           @RequestBody Profile _Profile)
            throws IOException {
        Optional<Profile> oldRecord = userProfileRepository.findById(id);
        ProfilePicture profilePicture = oldRecord.get().getProfilepicture();
        Profile profile = _Profile;
        profile.setProfilepicture(profilePicture);
        profile.setId(id);
        userProfileRepository.save(profile);
        return profile;
    }

    //@PostMapping (value = "/userprofiles/{id}")
    @RequestMapping(path = "/userprofiles", method = POST, consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public Profile addUserTest(@RequestPart Profile inputProfile,
                               @RequestPart MultipartFile file)
            throws IOException {
        Profile profile = inputProfile;
        ProfilePicture picture = new ProfilePicture();
        picture.setDescription(file.getOriginalFilename());
        picture.setPicture(file.getBytes());
        picture.setContentType(file.getContentType());
        profile.setProfilepicture(picture);

        userProfileRepository.save(profile);
        return profile;
    }





    @GetMapping(value = "/userprofile/{id}/profilepicture")
    public ResponseEntity<byte[]> getProfilePictureByUserProfileId(@PathVariable Long id) {
        Optional<Profile> userProfile = userProfileRepository.findById(id);
        ProfilePicture profilePicture = userProfile.get().getProfilepicture();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        headers.setContentDispositionFormData("output.jpg","output.jpg");
        headers.setCacheControl("must-revalidate, post-check=0,pre-check=0");
        ResponseEntity<byte[]> response = new ResponseEntity<>(profilePicture.getPicture(),headers, HttpStatus.OK);
        return response;
    }
}
