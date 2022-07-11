package com.codeclan.example.chooseit.controllers;

import com.codeclan.example.chooseit.models.Genre;
import com.codeclan.example.chooseit.models.Profile;
import com.codeclan.example.chooseit.models.ProfilePicture;
import com.codeclan.example.chooseit.models.WorkshopPicture;
import com.codeclan.example.chooseit.repositories.WorkshopPictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
public class WorkshopPictureController {

    @Autowired
    WorkshopPictureRepository workshopPictureRepository;

    @GetMapping(value = "/workshoppictures")
    public ResponseEntity<List<WorkshopPicture>> getWorkshopPictures() {
        return new ResponseEntity<>(workshopPictureRepository.findAll(), HttpStatus.OK);
    }


    @GetMapping(value = "/workshoppictures/{id}")
    public ResponseEntity<Optional<WorkshopPicture>> getWorkshopPictureById(@PathVariable(name = "id") Long id){
        return new ResponseEntity<>(workshopPictureRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/randomworkshoppicture")
    public ResponseEntity<WorkshopPicture> getRandomWorkshopPicture(){
        return new ResponseEntity(workshopPictureRepository.findRandom(1L), HttpStatus.OK);
    }
////
//    @GetMapping(value = "/randomworkshoppicture")
//       public List<WorkshopPicture> getRandomWorkshop(List<WorkshopPicture> pictures, int numberOfPictures) {
//        List<WorkshopPicture> randomPictures = new ArrayList<>();
//        List<WorkshopPicture> copy = new ArrayList<>(pictures);
//
//        SecureRandom rand = new SecureRandom();
//        for (int i = 0; i < Math.min(numberOfPictures, pictures.size()); i++) {
//            randomPictures.add( copy.remove( rand.nextInt( copy.size() ) ));
//        }
//
//        return randomPictures;
//    }



    @RequestMapping(path = "/workshoppictures", method = POST, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public WorkshopPicture addWorkshopPicture(@RequestPart MultipartFile file, @RequestPart WorkshopPicture pictureInfo)
            throws IOException {

        WorkshopPicture workshopPicture = new WorkshopPicture();

        workshopPicture.setPicture(file.getBytes());
        workshopPicture.setGenre(pictureInfo.getGenre());
        workshopPicture.setDescription(pictureInfo.getDescription());
//        workshopPicture.setContentType((file.getContentType()));

        workshopPictureRepository.save(workshopPicture);
        return workshopPicture;
    }

    @DeleteMapping(value = "/workshoppictures/{id}")
    public ResponseEntity<Long> deletePicture(@PathVariable Long id) {

        workshopPictureRepository.deleteAllById(Collections.singleton(id));

        return new ResponseEntity<>(id, HttpStatus.OK);
    }
    }

//    @PostMapping
//    public ResponseEntity<String> upload(@RequestParam("workshopPicture") MultipartFile image, Model model) {
//        try {
//            WorkshopPicture workshopPicture = new WorkshopPicture();
//            workshopPictureRepository.save(workshopPicture);
//
//            return ResponseEntity.status(HttpStatus.OK)
//                    .body(String.format("Image uploaded successfully: %s", image.getOriginalFilename()));
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(String.format("Could not upload the image: %s!", image.getOriginalFilename()));
//        }
//    }

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




