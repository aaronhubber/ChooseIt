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

        WorkshopPicture workshopPicture1 = new WorkshopPicture(bos.toByteArray(), Genre.GARDENING, "man next to garden planter" );
        workshopPictureRepository.save(workshopPicture1);
    }

}
