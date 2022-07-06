package com.codeclan.example.chooseit.components;

import com.codeclan.example.chooseit.models.Genre;
import com.codeclan.example.chooseit.models.WorkshopPicture;
import com.codeclan.example.chooseit.repositories.WorkshopPictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;

@Component
public class Seeds implements ApplicationRunner {

    @Autowired
    WorkshopPictureRepository workshopPictureRepository;

    public Seeds(){

    }

    public void run(ApplicationArguments args) throws IOException {


        BufferedImage bImage = ImageIO.read(new File("/Users/aaron/Documents/Gardening.png"));
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(bImage, "png", bos );

        WorkshopPicture workshopPictureG1 = new WorkshopPicture(bos.toByteArray(), Genre.GARDENING, "man next to garden planter" );
        workshopPictureRepository.save(workshopPictureG1);

//        BufferedImage bImage1 = ImageIO.read(new File("/Users/aaron/Documents/RaisedBed1.png"));
//        ByteArrayOutputStream bos1 = new ByteArrayOutputStream();
//        ImageIO.write(bImage1, "png", bos1 );
//
//        WorkshopPicture workshopPictureG2 = new WorkshopPicture(bos.toByteArray(), Genre.GARDENING, "woman in wheelchair next to raised planting bed" );
//        workshopPictureRepository.save(workshopPictureG2);
//
//        BufferedImage bImage3 = ImageIO.read(new File("/Users/aaron/Documents/Wheelbarrow.png"));
//        ByteArrayOutputStream bos3 = new ByteArrayOutputStream();
//        ImageIO.write(bImage3, "png", bos3 );
//
//        WorkshopPicture workshopPictureG3 = new WorkshopPicture(bos.toByteArray(), Genre.GARDENING, "man carrying a wheelbarrow of soil" );
//        workshopPictureRepository.save(workshopPictureG3);
//
//        BufferedImage bImage4 = ImageIO.read(new File("/Users/aaron/Documents/MusicGroup.png"));
//        ByteArrayOutputStream bos4 = new ByteArrayOutputStream();
//        ImageIO.write(bImage4, "png", bos4 );
//
//        WorkshopPicture workshopPictureM1 = new WorkshopPicture(bos.toByteArray(), Genre.GARDENING, "five person band" );
//        workshopPictureRepository.save(workshopPictureM1);
//
//        BufferedImage bImage5 = ImageIO.read(new File("/Users/aaron/Documents/Guitar.png"));
//        ByteArrayOutputStream bos5 = new ByteArrayOutputStream();
//        ImageIO.write(bImage5, "png", bos5 );
//
//        WorkshopPicture workshopPictureM2 = new WorkshopPicture(bos.toByteArray(), Genre.MUSIC, "man playing guitar" );
//        workshopPictureRepository.save(workshopPictureM2);
    }

}