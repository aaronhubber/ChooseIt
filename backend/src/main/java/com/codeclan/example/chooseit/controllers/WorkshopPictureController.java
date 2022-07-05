package com.codeclan.example.chooseit.controllers;

import com.codeclan.example.chooseit.models.Profile;
import com.codeclan.example.chooseit.models.ProfilePicture;
import com.codeclan.example.chooseit.models.WorkshopPicture;
import com.codeclan.example.chooseit.repositories.WorkshopPictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class WorkshopPictureController {

    @Autowired
    WorkshopPictureRepository workshopPictureRepository;

    @GetMapping (value = "/workshoppictures")
    public ResponseEntity<List<WorkshopPicture>> getWorkshopPictures(){
        return new ResponseEntity<>(workshopPictureRepository.findAll(), HttpStatus.OK);
    }
    @PostMapping(value = "/workshoppictures")
    public List addWorkshopPicture(@PathVariable Long id,
                                    @RequestParam("profilepicture") MultipartFile pic, Model model)
            throws IOException {
        WorkshopPicture picToSave = new WorkshopPicture();
        picToSave.setPicture(pic.getBytes());
        workshopPictureRepository.save(picToSave);
        return workshopPictureRepository.findAll();
    }

//    @PutMapping(value = "/userprofile/{id}/profilepicture/add")
//    public String updateProfilePicture(@PathVariable Long id,
//                                       @RequestParam("profilepicture") MultipartFile pic, Model model)
//            throws IOException {
//        ProfilePicture picToSave = new ProfilePicture();
//        picToSave.setPicture(pic.getBytes());
//        picToSave.setId((id));
//        Optional<Profile> userProfile = userProfileRepository.findById(id);
//        userProfile.get().setProfilepicture(picToSave);
//        profilePictureRepository.save(picToSave);
////        userProfileRepository.getById(id).setProfilepicture(picToSave);
//
//        return userProfileRepository.getById(id).getName();
//    }

}
