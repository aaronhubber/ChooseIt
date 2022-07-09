package com.codeclan.example.chooseit.controllers;

import com.codeclan.example.chooseit.models.EmotionPicture;
import com.codeclan.example.chooseit.models.WorkshopPicture;
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
public class EmotionPictureController {

    @Autowired
    EmotionPictureRepository emotionPictureRepository;

    @GetMapping(value = "/emotionpictures")
    public ResponseEntity<List<EmotionPicture>> getEmotionPictures() {
        return new ResponseEntity<>(emotionPictureRepository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(path = "/emotionpictures", method = POST, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public EmotionPicture addEmotionPicture(@RequestPart MultipartFile file, @RequestPart EmotionPicture pictureInfo)
            throws IOException {

        EmotionPicture emotionPicture = new EmotionPicture();

        emotionPicture.setPicture(file.getBytes());
        emotionPicture.setTitle(pictureInfo.getTitle());
        emotionPicture.setDescription(pictureInfo.getDescription());

        emotionPictureRepository.save(emotionPicture);
        return emotionPicture;
    }

    @DeleteMapping(value = "/emotionpictures/{id}")
    public ResponseEntity<Long> deleteEMotionPicture(@PathVariable Long id) {

        emotionPictureRepository.deleteAllById(Collections.singleton(id));

        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}


