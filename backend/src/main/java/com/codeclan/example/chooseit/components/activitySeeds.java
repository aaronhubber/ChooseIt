package com.codeclan.example.chooseit.components;

import com.codeclan.example.chooseit.models.ActivityPicture;
import com.codeclan.example.chooseit.repositories.ActivityPictureRepository;
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
public class activitySeeds implements ApplicationRunner {

    @Autowired
    ActivityPictureRepository activityPictureRepository;

    public activitySeeds() {
    }

    public void run(ApplicationArguments args) throws IOException {

        BufferedImage bImage1 = ImageIO.read(new File("src/main/resources/assets/images/activities/01_00.png"));
        ByteArrayOutputStream bos1 = new ByteArrayOutputStream();
        ImageIO.write(bImage1, "png", bos1);

        ActivityPicture activityPicture1 = new ActivityPicture("1PM", "Clock with big hand at 12 and small hand at 1", bos1.toByteArray());
        activityPictureRepository.save(activityPicture1);

        BufferedImage bImage2 = ImageIO.read(new File("src/main/resources/assets/images/activities/02_00.png"));
        ByteArrayOutputStream bos2 = new ByteArrayOutputStream();
        ImageIO.write(bImage2, "png", bos2);

        ActivityPicture activityPicture2 = new ActivityPicture("2PM", "Clock with big hand at 12 and small hand at 2", bos2.toByteArray());
        activityPictureRepository.save(activityPicture2);

        BufferedImage bImage3 = ImageIO.read(new File("src/main/resources/assets/images/activities/03_00.png"));
        ByteArrayOutputStream bos3 = new ByteArrayOutputStream();
        ImageIO.write(bImage3, "png", bos3);

        ActivityPicture activityPicture3 = new ActivityPicture("3PM", "Clock with big hand at 12 and small hand at 3", bos3.toByteArray());
        activityPictureRepository.save(activityPicture3);

        BufferedImage bImage4 = ImageIO.read(new File("src/main/resources/assets/images/activities/04_00.png"));
        ByteArrayOutputStream bos4 = new ByteArrayOutputStream();
        ImageIO.write(bImage4, "png", bos4);

        ActivityPicture activityPicture4 = new ActivityPicture("4PM", "Clock with big hand at 12 and small hand at 4", bos4.toByteArray());
        activityPictureRepository.save(activityPicture4);

        BufferedImage bImage5 = ImageIO.read(new File("src/main/resources/assets/images/activities/05_00.png"));
        ByteArrayOutputStream bos5 = new ByteArrayOutputStream();
        ImageIO.write(bImage5, "png", bos5);

        ActivityPicture activityPicture5 = new ActivityPicture("5PM", "Clock with big hand at 12 and small hand at 5", bos5.toByteArray());
        activityPictureRepository.save(activityPicture5);

        BufferedImage bImage6 = ImageIO.read(new File("src/main/resources/assets/images/activities/06_00.png"));
        ByteArrayOutputStream bos6 = new ByteArrayOutputStream();
        ImageIO.write(bImage6, "png", bos6);

        ActivityPicture activityPicture6 = new ActivityPicture("6PM", "Clock with big hand at 12 and small hand at 6", bos6.toByteArray());
        activityPictureRepository.save(activityPicture6);

        BufferedImage bImage7 = ImageIO.read(new File("src/main/resources/assets/images/activities/07_00.png"));
        ByteArrayOutputStream bos7 = new ByteArrayOutputStream();
        ImageIO.write(bImage7, "png", bos7);

        ActivityPicture activityPicture7 = new ActivityPicture("7PM", "Clock with big hand at 12 and small hand at 7", bos7.toByteArray());
        activityPictureRepository.save(activityPicture7);

        BufferedImage bImage8 = ImageIO.read(new File("src/main/resources/assets/images/activities/08_00.png"));
        ByteArrayOutputStream bos8 = new ByteArrayOutputStream();
        ImageIO.write(bImage8, "png", bos8);

        ActivityPicture activityPicture8 = new ActivityPicture("8PM", "Clock with big hand at 12 and small hand at 8", bos8.toByteArray());
        activityPictureRepository.save(activityPicture8);

        BufferedImage bImage9 = ImageIO.read(new File("src/main/resources/assets/images/activities/09_00.png"));
        ByteArrayOutputStream bos9 = new ByteArrayOutputStream();
        ImageIO.write(bImage9, "png", bos9);

        ActivityPicture activityPicture9 = new ActivityPicture("9PM", "Clock with big hand at 12 and small hand at 9", bos9.toByteArray());
        activityPictureRepository.save(activityPicture9);

        BufferedImage bImage10 = ImageIO.read(new File("src/main/resources/assets/images/activities/10_00.png"));
        ByteArrayOutputStream bos10 = new ByteArrayOutputStream();
        ImageIO.write(bImage10, "png", bos10);

        ActivityPicture activityPicture10 = new ActivityPicture("10AM", "Clock with big hand at 12 and small hand at 10", bos10.toByteArray());
        activityPictureRepository.save(activityPicture10);

        BufferedImage bImage11 = ImageIO.read(new File("src/main/resources/assets/images/activities/11_00.png"));
        ByteArrayOutputStream bos11 = new ByteArrayOutputStream();
        ImageIO.write(bImage11, "png", bos11);

        ActivityPicture activityPicture11 = new ActivityPicture("11AM", "Clock with big hand at 12 and small hand at 11", bos11.toByteArray());
        activityPictureRepository.save(activityPicture11);

        BufferedImage bImage12 = ImageIO.read(new File("src/main/resources/assets/images/activities/12_00.png"));
        ByteArrayOutputStream bos12 = new ByteArrayOutputStream();
        ImageIO.write(bImage12, "png", bos12);

        ActivityPicture activityPicture12 = new ActivityPicture("12AM", "Clock with big hand at 12 and small hand at 12", bos12.toByteArray());
        activityPictureRepository.save(activityPicture12);

        BufferedImage bImage13 = ImageIO.read(new File("src/main/resources/assets/images/activities/Breakfast.png"));
        ByteArrayOutputStream bos13 = new ByteArrayOutputStream();
        ImageIO.write(bImage13, "png", bos13);

        ActivityPicture activityPicture13 = new ActivityPicture("Breakfast", "Bowl of cereal", bos13.toByteArray());
        activityPictureRepository.save(activityPicture13);

        BufferedImage bImage14 = ImageIO.read(new File("src/main/resources/assets/images/activities/Fruit.png"));
        ByteArrayOutputStream bos14 = new ByteArrayOutputStream();
        ImageIO.write(bImage14, "png", bos14);

        ActivityPicture activityPicture14 = new ActivityPicture("Fruit Bowl", "Large bowl of fruit with bananas, grapes and other fruit", bos14.toByteArray());
        activityPictureRepository.save(activityPicture14);

        BufferedImage bImage15 = ImageIO.read(new File("src/main/resources/assets/images/activities/Pizza.png"));
        ByteArrayOutputStream bos15 = new ByteArrayOutputStream();
        ImageIO.write(bImage15, "png", bos15);

        ActivityPicture activityPicture15 = new ActivityPicture("Pizza", "A big mushroom and tomato pizza", bos15.toByteArray());
        activityPictureRepository.save(activityPicture15);

        BufferedImage bImage16 = ImageIO.read(new File("src/main/resources/assets/images/activities/RoastDinner.png"));
        ByteArrayOutputStream bos16 = new ByteArrayOutputStream();
        ImageIO.write(bImage16, "png", bos16);

        ActivityPicture activityPicture16 = new ActivityPicture("Roast Dinner", "A huge roast dinner with all the trimmings", bos16.toByteArray());
        activityPictureRepository.save(activityPicture16);

        BufferedImage bImage17 = ImageIO.read(new File("src/main/resources/assets/images/activities/Salad.png"));
        ByteArrayOutputStream bos17 = new ByteArrayOutputStream();
        ImageIO.write(bImage17, "png", bos17);

        ActivityPicture activityPicture17 = new ActivityPicture("Salad", "A healthy mixed salad", bos17.toByteArray());
        activityPictureRepository.save(activityPicture17);

        BufferedImage bImage18 = ImageIO.read(new File("src/main/resources/assets/images/activities/Sandwich.png"));
        ByteArrayOutputStream bos18 = new ByteArrayOutputStream();
        ImageIO.write(bImage18, "png", bos18);

        ActivityPicture activityPicture18 = new ActivityPicture("Sandwich", "A chicken and avocado sandwich", bos18.toByteArray());
        activityPictureRepository.save(activityPicture18);

        BufferedImage bImage19 = ImageIO.read(new File("src/main/resources/assets/images/activities/Teas.png"));
        ByteArrayOutputStream bos19 = new ByteArrayOutputStream();
        ImageIO.write(bImage19, "png", bos19);

        ActivityPicture activityPicture19 = new ActivityPicture("Cup Of Tea", "A mug with I love tea written on the front", bos19.toByteArray());
        activityPictureRepository.save(activityPicture19);

        BufferedImage bImage20 = ImageIO.read(new File("src/main/resources/assets/images/activities/Dogs.png"));
        ByteArrayOutputStream bos20 = new ByteArrayOutputStream();
        ImageIO.write(bImage20, "png", bos20);

        ActivityPicture activityPicture20 = new ActivityPicture("Dog Walker", "A man next to a happy dog", bos20.toByteArray());
        activityPictureRepository.save(activityPicture20);

        BufferedImage bImage21 = ImageIO.read(new File("src/main/resources/assets/images/activities/PubBeer.png"));
        ByteArrayOutputStream bos21 = new ByteArrayOutputStream();
        ImageIO.write(bImage21, "png", bos21);

        ActivityPicture activityPicture21 = new ActivityPicture("Pub Beer", "A man enjoying a pint of beer", bos21.toByteArray());
        activityPictureRepository.save(activityPicture21);

        BufferedImage bImage22 = ImageIO.read(new File("src/main/resources/assets/images/activities/Swimming.png"));
        ByteArrayOutputStream bos22 = new ByteArrayOutputStream();
        ImageIO.write(bImage22, "png", bos22);

        ActivityPicture activityPicture22 = new ActivityPicture("Swimming", "A woman in a swimming pool", bos22.toByteArray());
        activityPictureRepository.save(activityPicture22);

        BufferedImage bImage23 = ImageIO.read(new File("src/main/resources/assets/images/activities/Television.png"));
        ByteArrayOutputStream bos23 = new ByteArrayOutputStream();
        ImageIO.write(bImage23, "png", bos23);

        ActivityPicture activityPicture23 = new ActivityPicture("Television", "An older style TV with BBC on screen", bos23.toByteArray());
        activityPictureRepository.save(activityPicture23);
    }
}
