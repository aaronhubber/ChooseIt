package com.codeclan.example.chooseit.repositories;

import com.codeclan.example.chooseit.models.Genre;
import com.codeclan.example.chooseit.models.WorkshopPicture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkshopPictureRepository extends JpaRepository<WorkshopPicture, Long> {

    List<WorkshopPicture> findByGenre(Genre genre);
}



