package com.codeclan.example.chooseit.controllers;

import com.codeclan.example.chooseit.models.ActivityPicture;
import com.codeclan.example.chooseit.models.EmotionPicture;
import com.codeclan.example.chooseit.models.WorkshopPicture;
import com.codeclan.example.chooseit.repositories.ActivityPictureRepository;
import com.codeclan.example.chooseit.repositories.EmotionPictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
public class ActivityPictureController {

    @Autowired
    ActivityPictureRepository activityPictureRepository;

    @GetMapping(value = "/activitypictures")
    public ResponseEntity<List<ActivityPicture>> getActivityPictures() {
        return new ResponseEntity<>(activityPictureRepository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(path = "/activitypictures", method = POST, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ActivityPicture addActivityPicture(@RequestPart MultipartFile file, @RequestPart ActivityPicture pictureInfo)
            throws IOException {

        ActivityPicture activityPicture = new ActivityPicture();

        activityPicture.setPicture(file.getBytes());
        activityPicture.setTitle(pictureInfo.getTitle());
        activityPicture.setDescription(pictureInfo.getDescription());

        activityPictureRepository.save(activityPicture);
        return activityPicture;
    }

    @DeleteMapping(value = "/activitypictures/{id}")
    public ResponseEntity<Long> deleteActivityPicture(@PathVariable Long id) {

        activityPictureRepository.deleteAllById(Collections.singleton(id));

        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
