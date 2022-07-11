package com.codeclan.example.chooseit.repositories;

import com.codeclan.example.chooseit.models.EmotionPicture;
import com.codeclan.example.chooseit.models.WorkshopPicture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface EmotionPictureRepository extends JpaRepository <EmotionPicture, Long>{

    @Transactional
    @Query(value = "SELECT * FROM emotion_pictures ORDER BY random() LIMIT 1", nativeQuery = true)
    EmotionPicture findRandomEmotion();

}
