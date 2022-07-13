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
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

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
    @PutMapping (value = "/updateuserprofilepdf/{id}")
//    @RequestMapping(path = "/updateuserprofilepdf/{id}", method = PUT, consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<Profile> updateUserProfilePdf (@PathVariable(name = "id") Long id,
                                  @RequestBody MultipartFile file)
            throws IOException {
        Optional<Profile> oldRecord = userProfileRepository.findById(id);
        Profile existingRecord = oldRecord.get();
        PdfModel pdfModel = new PdfModel();
        pdfModel.setContentType(file.getContentType());
        pdfModel.setData(file.getBytes());
        pdfModel.setDescription(file.getOriginalFilename());
        existingRecord.addPdf(pdfModel);
        pdfModel.setProfile(existingRecord);
        userProfileRepository.save(existingRecord);
        System.out.println(oldRecord.get().getPdfs().size());
        return new ResponseEntity(existingRecord,HttpStatus.OK);
    }


    @RequestMapping(path = "/userprofiles", method = POST, consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<Profile> addUserTest(@RequestPart String name,
                               @RequestPart String assistanceLevel,
                               @RequestPart MultipartFile file)

            throws IOException {
        Profile profile = new Profile(name, assistanceLevel);
        ProfilePicture picture = new ProfilePicture();
        picture.setDescription(file.getOriginalFilename());
        picture.setPicture(file.getBytes());
        picture.setContentType(file.getContentType());
        profile.setProfilepicture(picture);


        userProfileRepository.save(profile);
        return new ResponseEntity(profile, HttpStatus.OK);
    }

    @DeleteMapping(value = "/userprofiles/{id}")
    public ResponseEntity<Long> deleteProfile(@PathVariable Long id) {

        userProfileRepository.deleteAllById(Collections.singleton(id));

        return new ResponseEntity<>(id, HttpStatus.OK);
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
