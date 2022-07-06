//package com.codeclan.example.chooseit.controllers;

import com.codeclan.example.chooseit.models.Genre;
import com.codeclan.example.chooseit.models.WorkshopPicture;
import com.codeclan.example.chooseit.repositories.WorkshopPictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@RestController
//public class GenerateImagesController {
//
//    @Autowired
//    WorkshopPictureRepository workshopPictureRepository;
//
//    @Autowired
//    GenerateImages generateImages;
////
////    @GetMapping (value = "/chooseworkshop/{genre}")
////    public ResponseEntity <List<GenerateImages>> getWorkshopChoices(@PathVariable Genre genre){
////        workshopPictureRepository.findByGenre(genre);
////        ArrayList<GenerateImages> generateImages = new ArrayList<>();
////        generateImages.(0);
////        workshopPictures.add(1);
////        workshopPictures.add(2);
////        generateImages.shuffleArrayList(workshopPictures);
////        return workshopPictures;
////
////    }
//}
