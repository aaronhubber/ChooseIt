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

        WorkshopPicture workshopPictureG1 = new WorkshopPicture(bos.toByteArray(), Genre.GARDENING, "A man next to garden planter" );
        workshopPictureRepository.save(workshopPictureG1);

        BufferedImage bImage1 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Raised.png"));
        ByteArrayOutputStream bos2 = new ByteArrayOutputStream();
        ImageIO.write(bImage1, "png", bos2 );

        WorkshopPicture workshopPictureG2 = new WorkshopPicture(bos2.toByteArray(), Genre.GARDENING, "A woman in wheelchair and a planting bed" );
        workshopPictureRepository.save(workshopPictureG2);

        BufferedImage bImage3 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Wheelbarrow.png"));
        ByteArrayOutputStream bos3 = new ByteArrayOutputStream();
        ImageIO.write(bImage3, "png", bos3 );

        WorkshopPicture workshopPictureG3 = new WorkshopPicture(bos3.toByteArray(), Genre.GARDENING, "A man carrying a wheelbarrow of soil" );
        workshopPictureRepository.save(workshopPictureG3);

        BufferedImage bImage4 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/MusicGroup.png"));
        ByteArrayOutputStream bos4 = new ByteArrayOutputStream();
        ImageIO.write(bImage4, "png", bos4 );

        WorkshopPicture workshopPictureM1 = new WorkshopPicture(bos4.toByteArray(), Genre.MUSIC, "Five person band" );
        workshopPictureRepository.save(workshopPictureM1);

        BufferedImage bImage5 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Guitar.png"));
        ByteArrayOutputStream bos5 = new ByteArrayOutputStream();
        ImageIO.write(bImage5, "png", bos5 );

        WorkshopPicture workshopPictureM2 = new WorkshopPicture(bos5.toByteArray(), Genre.MUSIC, "A man playing guitar" );
        workshopPictureRepository.save(workshopPictureM2);

        BufferedImage bImage6 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Bass.png"));
        ByteArrayOutputStream bos6 = new ByteArrayOutputStream();
        ImageIO.write(bImage6, "png", bos6 );

        WorkshopPicture workshopPictureM3 = new WorkshopPicture(bos6.toByteArray(), Genre.MUSIC, "A man playing a bass guitar" );
        workshopPictureRepository.save(workshopPictureM3);

        BufferedImage bImage7 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Karaoke.png"));
        ByteArrayOutputStream bos7 = new ByteArrayOutputStream();
        ImageIO.write(bImage7, "png", bos7 );

        WorkshopPicture workshopPictureM4 = new WorkshopPicture(bos7.toByteArray(), Genre.MUSIC, "A woman singing karaoke" );
        workshopPictureRepository.save(workshopPictureM4);

        BufferedImage bImage8 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/DJ.png"));
        ByteArrayOutputStream bos8 = new ByteArrayOutputStream();
        ImageIO.write(bImage8, "png", bos8 );

        WorkshopPicture workshopPictureM5 = new WorkshopPicture(bos8.toByteArray(), Genre.MUSIC, "A young man playing a DJ turntable" );
        workshopPictureRepository.save(workshopPictureM5);

        BufferedImage bImage9 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Garden.png"));
        ByteArrayOutputStream bos9 = new ByteArrayOutputStream();
        ImageIO.write(bImage9, "png", bos9 );

        WorkshopPicture workshopPictureG4 = new WorkshopPicture(bos9.toByteArray(), Genre.GARDENING, "A small garden with a wooden shed" );
        workshopPictureRepository.save(workshopPictureG4);

        BufferedImage bImage10 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Soil.png"));
        ByteArrayOutputStream bos10 = new ByteArrayOutputStream();
        ImageIO.write(bImage10, "png", bos10 );

        WorkshopPicture workshopPictureG5 = new WorkshopPicture(bos10.toByteArray(), Genre.GARDENING, "A green box, full of soil" );
        workshopPictureRepository.save(workshopPictureG5);

        BufferedImage bImage11 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Art.png"));
        ByteArrayOutputStream bos11 = new ByteArrayOutputStream();
        ImageIO.write(bImage11, "png", bos11 );

        WorkshopPicture workshopPictureA1 = new WorkshopPicture(bos11.toByteArray(), Genre.ART, "A pallet with paints and paintbrush" );
        workshopPictureRepository.save(workshopPictureA1);

        BufferedImage bImage12 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Artist.png"));
        ByteArrayOutputStream bos12 = new ByteArrayOutputStream();
        ImageIO.write(bImage12, "png", bos12 );

        WorkshopPicture workshopPictureA2 = new WorkshopPicture(bos12.toByteArray(), Genre.ART, "A man painting on a canvas" );
        workshopPictureRepository.save(workshopPictureA2);

        BufferedImage bImage13 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Graphic.png"));
        ByteArrayOutputStream bos13 = new ByteArrayOutputStream();
        ImageIO.write(bImage13, "png", bos13 );

        WorkshopPicture workshopPictureA3 = new WorkshopPicture(bos13.toByteArray(), Genre.ART, "A drawing on a board" );
        workshopPictureRepository.save(workshopPictureA3);

        BufferedImage bImage14 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Paint.png"));
        ByteArrayOutputStream bos14 = new ByteArrayOutputStream();
        ImageIO.write(bImage14, "png", bos14 );

        WorkshopPicture workshopPictureA4 = new WorkshopPicture(bos14.toByteArray(), Genre.ART, "A boy painting on a pad of paper" );
        workshopPictureRepository.save(workshopPictureA4);

        BufferedImage bImage15 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Paintings.png"));
        ByteArrayOutputStream bos15 = new ByteArrayOutputStream();
        ImageIO.write(bImage15, "png", bos15 );

        WorkshopPicture workshopPictureA5 = new WorkshopPicture(bos15.toByteArray(), Genre.ART, "Two older men holding two paintings" );
        workshopPictureRepository.save(workshopPictureA5);

        BufferedImage bImage16 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/ChopOnion.png"));
        ByteArrayOutputStream bos16 = new ByteArrayOutputStream();
        ImageIO.write(bImage16, "png", bos16 );

        WorkshopPicture workshopPictureC1 = new WorkshopPicture(bos16.toByteArray(), Genre.COOKING, "A close up of hands chopping an onion" );
        workshopPictureRepository.save(workshopPictureC1);

        BufferedImage bImage17 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Cook.png"));
        ByteArrayOutputStream bos17 = new ByteArrayOutputStream();
        ImageIO.write(bImage17, "png", bos17 );

        WorkshopPicture workshopPictureC2 = new WorkshopPicture(bos17.toByteArray(), Genre.COOKING, "A woman in chef hat tasting a sauce" );
        workshopPictureRepository.save(workshopPictureC2);

        BufferedImage bImage18 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/FoodChopping.png"));
        ByteArrayOutputStream bos18 = new ByteArrayOutputStream();
        ImageIO.write(bImage18, "png", bos18 );

        WorkshopPicture workshopPictureC3 = new WorkshopPicture(bos18.toByteArray(), Genre.COOKING, "A woman chopping a cucumber on a board" );
        workshopPictureRepository.save(workshopPictureC3);

        BufferedImage bImage19 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Oven.png"));
        ByteArrayOutputStream bos19 = new ByteArrayOutputStream();
        ImageIO.write(bImage19, "png", bos19 );

        WorkshopPicture workshopPictureC4 = new WorkshopPicture(bos19.toByteArray(), Genre.COOKING, "An older man opening an oven" );
        workshopPictureRepository.save(workshopPictureC4);

        BufferedImage bImage20 = ImageIO.read(new File("src/main/resources/assets/images/workshop/workshop/Utensils.png"));
        ByteArrayOutputStream bos20 = new ByteArrayOutputStream();
        ImageIO.write(bImage20, "png", bos20 );

        WorkshopPicture workshopPictureC5 = new WorkshopPicture(bos20.toByteArray(), Genre.COOKING, "A selection of cooking utensils" );
        workshopPictureRepository.save(workshopPictureC5);
    }

}