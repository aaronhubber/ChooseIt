package com.codeclan.example.chooseit.components;


import com.codeclan.example.chooseit.models.EmotionPicture;
import com.codeclan.example.chooseit.models.Genre;
import com.codeclan.example.chooseit.models.WorkshopPicture;
import com.codeclan.example.chooseit.repositories.EmotionPictureRepository;
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
public class emotionSeeds implements ApplicationRunner {

    @Autowired
    EmotionPictureRepository emotionPictureRepository;

    public emotionSeeds() {
    }

    public void run(ApplicationArguments args) throws IOException {

        BufferedImage bImage = ImageIO.read(new File("src/main/resources/assets/images/emotions/Sad.png"));
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(bImage, "png", bos);

        EmotionPicture emotionPicture1 = new EmotionPicture("Sad", "Sad woman with crying emoji", bos.toByteArray());
        emotionPictureRepository.save(emotionPicture1);

        BufferedImage bImage2 = ImageIO.read(new File("src/main/resources/assets/images/emotions/Angry.png"));
        ByteArrayOutputStream bos2 = new ByteArrayOutputStream();
        ImageIO.write(bImage2, "png", bos2);

        EmotionPicture emotionPicture2 = new EmotionPicture("Angry", "Angry man with red face emoji", bos2.toByteArray());
        emotionPictureRepository.save(emotionPicture2);

        BufferedImage bImage3 = ImageIO.read(new File("src/main/resources/assets/images/emotions/Bored.png"));
        ByteArrayOutputStream bos3 = new ByteArrayOutputStream();
        ImageIO.write(bImage3, "png", bos3);

        EmotionPicture emotionPicture3 = new EmotionPicture("Bored", "Bored young woman in wheelchair", bos3.toByteArray());
        emotionPictureRepository.save(emotionPicture3);

        BufferedImage bImage4 = ImageIO.read(new File("src/main/resources/assets/images/emotions/Confused.png"));
        ByteArrayOutputStream bos4 = new ByteArrayOutputStream();
        ImageIO.write(bImage4, "png", bos4);

        EmotionPicture emotionPicture4 = new EmotionPicture("Confused", "Confused man with question mark", bos4.toByteArray());
        emotionPictureRepository.save(emotionPicture4);

        BufferedImage bImage5 = ImageIO.read(new File("src/main/resources/assets/images/emotions/Excited.png"));
        ByteArrayOutputStream bos5 = new ByteArrayOutputStream();
        ImageIO.write(bImage5, "png", bos5);

        EmotionPicture emotionPicture5 = new EmotionPicture("Excited", "Happy man, smiling with his hands together", bos5.toByteArray());
        emotionPictureRepository.save(emotionPicture5);

        BufferedImage bImage6 = ImageIO.read(new File("src/main/resources/assets/images/emotions/Happy.png"));
        ByteArrayOutputStream bos6 = new ByteArrayOutputStream();
        ImageIO.write(bImage6, "png", bos6);

        EmotionPicture emotionPicture6 = new EmotionPicture("Happy", "Smiling woman, making BSL happy sign", bos6.toByteArray());
        emotionPictureRepository.save(emotionPicture6);

        BufferedImage bImage7 = ImageIO.read(new File("src/main/resources/assets/images/emotions/Scared.png"));
        ByteArrayOutputStream bos7 = new ByteArrayOutputStream();
        ImageIO.write(bImage7, "png", bos7);

        EmotionPicture emotionPicture7 = new EmotionPicture("Scared", "Scared person with hands in front of mouth", bos7.toByteArray());
        emotionPictureRepository.save(emotionPicture7);

        BufferedImage bImage8 = ImageIO.read(new File("src/main/resources/assets/images/emotions/Shocked.png"));
        ByteArrayOutputStream bos8 = new ByteArrayOutputStream();
        ImageIO.write(bImage8, "png", bos8);

        EmotionPicture emotionPicture8 = new EmotionPicture("Shocked", "Man with hands either side of his face", bos8.toByteArray());
        emotionPictureRepository.save(emotionPicture8);

        BufferedImage bImage9 = ImageIO.read(new File("src/main/resources/assets/images/emotions/Yawn.png"));
        ByteArrayOutputStream bos9 = new ByteArrayOutputStream();
        ImageIO.write(bImage9, "png", bos9);

        EmotionPicture emotionPicture9 = new EmotionPicture("Tired", "Person with eyes closed, hand over mouth", bos9.toByteArray());
        emotionPictureRepository.save(emotionPicture9);

    }
}
