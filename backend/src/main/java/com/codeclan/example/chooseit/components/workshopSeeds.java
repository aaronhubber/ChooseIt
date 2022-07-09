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
public class workshopSeeds implements ApplicationRunner {

    @Autowired
    WorkshopPictureRepository workshopPictureRepository;

    public workshopSeeds(){

    }

    public void run(ApplicationArguments args) throws IOException {


        BufferedImage bImage = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Gardening.png"));
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(bImage, "png", bos );

        WorkshopPicture workshopPictureG1 = new WorkshopPicture(bos.toByteArray(), Genre.GARDENING, "man next to garden planter" );
        workshopPictureRepository.save(workshopPictureG1);

        BufferedImage bImage1 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Raised.png"));
        ByteArrayOutputStream bos2 = new ByteArrayOutputStream();
        ImageIO.write(bImage1, "png", bos2 );

        WorkshopPicture workshopPictureG2 = new WorkshopPicture(bos2.toByteArray(), Genre.GARDENING, "woman in wheelchair next to raised planting bed" );
        workshopPictureRepository.save(workshopPictureG2);

        BufferedImage bImage3 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Wheelbarrow.png"));
        ByteArrayOutputStream bos3 = new ByteArrayOutputStream();
        ImageIO.write(bImage3, "png", bos3 );

        WorkshopPicture workshopPictureG3 = new WorkshopPicture(bos3.toByteArray(), Genre.GARDENING, "man carrying a wheelbarrow of soil" );
        workshopPictureRepository.save(workshopPictureG3);

        BufferedImage bImage4 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/MusicGroup.png"));
        ByteArrayOutputStream bos4 = new ByteArrayOutputStream();
        ImageIO.write(bImage4, "png", bos4 );

        WorkshopPicture workshopPictureM1 = new WorkshopPicture(bos4.toByteArray(), Genre.MUSIC, "five person band" );
        workshopPictureRepository.save(workshopPictureM1);

        BufferedImage bImage5 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Guitar.png"));
        ByteArrayOutputStream bos5 = new ByteArrayOutputStream();
        ImageIO.write(bImage5, "png", bos5 );

        WorkshopPicture workshopPictureM2 = new WorkshopPicture(bos5.toByteArray(), Genre.MUSIC, "man playing guitar" );
        workshopPictureRepository.save(workshopPictureM2);

        BufferedImage bImage6 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Bass.png"));
        ByteArrayOutputStream bos6 = new ByteArrayOutputStream();
        ImageIO.write(bImage6, "png", bos6 );

        WorkshopPicture workshopPictureM3 = new WorkshopPicture(bos6.toByteArray(), Genre.MUSIC, "man playing a bass guitar" );
        workshopPictureRepository.save(workshopPictureM3);

        BufferedImage bImage7 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Karaoke.png"));
        ByteArrayOutputStream bos7 = new ByteArrayOutputStream();
        ImageIO.write(bImage7, "png", bos7 );

        WorkshopPicture workshopPictureM4 = new WorkshopPicture(bos7.toByteArray(), Genre.MUSIC, "woman singing infront of a karaoke screen" );
        workshopPictureRepository.save(workshopPictureM4);

        BufferedImage bImage8 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/DJ.png"));
        ByteArrayOutputStream bos8 = new ByteArrayOutputStream();
        ImageIO.write(bImage8, "png", bos8 );

        WorkshopPicture workshopPictureM5 = new WorkshopPicture(bos8.toByteArray(), Genre.MUSIC, "a young man playing a DHJ turntable" );
        workshopPictureRepository.save(workshopPictureM5);

        BufferedImage bImage9 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Garden.png"));
        ByteArrayOutputStream bos9 = new ByteArrayOutputStream();
        ImageIO.write(bImage9, "png", bos9 );

        WorkshopPicture workshopPictureG4 = new WorkshopPicture(bos9.toByteArray(), Genre.MUSIC, "a small garden with a wooden shed" );
        workshopPictureRepository.save(workshopPictureG4);

        BufferedImage bImage10 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Soil.png"));
        ByteArrayOutputStream bos10 = new ByteArrayOutputStream();
        ImageIO.write(bImage10, "png", bos10 );

        WorkshopPicture workshopPictureG5 = new WorkshopPicture(bos10.toByteArray(), Genre.MUSIC, "a green box, full of soil with a garden tool" );
        workshopPictureRepository.save(workshopPictureG5);
    }

}