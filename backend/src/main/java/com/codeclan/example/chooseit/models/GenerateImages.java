//package com.codeclan.example.chooseit.models;
//
//import com.codeclan.example.chooseit.repositories.WorkshopPictureRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.Collections;
//
//public class GenerateImages {
//
//    private ArrayList<WorkshopPicture> images;
//
//    @Autowired
//    WorkshopPictureRepository workshopPictureRepository;
//
//    public GenerateImages(ArrayList<WorkshopPicture> images) {
//        this.images = images;
//    }
//
//    public ArrayList<WorkshopPicture> getImages() {
//        return images;
//    }
//
//    public void setImages(ArrayList<WorkshopPicture> images) {
//        this.images = images;
//    }
//
//    public void addToArrayList(WorkshopPicture picture){
//        this.images.add(picture);
//    }
//
//    public void shuffleArrayList(ArrayList <WorkshopPicture> images){
//        ArrayList<WorkshopPicture> imageList = new ArrayList<WorkshopPicture>();
//        Collections.shuffle(imageList);
//    }
//}
