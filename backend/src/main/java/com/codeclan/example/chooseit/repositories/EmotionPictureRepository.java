package com.codeclan.example.chooseit.repositories;

import com.codeclan.example.chooseit.models.EmotionPicture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmotionPictureRepository extends JpaRepository <EmotionPicture, Long>{
}
